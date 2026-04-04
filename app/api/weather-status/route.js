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

export async function GET() {
  const fetchedAt = new Date().toISOString();

  try {
    // 🔥 TIMEOUT CONTROL
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const r = await fetch(
      "https://www.met.ie/Open_Data/json/warning_IRELAND.json?nocache=1",
      {
        cache: "no-store",
        signal: controller.signal,
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
        },
      }
    );

    clearTimeout(timeout);

    if (!r.ok) {
      throw new Error("Met Éireann fetch failed: " + r.status);
    }

    // 🔥 READ AS TEXT (NOT JSON)
    const raw = await r.text();

    // 🔥 CLEAN BAD CONTROL CHARACTERS
    const safe = raw.replace(/[\u0000-\u001F]+/g, "");

    // 🔥 PARSE CLEAN JSON
    const data = JSON.parse(safe);
    const warnings = Array.isArray(data) ? data : [];

    const cleaned = warnings.map((w) => {
      const level = normalizeLevel(w);

      const headline = (
        w?.headline ||
        w?.Headline ||
        w?.title ||
        w?.Title ||
        w?.event ||
        ""
      ).toString();

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
        counties,
      };
    });

    // 🔥 GET HIGHEST WARNING LEVEL
    let status = "green";
    for (const w of cleaned) {
      if (levelRank(w.level) > levelRank(status)) {
        status = w.level;
      }
    }

    const allCounties = uniq(
      cleaned.flatMap((x) => x.counties)
    ).sort();

    return new Response(
      JSON.stringify({
        ok: true,
        status,
        warnings: cleaned,
        affectedCounties: allCounties,
        fetchedAt,
      }),
      {
        headers: {
          "content-type": "application/json",
          "cache-control": "no-store",
        },
      }
    );

  } catch (e) {
    return new Response(
      JSON.stringify({
        ok: false,
        error: e.message,
        fetchedAt,
      }),
      {
        headers: {
          "content-type": "application/json",
          "cache-control": "no-store",
        },
      }
    );
  }
}
