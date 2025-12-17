export async function POST(req) {
  try {
    const body = await req.json();

    // Basic sanitize
    const data = {
      name: String(body?.Name || "").trim(),
      phone: String(body?.Phone || "").trim(),
      email: String(body?.Email || "").trim(),
      eircode: String(body?.Eircode || "").trim(),
      town: String(body?.["Town/County"] || "").trim(),
      service: String(body?.Service || "").trim(),
      date: String(body?.["Preferred date"] || "").trim(),
      time: String(body?.["Preferred time"] || "").trim(),
      details: String(body?.Details || "").trim(),
    };

    // If Resend key not set, return a friendly error (site still builds)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return Response.json(
        { ok: false, error: "Email sending is not configured yet (RESEND_API_KEY missing)." },
        { status: 500 }
      );
    }

    const toList = (process.env.CONTACT_TO || "krinedalr@outlook.com,krinedalr@gmail.com")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    // IMPORTANT: With Resend, FROM must be a verified sender/domain in your Resend account
    const from = process.env.CONTACT_FROM || "KRINEDAL-R <onboarding@resend.dev>";

    const subject = `New website quote request — ${data.service || "Enquiry"}`;

    const html = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Arial,sans-serif;line-height:1.5">
        <h2 style="margin:0 0 10px">KRINEDAL-R — New Estimate Request</h2>
        <p style="margin:0 0 12px;color:#444">A customer submitted the website form.</p>
        <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;border:1px solid #eee;width:100%">
          <tr><td style="border:1px solid #eee"><strong>Name</strong></td><td style="border:1px solid #eee">${escapeHtml(data.name)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Phone</strong></td><td style="border:1px solid #eee">${escapeHtml(data.phone)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Email</strong></td><td style="border:1px solid #eee">${escapeHtml(data.email)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Eircode</strong></td><td style="border:1px solid #eee">${escapeHtml(data.eircode)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Town/County</strong></td><td style="border:1px solid #eee">${escapeHtml(data.town)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Service</strong></td><td style="border:1px solid #eee">${escapeHtml(data.service)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Date</strong></td><td style="border:1px solid #eee">${escapeHtml(data.date)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Time</strong></td><td style="border:1px solid #eee">${escapeHtml(data.time)}</td></tr>
          <tr><td style="border:1px solid #eee"><strong>Details</strong></td><td style="border:1px solid #eee;white-space:pre-wrap">${escapeHtml(data.details)}</td></tr>
        </table>
      </div>
    `;

    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: toList,
        subject,
        html,
        reply_to: data.email || undefined,
      }),
    });

    const json = await resp.json().catch(() => ({}));

    if (!resp.ok) {
      return Response.json(
        { ok: false, error: json?.message || "Failed to send email" },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (e) {
    return Response.json({ ok: false, error: "Bad request" }, { status: 400 });
  }
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
