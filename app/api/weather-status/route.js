export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

/**
 * Mirrors Met Éireann warnings:
 * - Uses warning_IRELAND.json (official open data JSON)
 * - Determines highest current level (yellow/orange/red) else green
 * - Extracts affected counties from FIPS codes (EI01..EI31)
 *
 * Met Éireann warning open data description references:
 * - warning_IRELAND.json contains all valid warnings (updated frequently). :contentReference[oaicite:0]{index=0}
 */

const FIPS_TO_COUNTY = {
  EI01: "Carlow",
  EI02: "Cavan",
  EI03: "Clare",
  EI04: "Cork",
  EI06: "Donegal",
  EI07: "Dublin",
  EI10: "Galway",
  EI11: "Kerry",
  EI12: "Kildare",
  EI13: "Kilkenny",
  EI14: "Leitrim",
  EI15: "Laois",
  EI16: "Limerick",
  EI18: "Longford",
  EI19: "Louth",
  EI20: "Mayo",
  EI21: "Meath",
  EI22: "Monaghan",
  EI23: "Offaly",
  EI24: "Roscommon",
  EI25: "Sligo",
  EI26: "Tipperary",
  EI27: "Waterford",
  EI29: "Westmeath",
  EI30: "Wexford",
  EI31: "Wicklow",
};

function normalizeLevelFromWarning(w) {
  const raw =
    (w?.level || w?.Level || w?.severity || w?.Severity || w?.awareness_level || "").toString().toLowerCase();

  // Some feeds use "Moderate/Severe/Extreme" (CAP) => yellow/orange/red mapping
  if (raw.includes("red") || raw.includes("extreme")) return "red";
  if (raw.includes("orange") || raw.includes("severe")) return "orange";
  if (raw.includes("yellow") || raw.includes("moderate")) return "yellow";
  return "green";
}

function extractFipsCodes(w) {
  // Try common field names across implementations
  const candidates = [
    w?.regions,
    w?.Regions,
    w?.region,
    w?.Region,
    w?.fips,
    w?.FIPS,
    w?.areas,
    w?.Areas,
    w?.geocode,
    w?.Geocode,
  ];

  // If any candidate is an array, use it
  for (const c of candidates) {
    if (Array.isArray(c)) return c.map(String);
  }

  // Some formats include comma-separated strings
  const s =
    (w?.regions || w?.Regions || w?.area || w?.Area || w?.geocodes || w?.Geocodes || "").toString();
  if (s && s.includes("EI")) {
    return s.split(/[\s,;]+/).filter((x) => x.startsWith("EI"));
  }

  return [];
}

function uniq(arr) {
  return Array.from(new Set(arr));
}

export async function GET() {
  const fetchedAt = new Date().toISOString();

  try {
    // Official open-data JSON resource for warnings across Ireland
    const url = "https://www.met.ie/Open_Data/json/warning_IRELAND.json";
    const r = await fetch(url, { cache: "no-store" });
    if (!r.ok) {
      return new Response(
        JSON.stringify({ ok: false, error: "Met Éireann feed unavailable", fetchedAt }),
        { headers: { "content-type": "application/json", "cache-control": "no-store" } }
      );
    }

    const data = await r.json();
    const warnings = Array.isArray(data) ? data : [];

    if (warnings.length === 0) {
      return new Response(
        JSON.stringify({
          ok: true,
          status: "green",
          warnings: [],
          affectedCounties: [],
          fetchedAt,
        }),
        { headers: { "content-type": "application/json", "cache-control": "no-store" } }
      );
    }

    // Determine overall site status by highest severity
    let status = "green";
    for (const w of warnings) {
      const lvl = normalizeLevelFromWarning(w);
      if (lvl === "red") { status = "red"; break; }
      if (lvl === "orange") status = status === "red" ? "red" : "orange";
      if (lvl === "yellow" && status === "green") status = "yellow";
    }

    // Build cleaned list with county extraction
    const cleaned = warnings.slice(0, 12).map((w) => {
      const level = normalizeLevelFromWarning(w);
      const fipsCodes = extractFipsCodes(w);
      const counties = uniq(
        fipsCodes
          .map((c) => c.toString().trim().toUpperCase())
          .filter((c) => /^EI\d{2,3}$/.test(c))
          .map((c) => FIPS_TO_COUNTY[c])
          .filter(Boolean)
      );

      return {
        id: w?.id || w?.ID || w?.capId || w?.capID || w?.identifier || null,
        level,
        headline: (w?.headline || w?.Headline || w?.title || w?.Title || w?.event || w?.Event || "").toString(),
        counties,
      };
    });

    const allCounties = uniq(cleaned.flatMap((x) => x.counties)).sort();

    return new Response(
      JSON.stringify({
        ok: true,
        status,
        warnings: cleaned,
        affectedCounties: allCounties,
        fetchedAt,
      }),
      { headers: { "content-type": "application/json", "cache-control": "no-store" } }
    );
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "Weather service error", fetchedAt }),
      { headers: { "content-type": "application/json", "cache-control": "no-store" } }
    );
  }
}
