// components/CallButtons.jsx

export default function CallButtons() {
  return (
    <div style={{ display: "grid", gap: 8, marginTop: 12 }}>
      <a href="tel:0831762475" className="btn btn-gold btn-block">
        📞 Call 083 176 2475
      </a>
      <a
        href="https://wa.me/353831762475"
        className="btn btn-outline btn-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 WhatsApp photos
      </a>
      <a
        href="mailto:krinedalr@gmail.com"
        className="btn btn-outline btn-block"
      >
        ✉️ Email krinedalr@gmail.com
      </a>
    </div>
  );
}
