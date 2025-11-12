"use client";

export default function CallButtons() {
  return (
    <div style={{ display: "grid", gap: "10px", marginTop: "10px" }}>
      <a href="tel:0831762475" className="btn btn-gold btn-block">
        📞 Call 083 176 2475
      </a>
      <a href="https://wa.me/353831762475" className="btn btn-outline btn-block">
        💬 WhatsApp Photos
      </a>
      <a href="mailto:krinedalr@gmail.com" className="btn btn-outline btn-block">
        ✉️ krinedalr@gmail.com
      </a>
    </div>
  );
}
