// components/CallButtons.jsx
'use client';

export default function CallButtons() {
  return (
    <div className="floating-call-buttons">
      <a href="tel:0831762475" className="floating-btn call">
        Call
      </a>
      <a
        href="https://wa.me/353831762475"
        target="_blank"
        rel="noreferrer"
        className="floating-btn whatsapp"
      >
        WhatsApp
      </a>
    </div>
  );
}
