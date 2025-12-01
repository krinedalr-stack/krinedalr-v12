// components/Weather.jsx

export default function Weather() {
  return (
    <section className="weather-section" id="weather">
      <div className="container">
        <div className="weather-header">
          <h2>Ireland Weather &amp; Storm Readiness</h2>
          <p>
            We monitor Met Éireann warnings daily. Snow, rain or storm won’t stop us – but it will
            change how we work on your roof.
          </p>
        </div>

        <div className="weather-grid">
          <div className="weather-badge weather-green">
            <span className="weather-label">Green</span>
            <span className="weather-description">
              Normal conditions – routine work &amp; inspections.
            </span>
          </div>

          <div className="weather-badge weather-yellow">
            <span className="weather-label">Yellow</span>
            <span className="weather-description">
              Wind or rain – extra care on roofs &amp; access.
            </span>
          </div>

          <div className="weather-badge weather-orange">
            <span className="weather-label">Orange</span>
            <span className="weather-description">
              Severe weather – limited emergency make-safe only.
            </span>
          </div>

          <div className="weather-badge weather-red">
            <span className="weather-label">Red</span>
            <span className="weather-description">
              Extreme conditions – we pause work until it’s safe.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
