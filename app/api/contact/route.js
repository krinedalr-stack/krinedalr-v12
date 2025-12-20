// app/api/contact/route.js
export const runtime = "nodejs";

function toBase64(buf) {
  return Buffer.from(buf).toString("base64");
}

export async function POST(req) {
  try {
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) {
      return Response.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const form = await req.formData();

    // bot trap
    const honey = form.get("website");
    if (honey) return Response.json({ ok: true });

    // common fields
    const FormType = String(form.get("FormType") || "Estimate").trim(); // "Estimate" | "Membership"
    const Name = String(form.get("Name") || "").trim();
    const Phone = String(form.get("Phone") || "").trim();
    const Email = String(form.get("Email") || "").trim();
    const Eircode = String(form.get("Eircode") || "").trim();
    const Town = String(form.get("Town/County") || "").trim();

    // estimate fields
    const Service = String(form.get("Service") || "").trim();
    const PrefDate = String(form.get("Preferred date") || "").trim();
    const PrefTime = String(form.get("Preferred time") || "").trim();
    const Details = String(form.get("Details") || "").trim();

    // membership fields
    const Plan = String(form.get("Plan") || "").trim(); // Silver/Bronze/Gold/Diamond
    const Billing = String(form.get("Billing") || "").trim(); // Monthly/Yearly
    const Address = String(form.get("Address") || "").trim();
    const MemberNotes = String(form.get("Member notes") || "").trim();
    const AgreedToTerms = String(form.get("AgreedToTerms") || "").trim(); // "YES"

    const toList = (process.env.CONTACT_TO ||
      "krinedalr@outlook.com,krinedalr@gmail.com")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    const from = process.env.CONTACT_FROM || "KRINEDAL-R <onboarding@resend.dev>";

    // attachments (estimate only — still harmless if none)
    const raw = form.getAll("files");
    const attachments = [];
    for (const f of raw) {
      if (!f || typeof f === "string") continue;
      if (f.size > 6 * 1024 * 1024) continue; // 6MB per file
      const ab = await f.arrayBuffer();
      attachments.push({
        filename: f.name || "file",
        content: toBase64(ab),
      });
      if (attachments.length >= 5) break;
    }

    const isMembership = FormType.toLowerCase().includes("member");

    const subject = isMembership
      ? `New membership application — ${Plan || "Plan not selected"} (${Name || "No name"})`
      : `New estimate request — ${Service || "Website"} (${Name || "No name"})`;

    const membershipLegal = `
      <div style="margin-top:12px;padding:12px;border-radius:12px;background:#f8fafc;border:1px solid #e5e7eb">
        <p style="margin:0 0 8px 0"><b>Membership protection wording:</b></p>
        <ul style="margin:0;padding-left:18px;line-height:1.5">
          <li><b>Non-refundable:</b> membership payments are non-refundable once activated (unless required by law).</li>
          <li><b>Fair use:</b> for genuine property issues and emergency make-safe only. Misuse or abusive behaviour may lead to suspension/cancellation without refund.</li>
          <li><b>Emergency scope:</b> make-safe is temporary damage prevention. Materials/scaffolding/skips/specialist hire and permanent repairs are quoted separately. During RED warnings, access may be unsafe and extra fees may apply.</li>
        </ul>
        <p style="margin:10px 0 0 0;color:#6b7280;font-size:12px"><b>Customer confirmed terms:</b> ${
          escapeHtml(AgreedToTerms || "NO")
        }</p>
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
      from,
      to: toList,
      subject,
      html,
      reply_to: Email || undefined,
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

    if (!r.ok) {
      const text = await r.text().catch(() => "");
      return Response.json(
        { ok: false, error: "Resend failed", details: text },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s) {
  return String(s || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
