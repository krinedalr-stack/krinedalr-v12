export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  const fetchedAt = new Date().toISOString();

  try {
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
        data = await r.json();
        break;
      } catch {}
    }

    if (!data) {
      return new Response(
        JSON.stringify({ ok: true, status: "green", warnings: [], fetchedAt }),
        {
          headers: {
            "content-type": "application/json",
            "cache-control":
              "no-store, no-cache, must-revalidate, proxy-revalidate",
            pragma: "no-cache",
            expires: "0",
          },
        }
      );
    }

    const list = Array.isArray(data)
      ? data
      : data.warnings || data.Warnings || data.data || [];
    const warnings = Array.isArray(list) ? list : [];

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

    const status = hasRed
      ? "red"
      : hasOrange
      ? "orange"
      : hasYellow
      ? "yellow"
      : "green";

    const cleaned = warnings.slice(0, 10).map((w) => ({
      id: w.id || w.ID || w.identifier || null,
      level: (w.level || w.Level || w.severity || w.Severity || "unknown").toString(),
      headline: (w.headline || w.Headline || w.title || w.Title || "").toString(),
    }));

    return new Response(
      JSON.stringify({ ok: true, status, warnings: cleaned, fetchedAt }),
      {
        headers: {
          "content-type": "application/json",
          "cache-control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          pragma: "no-cache",
          expires: "0",
        },
      }
    );
  } catch {
    return new Response(
      JSON.stringify({ ok: true, status: "green", warnings: [], fetchedAt }),
      {
        headers: {
          "content-type": "application/json",
          "cache-control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          pragma: "no-cache",
          expires: "0",
        },
      }
    );
  }
}
