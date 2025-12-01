// components/Weather.jsx

export default function WeatherStrip() {
  return (
    <section className="weather-strip">
      <div className="container weather-inner">
        <p className="weather-title">
          <strong>Ireland Weather & Storm Readiness</strong> — we monitor Met
          Éireann warnings daily. Snow, rain or storm won’t stop us, but it will
          change how we work on your roof.
        </p>
        <div className="weather-pills">
          <div className="weather-pill weather-pill--green">
            <span>Green</span>
            <span>Normal conditions, routine work & inspections.</span>
          </div>
          <div className="weather-pill weather-pill--yellow">
            <span>Yellow</span>
            <span>Wind / rain. Extra care on roofs, some delays possible.</span>
          </div>
          <div className="weather-pill weather-pill--orange">
            <span>Orange</span>
            <span>Storm conditions. Emergency work only where safe.</span>
          </div>
          <div className="weather-pill weather-pill--red">
            <span>Red</span>
            <span>
              Extreme weather. Make-safe only when conditions allow; we stay in
              touch with you by phone.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
