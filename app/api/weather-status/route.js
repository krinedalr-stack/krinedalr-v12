// app/api/weather-status/route.js
export const runtime = "nodejs"; // safest for fetch + parsing
export const revalidate = 300; // cache 5 minutes at the edge if supported

const WARNINGS_URL = "https://www.met.ie/Open_Data/json/warning_IRELAND.json";

function rank(level) {
  const v = String(level || "").toLowerCase();
  if (v.includes("red")) return 3;
  if (v.includes("orange")) return 2;
  if (v.includes("yellow")) return 1;
  return 0;
}

function normalize(level) {
  const v = String(level || "").toLowerCase();
  if (v.includes("red")) return "red";
  if (v.includes("orange")) return "orange";
  if (v.includes("yellow")) return "yellow";
  return "green";
}

export async function GET() {
  try {
    const res = await fetch(WARNINGS_URL, {
      // Next.js caching hint
      next: { revalidate: 300 },
      headers: { "User-Agent": "krinedalr.ie (weather status)" },
    });

    if (!res.ok) {
      return Response.json(
        { ok: false, status: "green", warnings: [], error: `Fetch failed: ${res.status}` },
        { status: 200 }
      );
    }

    const data = await res.json(); // array
    const now = new Date();

    // Keep warnings that are not expired yet (active OR upcoming)
    const relevant = Array.isArray(data)
      ? data.filter((w) => {
          const expiry = w?.expiry ? new Date(w.expiry) : null;
          if (!expiry || Number.isNaN(expiry.getTime())) return true; // if missing expiry, keep
          return expiry >= now; // not expired
        })
      : [];

    // Find highest level among relevant warnings
    let top = "green";
    let topRank = 0;

    for (const w of relevant) {
      const r = rank(w?.level);
      if (r > topRank) {
        topRank = r;
        top = normalize(w?.level);
      }
    }

    // Sort warnings by rank then onset time
    const warnings = relevant
      .map((w) => ({
        id: w?.capId || w?.id,
        level: normalize(w?.level),
        levelLabel: w?.level || "Green",
        headline: w?.headline || "",
        onset: w?.onset || null,
        expiry: w?.expiry || null,
        issued: w?.issued || null,
        updated: w?.updated || null,
        regions: w?.regions || [],
        status: w?.status || "",
      }))
      .sort((a, b) => {
        const dr = rank(b.levelLabel) - rank(a.levelLabel);
        if (dr !== 0) return dr;
        const ao = a.onset ? new Date(a.onset).getTime() : 0;
        const bo = b.onset ? new Date(b.onset).getTime() : 0;
        return ao - bo;
      })
      .slice(0, 6);

    return Response.json({
      ok: true,
      status: top, // green | yellow | orange | red
      fetchedAt: new Date().toISOString(),
      warnings,
      source: "Met Éireann Open Data",
    });
  } catch (e) {
    return Response.json(
      { ok: false, status: "green", warnings: [], error: String(e) },
      { status: 200 }
    );
  }
}
