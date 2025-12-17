export async function POST(req) {
  try {
    const body = await req.json();

    // Honeypot (bots fill this)
    if (body.website) {
      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    const name = (body.Name || "").trim();
    const phone = (body.Phone || "").trim();
    const email = (body.Email || "").trim();
    const eircode = (body.Eircode || "").trim();
    const town = (body["Town/County"] || "").trim();
    const service = (body.Service || "").trim();
    const date = (body["Preferred date"] || "").trim();
    const time = (body["Preferred time"] || "").trim();
    const details = (body.Details || "").trim();

    // Basic validation
    if (!name || !phone || !email || !eircode || !town || !service || !date || !time) {
      return new Response(
        JSON.stringify({ ok: false, error: "Missing required fields." }),
        { status: 400 }
      );
    }

    // Email content (goes to your inbox)
    const subject = `KRINEDAL-R Estimate Request — ${service} — ${town}`;
    const text = `
NEW ESTIMATE REQUEST — KRINEDAL-R

Name: ${name}
Phone: ${phone}
Email: ${email}

Eircode: ${eircode}
Town/County: ${town}

Service: ${service}
Preferred date: ${date}
Preferred time: ${time}

Details:
${details || "(none provided)"}

---- 
Sent from krinedalr.ie contact form
`;

    // ✅ OPTION A (FAST + SIMPLE): Resend (recommended)
    // 1) Install: npm i resend
    // 2) Add env: RESEND_API_KEY=xxxx
    // 3) Add env: CONTACT_TO=krinedalr@outlook.com,krinedalr@gmail.com
    // 4) Add env: CONTACT_FROM=contact@krinedalr.ie  (must be verified domain in Resend)

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const toList = (process.env.CONTACT_TO || "krinedalr@outlook.com,krinedalr@gmail.com")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    await resend.emails.send({
      from: process.env.CONTACT_FROM || "KRINEDAL-R <onboarding@resend.dev>",
      to: toList,
      subject,
      text,
      reply_to: email, // so you can reply directly to customer
    });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: "Server error. Please try again." }),
      { status: 500 }
    );
  }
}
