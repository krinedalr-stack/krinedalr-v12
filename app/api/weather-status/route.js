export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

const FIPS_TO_COUNTY = {
  EI01: "Carlow", EI02: "Cavan", EI03: "Clare", EI04: "Cork",
  EI06: "Donegal", EI07: "Dublin", EI10: "Galway", EI11: "Kerry",
  EI12: "Kildare", EI13: "Kilkenny", EI14: "Leitrim", EI15: "Laois",
  EI16: "Limerick", EI18: "Longford", EI19: "Louth", EI20: "Mayo",
  EI21: "Meath", EI22: "Monaghan", EI23: "Offaly", EI24: "Roscommon",
  EI25: "Sligo", EI26: "Tipperary", EI27: "Waterford",
  EI29: "Westmeath", EI30: "Wexford", EI31: "Wicklow",
};

function normalizeLevel(w) {
  const raw = (
    w?.level ||
    w?.Level ||
    w?.severity ||
    w?.Severity ||
    w?.awareness_level ||
    w?.AwarenessLevel ||
    ""
  ).toString().toLowerCase();

  if (raw.includes("red") || raw.includes("extreme")) return "red";
  if (raw.includes("orange") || raw.includes("severe")) return "orange";
  if (raw.includes("yellow") || raw.includes("moderate")) return "yellow";
  return "green";
}

function parseDate(d) {
  if (!d) return null;
  const date = new Date(d);
  return isNaN(date) ? null : date;
}

function extractFips(w) {
  const arr =
    w?.regions ||
    w?.Regions ||
    w?.areas ||
    w?.Areas ||
    w?.fips ||
    w?.FIPS ||
    w?.geocode ||
    w?.Geocode ||
    [];

  if (Array.isArray(arr)) return arr.map(String);

  if (typeof arr === "string") {
    return arr.split(/[\s,;]+/).filter((x) => x.startsWith("EI"));
  }

  return [];
}

function uniq(arr) {
  return [...new Set(arr)];
}

function extractStorm(headline) {
  const match = headline?.match(/Storm\s+\w+/i);
  return match ? match[0] : null;
}

export async function GET() {
  const fetchedAt = new Date().toISOString();

  try {
    const r = await fetch(
      "https://www.met.ie/Open_Data/json/warning_IRELAND.json",
      { cache: "no-store" }
    );

    if (!r.ok) {
      return new Response(JSON.stringify({
        ok: true,
        status: "green",
        warnings: [],
        upcoming: null,
        affectedCounties: [],
        fallback: true,
        fetchedAt,
      }), { headers: { "content-type": "application/json" } });
    }

    const data = await r.json();
    const warnings = Array.isArray(data) ? data : [];

    if (warnings.length === 0) {
      return new Response(JSON.stringify({
        ok: true,
        status: "green",
        warnings: [],
        upcoming: null,
        affectedCounties: [],
        fetchedAt,
      }), { headers: { "content-type": "application/json" } });
    }

    const now = new Date();

    let currentStatus = "green";
    let upcoming = [];

    const cleaned = warnings.map((w) => {
      const level = normalizeLevel(w);

      // 🔥 FULL DATE COVERAGE (THIS WAS YOUR ISSUE)
      const start = parseDate(
        w?.onset ||
        w?.Onset ||
        w?.start ||
        w?.Start ||
        w?.effective ||
        w?.Effective ||
        w?.valid_from ||
        w?.validFrom ||
        w?.startTime ||
        w?.StartTime
      );

      const end = parseDate(
        w?.expires ||
        w?.Expires ||
        w?.end ||
        w?.End ||
        w?.expiry ||
        w?.Expiry ||
        w?.valid_to ||
        w?.validTo ||
        w?.endTime ||
        w?.EndTime
      );

      const headline = (
        w?.headline ||
        w?.Headline ||
        w?.title ||
        w?.Title ||
        w?.event ||
        w?.Event ||
        ""
      ).toString();

      const storm = extractStorm(headline);

      const fips = extractFips(w);

      const counties = uniq(
        fips
          .map((c) => c.toString().trim().toUpperCase())
          .map((c) => FIPS_TO_COUNTY[c])
          .filter(Boolean)
      );

      // ✅ ACTIVE
      if (start && end && start <= now && end >= now) {
        if (level === "red") currentStatus = "red";
        else if (level === "orange" && currentStatus !== "red")
          currentStatus = "orange";
        else if (level === "yellow" && currentStatus === "green")
          currentStatus = "yellow";
      }

      // ✅ UPCOMING
      if (start && start > now) {
        upcoming.push({
          level,
          start,
          end,
          headline,
          storm,
          counties,
        });
      }

      return {
        level,
        headline,
        storm,
        counties,
        start,
        end,
      };
    });

    // closest upcoming
    upcoming.sort((a, b) => a.start - b.start);
    const nextWarning = upcoming[0] || null;

    const allCounties = uniq(
      cleaned.flatMap((w) => w.counties)
    ).sort();

    return new Response(JSON.stringify({
      ok: true,
      status: currentStatus,
      upcoming: nextWarning,
      warnings: cleaned.slice(0, 10),
      affectedCounties: allCounties,
      fetchedAt,
    }), {
      headers: { "content-type": "application/json" },
    });

  } catch (e) {
    return new Response(JSON.stringify({
      ok: true,
      status: "green",
      warnings: [],
      upcoming: null,
      affectedCounties: [],
      fallback: true,
      fetchedAt,
    }), { headers: { "content-type": "application/json" } });
  }
}
