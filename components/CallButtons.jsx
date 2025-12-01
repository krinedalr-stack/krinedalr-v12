// components/CallButtons.jsx

export default function CallButtons({ variant = 'default' }) {
  const wrapperClass = variant === 'hero' ? 'hero-actions' : 'cta-buttons';

  return (
    <div className={wrapperClass}>
      <a href="tel:+353831762475" className="btn btn-primary">
        Call 24/7 Storm Line
      </a>
      <a href="mailto:krinedalr@gmail.com" className="btn btn-outline">
        Request a quote by email
      </a>
    </div>
  );
}
