export async function GET() {
  const fetchedAt = new Date().toISOString();

  try {
    // Best-effort: fetch Met Éireann warnings page and detect highest level
    const res = await fetch("https://www.met.ie/warnings", {
      headers: { "User-Agent": "krinedalr-site/1.0" },
      cache: "no-store",
    });

    const html = await res.text();

    // Detect levels
    const hasRed = /Status\s*Red/i.test(html);
    const hasOrange = /Status\s*Orange/i.test(html);
    const hasYellow = /Status\s*Yellow/i.test(html);

    const status = hasRed ? "red" : hasOrange ? "orange" : hasYellow ? "yellow" : "green";

    // Pull some warning headings (best effort)
    const warnings = [];
    const matches = html.match(/Status\s*(Red|Orange|Yellow)[^<]{0,120}/gi) || [];
    for (const m of matches.slice(0, 6)) {
      const level = (m.match(/Red|Orange|Yellow/i)?.[0] || "").toLowerCase();
      warnings.push({
        id: m,
        level,
        headline: m.replace(/\s+/g, " ").trim(),
      });
    }

    return Response.json({
      ok: true,
      status,
      warnings,
      fetchedAt,
    });
  } catch (e) {
    return Response.json({
      ok: true,
      status: "green",
      warnings: [],
      fetchedAt,
      error: "Weather source unavailable",
    });
  }
}
