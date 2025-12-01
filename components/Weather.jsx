// components/Weather.jsx
export default function Weather() {
  return (
    <div className="weather-strip">
      <h3>Ireland Weather &amp; Storm Readiness</h3>
      <p>
        We monitor Met Éireann warnings before every shift. Snow, rain or storm
        won&apos;t stop us – but it will change how we work on your roof.
      </p>

      <div className="weather-badges">
        <div className="badge badge-green">
          <span className="badge-dot" />
          Green: Normal conditions, routine work &amp; inspections
        </div>
        <div className="badge badge-yellow">
          <span className="badge-dot" />
          Yellow: Wind or rain – extra care on roofs
        </div>
        <div className="badge badge-orange">
          <span className="badge-dot" />
          Orange: Strong winds – storm team only
        </div>
        <div className="badge badge-red">
          <span className="badge-dot" />
          Red: Emergency call-outs only, safety first
        </div>
      </div>
    </div>
  );
}
