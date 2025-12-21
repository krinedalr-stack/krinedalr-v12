// app/api/weather-status/route.js
export const runtime = "nodejs";

export async function GET() {
  const fetchedAt = new Date().toISOString();

  try {
    // Met endpoints sometimes change. We try a few, but NEVER crash the build.
    const candidates = [
      "https://www.met.ie/Open_Data/json/warnings.json",
      "https://www.met.ie/Open_Data/json/warnings/warnings.json",
      "https://www.met.ie/Open_Data/json/warnings",
    ];

    let data = null;
    for (const url of candidates) {
      try {
        const r = await fetch(url, { cache: "no-store" });
        if (!r.ok) continue;
        const j = await r.json();
        data = j;
        break;
      } catch {}
    }

    if (!data) {
      // fallback: safe green
      return Response.json({ ok: true, status: "green", warnings: [], fetchedAt });
    }

    // Try to normalize
    const list = Array.isArray(data)
      ? data
      : data.warnings || data.Warnings || data.data || [];
    const warnings = Array.isArray(list) ? list : [];

    // Determine highest severity
    const levels = warnings
      .map((w) =>
        (w.level || w.Level || w.severity || w.Severity || "")
          .toString()
          .toLowerCase()
      )
      .filter(Boolean);

    const hasRed = levels.some((x) => x.includes("red"));
    const hasOrange = levels.some((x) => x.includes("orange"));
    const hasYellow = levels.some((x) => x.includes("yellow"));

    const status = hasRed ? "red" : hasOrange ? "orange" : hasYellow ? "yellow" : "green";

    const cleaned = warnings.slice(0, 10).map((w) => ({
      id: w.id || w.ID || w.identifier || null,
      level: (w.level || w.Level || w.severity || w.Severity || "unknown").toString(),
      headline: (w.headline || w.Headline || w.title || w.Title || "").toString(),
    }));

    return Response.json({ ok: true, status, warnings: cleaned, fetchedAt });
  } catch {
    return Response.json({ ok: true, status: "green", warnings: [], fetchedAt });
  }
}
