// app/api/contact/route.js
import { Buffer } from "buffer";

export const runtime = "nodejs";

function toBase64(arrayBuffer) {
  return Buffer.from(new Uint8Array(arrayBuffer)).toString("base64");
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Simple GET check (does NOT send email)
export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, route: "/api/contact", method: "POST" }),
    { headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const CONTACT_TO =
      process.env.CONTACT_TO || "krinedalr@outlook.com,krinedalr@gmail.com";
    const CONTACT_FROM =
      process.env.CONTACT_FROM || "KRINEDAL-R <onboarding@resend.dev>";

    if (!RESEND_API_KEY) {
      return Response.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const form = await req.formData();

    // Honeypot
    if (form.get("website")) {
      return Response.json({ ok: true });
    }

    const FormType = String(form.get("FormType") || "Estimate").trim();
    const Name = String(form.get("Name") || "").trim();
    const Phone = String(form.get("Phone") || "").trim();
    const Email = String(form.get("Email") || "").trim();
    const Eircode = String(form.get("Eircode") || "").trim();
    const Town = String(form.get("Town/County") || "").trim();

    const Service = String(form.get("Service") || "").trim();
    const PrefDate = String(form.get("Preferred date") || "").trim();
    const PrefTime = String(form.get("Preferred time") || "").trim();
    const Details = String(form.get("Details") || "").trim();

    const Plan = String(form.get("Plan") || "").trim();
    const Address = String(form.get("Address") || "").trim();
    const MemberNotes = String(form.get("Member notes") || "").trim();
    const AgreedToTerms = String(form.get("AgreedToTerms") || "").trim();

    const isMembership = FormType.toLowerCase().includes("member");

    // Attachments (estimate only)
    const attachments = [];
    if (!isMembership) {
      const raw = form.getAll("files");
      for (const f of raw) {
        if (!f || typeof f === "string") continue;
        if (f.size > 6 * 1024 * 1024) continue;
        const ab = await f.arrayBuffer();
        attachments.push({
          filename: f.name || "file",
          content: toBase64(ab),
        });
        if (attachments.length >= 5) break;
      }
    }

    const subject = isMembership
      ? `New membership application — ${Plan || "Plan not selected"} (${Name || "No name"})`
      : `New estimate request — ${Service || "Website"} (${Name || "No name"})`;

    const html = isMembership
      ? `
        <div style="font-family:system-ui,Arial">
          <h2>KRINEDAL-R — New Membership Application</h2>
          <p><b>Name:</b> ${escapeHtml(Name)}</p>
          <p><b>Phone:</b> ${escapeHtml(Phone)}</p>
          <p><b>Email:</b> ${escapeHtml(Email)}</p>
          <p><b>Eircode:</b> ${escapeHtml(Eircode)}</p>
          <p><b>Town/County:</b> ${escapeHtml(Town)}</p>
          <hr/>
          <p><b>Plan:</b> ${escapeHtml(Plan)}</p>
          <p><b>Address:</b> ${escapeHtml(Address)}</p>
          <p><b>Notes:</b><br/>${escapeHtml(MemberNotes).replace(/\n/g, "<br/>")}</p>
          <hr/>
          <p><b>Agreed to terms:</b> ${escapeHtml(AgreedToTerms || "NO")}</p>
        </div>
      `
      : `
        <div style="font-family:system-ui,Arial">
          <h2>KRINEDAL-R — New Estimate Request</h2>
          <p><b>Name:</b> ${escapeHtml(Name)}</p>
          <p><b>Phone:</b> ${escapeHtml(Phone)}</p>
          <p><b>Email:</b> ${escapeHtml(Email)}</p>
          <p><b>Eircode:</b> ${escapeHtml(Eircode)}</p>
          <p><b>Town/County:</b> ${escapeHtml(Town)}</p>
          <p><b>Service:</b> ${escapeHtml(Service)}</p>
          <p><b>Preferred date:</b> ${escapeHtml(PrefDate)}</p>
          <p><b>Preferred time:</b> ${escapeHtml(PrefTime)}</p>
          <hr/>
          <p><b>Details:</b><br/>${escapeHtml(Details).replace(/\n/g, "<br/>")}</p>
        </div>
      `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: CONTACT_TO.split(",").map((e) => e.trim()),
        subject,
        html,
        reply_to: Email || undefined,
        attachments: attachments.length ? attachments : undefined,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("RESEND ERROR:", text);
      return Response.json(
        { ok: false, error: "Email send failed", details: text },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT API ERROR:", err);
    return Response.json(
      { ok: false, error: String(err.message || err) },
      { status: 500 }
    );
  }
}
