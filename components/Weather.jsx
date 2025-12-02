// components/Weather.jsx
export default function Weather() {
  return (
    <section className="section weather-section">
      <div className="container">
        <h2>Ireland Weather &amp; Storm Readiness</h2>
        <p className="section-intro">
          We monitor Met Éireann warnings daily. Snow, rain or storm won&apos;t stop us – but it
          will change how we work on your roof.
        </p>

        <div className="weather-pill green">
          <div className="weather-label">Green</div>
          <div className="weather-text">
            Normal conditions – routine work &amp; inspections.
          </div>
        </div>

        <div className="weather-pill yellow">
          <div className="weather-label">Yellow</div>
          <div className="weather-text">
            Wind or rain – extra care on roofs &amp; access.
          </div>
        </div>

        <div className="weather-pill orange">
          <div className="weather-label">Orange</div>
          <div className="weather-text">
            Severe weather – limited emergency make-safe only.
          </div>
        </div>

        <div className="weather-pill red">
          <div className="weather-label">Red</div>
          <div className="weather-text">
            Extreme conditions – we pause work until it&apos;s safe.
          </div>
        </div>
      </div>
    </section>
  );
}
