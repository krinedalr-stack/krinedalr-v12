// app/api/contact/route.js
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

async function readBody(req) {
  const ct = req.headers.get("content-type") || "";

  // FormData (recommended for file uploads)
  if (ct.includes("multipart/form-data") || ct.includes("application/x-www-form-urlencoded")) {
    const form = await req.formData();
    return { type: "form", form };
  }

  // JSON fallback
  if (ct.includes("application/json")) {
    const json = await req.json().catch(() => ({}));
    return { type: "json", json };
  }

  // Last resort: try formData
  try {
    const form = await req.formData();
    return { type: "form", form };
  } catch {
    return { type: "unknown", raw: "" };
  }
}

// Quick check route exists
export async function GET() {
  return Response.json({ ok: true, route: "/api/contact", method: "POST" });
}

export async function POST(req) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    const CONTACT_TO =
      process.env.CONTACT_TO || "krinedalr@outlook.com,krinedalr@gmail.com";

    // ✅ MUST be from VERIFIED root domain (NOT send.krinedalr.ie)
    const CONTACT_FROM =
      process.env.CONTACT_FROM || "KRINEDAL-R <info@krinedalr.ie>";

    if (!RESEND_API_KEY) {
      return Response.json({ ok: false, error: "Missing RESEND_API_KEY" }, { status: 500 });
    }

    const body = await readBody(req);

    // Helpers to get fields from form OR json
    const get = (key) => {
      if (body.type === "form") return body.form.get(key);
      if (body.type === "json") return body.json?.[key];
      return null;
    };

    // Honeypot
    const honey = String(get("website") || "");
    if (honey) return Response.json({ ok: true });

    // Common fields
    const FormType = String(get("FormType") || "Estimate").trim();
    const Name = String(get("Name") || "").trim();
    const Phone = String(get("Phone") || "").trim();
    const Email = String(get("Email") || "").trim();
    const Eircode = String(get("Eircode") || "").trim();
    const Town = String(get("Town/County") || get("Town") || "").trim();

    // Estimate fields
    const Service = String(get("Service") || "").trim();
    const PrefDate = String(get("Preferred date") || get("PreferredDate") || "").trim();
    const PrefTime = String(get("Preferred time") || get("PreferredTime") || "").trim();
    const Details = String(get("Details") || "").trim();

    // Membership fields
    const Plan = String(get("Plan") || "").trim();
    const Billing = String(get("Billing") || "").trim();
    const Address = String(get("Address") || "").trim();
    const MemberNotes = String(get("Member notes") || get("MemberNotes") || "").trim();
    const AgreedToTerms = String(get("AgreedToTerms") || "").trim();

    const toList = CONTACT_TO.split(",").map((s) => s.trim()).filter(Boolean);

    const isMembership = FormType.toLowerCase().includes("member");

    // Attachments (estimate only)
    const attachments = [];
    if (!isMembership && body.type === "form") {
      // Accept multiple possible field names
      const raw =
        body.form.getAll("files")
          .concat(body.form.getAll("file"))
          .concat(body.form.getAll("attachments"));

      // Limits (Resend + serverless safety)
      const MAX_FILES = 5;
      const MAX_FILE_SIZE = 6 * 1024 * 1024; // 6MB each
      const MAX_TOTAL = 12 * 1024 * 1024; // 12MB total (safe)

      let total = 0;

      for (const f of raw) {
        if (!f || typeof f === "string") continue;
        if (f.size <= 0) continue;
        if (f.size > MAX_FILE_SIZE) continue;

        total += f.size;
        if (total > MAX_TOTAL) break;

        const ab = await f.arrayBuffer();
        attachments.push({
          filename: f.name || "file",
          content: toBase64(ab),
          contentType: f.type || "application/octet-stream",
        });

        if (attachments.length >= MAX_FILES) break;
      }
    }

    const subject = isMembership
      ? `New membership application — ${Plan || "Plan not selected"} (${Name || "No name"})`
      : `New estimate request — ${Service || "Website"} (${Name || "No name"})`;

    const membershipLegal = `
      <div style="margin-top:12px;padding:12px;border-radius:12px;background:#f8fafc;border:1px solid #e5e7eb">
        <p style="margin:0 0 8px 0"><b>Membership protection wording:</b></p>
        <ul style="margin:0;padding-left:18px;line-height:1.5">
          <li><b>Non-refundable:</b> membership payments are non-refundable once activated (unless required by law).</li>
          <li><b>Fair use:</b> for genuine property issues and emergency make-safe only. Misuse/abusive behaviour may lead to suspension/cancellation.</li>
          <li><b>Emergency scope:</b> make-safe is temporary damage prevention. Permanent repairs/materials are quoted separately.</li>
        </ul>
        <p style="margin:10px 0 0 0;color:#6b7280;font-size:12px"><b>Customer confirmed terms:</b> ${escapeHtml(
          AgreedToTerms || "NO"
        )}</p>
      </div>
    `;

    const html = isMembership
      ? `
        <div style="font-family:system-ui,Segoe UI,Arial;line-height:1.5">
          <h2>KRINEDAL-R — New membership application</h2>
          <p style="color:#6b7280;margin-top:-6px">Sent from krinedalr.ie</p>
          <hr/>
          <p><b>Plan:</b> ${escapeHtml(Plan || "—")}</p>
          <p><b>Billing:</b> ${escapeHtml(Billing || "—")}</p>
          <hr/>
          <p><b>Name:</b> ${escapeHtml(Name)}</p>
          <p><b>Phone:</b> ${escapeHtml(Phone)}</p>
          <p><b>Email:</b> ${escapeHtml(Email)}</p>
          <p><b>Eircode:</b> ${escapeHtml(Eircode)}</p>
          <p><b>Town/County:</b> ${escapeHtml(Town)}</p>
          <p><b>Address (optional):</b> ${escapeHtml(Address)}</p>
          <hr/>
          <p><b>Notes:</b><br/>${escapeHtml(MemberNotes).replace(/\n/g, "<br/>")}</p>
          ${membershipLegal}
          <hr/>
          <p style="color:#6b7280;font-size:12px">
            Admin note: Membership is subject to confirmation (area coverage, workload, and availability).
          </p>
        </div>
      `
      : `
        <div style="font-family:system-ui,Segoe UI,Arial;line-height:1.5">
          <h2>KRINEDAL-R — New estimate request</h2>
          <p style="color:#6b7280;margin-top:-6px">Sent from krinedalr.ie</p>
          <hr/>
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

    const payload = {
      from: CONTACT_FROM,
      to: toList,
      subject,
      html,
      reply_to: Email || undefined,
      replyTo: Email || undefined,
      attachments: !isMembership && attachments.length ? attachments : undefined,
    };

    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const text = await r.text().catch(() => "");

    if (!r.ok) {
      console.error("RESEND FAILED", r.status, text);
      // Return real status so you can see it in DevTools quickly
      return Response.json(
        { ok: false, error: "Resend failed", resendStatus: r.status, details: text },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT ROUTE CRASH", err);
    return Response.json(
      { ok: false, error: "Server error", details: String(err?.message || err || "") },
      { status: 500 }
    );
  }
}
