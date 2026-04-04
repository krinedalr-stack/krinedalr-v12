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
    ""
  ).toString().toLowerCase();

  if (raw.includes("red")) return "red";
  if (raw.includes("orange")) return "orange";
  if (raw.includes("yellow")) return "yellow";
  return "green";
}

function levelRank(level) {
  if (level === "red") return 3;
  if (level === "orange") return 2;
  if (level === "yellow") return 1;
  return 0;
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
    // 🔥 FIXED FETCH (THIS WAS YOUR ISSUE)
    const r = await fetch(
      "https://www.met.ie/Open_Data/json/warning_IRELAND.json",
      {
        cache: "no-store",
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        },
      }
    );

    // DEBUG (optional remove later)
    console.log("MET FETCH STATUS:", r.status);

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

    const cleaned = warnings.map((w) => {
      const level = normalizeLevel(w);

      const start = parseDate(
        w?.onset || w?.Onset ||
        w?.start || w?.Start ||
        w?.effective ||
        w?.valid_from || w?.validFrom ||
        w?.startTime
      );

      const end = parseDate(
        w?.expires || w?.Expires ||
        w?.end || w?.End ||
        w?.expiry ||
        w?.valid_to || w?.validTo ||
        w?.endTime
      );

      const headline = (
        w?.headline ||
        w?.Headline ||
        w?.title ||
        w?.Title ||
        w?.event ||
        ""
      ).toString();

      const storm = extractStorm(headline);

      const fips = extractFips(w);

      const counties = uniq(
        fips
          .map((c) => c.toUpperCase())
          .map((c) => FIPS_TO_COUNTY[c])
          .filter(Boolean)
      );

      return {
        level,
        headline,
        storm,
        counties,
        start,
        end,
      };
    });

    // 🔥 HIGHEST WARNING (WHAT YOU WANT)
    let status = "green";
    for (const w of cleaned) {
      if (levelRank(w.level) > levelRank(status)) {
        status = w.level;
      }
    }

    // upcoming (optional display)
    const now = new Date();
    const upcoming = cleaned
      .filter((w) => w.start && w.start > now)
      .sort((a, b) => a.start - b.start)[0] || null;

    const allCounties = uniq(
      cleaned.flatMap((w) => w.counties)
    ).sort();

    return new Response(JSON.stringify({
      ok: true,
      status,
      upcoming,
      warnings: cleaned.slice(0, 10),
      affectedCounties: allCounties,
      fetchedAt,
    }), {
      headers: { "content-type": "application/json" },
    });

  } catch (e) {
    console.error("WEATHER ERROR:", e);

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
