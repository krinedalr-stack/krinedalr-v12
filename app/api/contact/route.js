export const runtime = "nodejs"; // important for server-side fetch on Vercel

function clean(s) {
  return String(s || "").trim();
}

export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot (bots fill this)
    if (clean(body.website)) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const name = clean(body.Name);
    const phone = clean(body.Phone);
    const email = clean(body.Email);
    const eircode = clean(body.Eircode);
    const town = clean(body["Town/County"]);
    const service = clean(body.Service);
    const prefDate = clean(body["Preferred date"]);
    const prefTime = clean(body["Preferred time"]);
    const details = clean(body.Details);

    if (!name || !phone || !email || !eircode || !town) {
      return new Response(JSON.stringify({ ok: false, error: "Missing required fields." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO = process.env.CONTACT_TO || "krinedalr@outlook.com,krinedalr@gmail.com";
    const CONTACT_FROM = process.env.CONTACT_FROM || "KRINEDAL-R <no-reply@krinedalr.ie>";

    if (!RESEND_API_KEY) {
      return new Response(JSON.stringify({ ok: false, error: "Email service not configured." }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const subject = `KRINEDAL-R Quote Request — ${name} (${town})`;

    const text =
`NEW QUOTE REQUEST (KRINEDAL-R)

Name: ${name}
Phone: ${phone}
Email: ${email}
Eircode: ${eircode}
Town/County: ${town}

Service: ${service || "-"}
Preferred date: ${prefDate || "-"}
Preferred time: ${prefTime || "-"}

Details:
${details || "-"}

---
Sent from krinedalr.ie`;

    const toList = CONTACT_TO.split(",").map((s) => s.trim()).filter(Boolean);

    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: toList,
        subject,
        text,
      }),
    });

    if (!resendResp.ok) {
      const errText = await resendResp.text().catch(() => "");
      return new Response(JSON.stringify({ ok: false, error: "Email send failed.", detail: errText }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "Bad request." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
