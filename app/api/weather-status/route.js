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
    w?.severity ||
    w?.awareness_level ||
    ""
  ).toString().toLowerCase();

  if (raw.includes("red")) return "red";
  if (raw.includes("orange")) return "orange";
  if (raw.includes("yellow")) return "yellow";
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
    w?.areas ||
    w?.fips ||
    w?.geocode ||
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

      const start = parseDate(
        w?.onset || w?.start || w?.effective
      );

      const end = parseDate(
        w?.expires || w?.end || w?.expiry
      );

      const headline = (
        w?.headline ||
        w?.event ||
        ""
      ).toString();

      const storm = extractStorm(headline);

      const fips = extractFips(w);

      const counties = uniq(
        fips
          .map((c) => FIPS_TO_COUNTY[c])
          .filter(Boolean)
      );

      // ACTIVE
      if (start && end && start <= now && end >= now) {
        if (level === "red") currentStatus = "red";
        else if (level === "orange" && currentStatus !== "red")
          currentStatus = "orange";
        else if (level === "yellow" && currentStatus === "green")
          currentStatus = "yellow";
      }

      // UPCOMING
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

    // sort upcoming by closest
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

  } catch {
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
