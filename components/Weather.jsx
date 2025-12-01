// components/Weather.jsx

// Simple traffic-light style weather / warning strip.
// You can later hook this up to a real API if you want.

const levels = [
  {
    label: 'Green',
    desc: 'Normal conditions – routine work & inspections.',
    className: 'level-green',
  },
  {
    label: 'Yellow',
    desc: 'Yellow warning – wind or rain. Extra care on roofs.',
    className: 'level-yellow',
  },
  {
    label: 'Orange',
    desc: 'Orange warning – severe weather. Emergency work only.',
    className: 'level-orange',
  },
  {
    label: 'Red',
    desc: 'Red warning – stay safe. 24/7 make-safe only where possible.',
    className: 'level-red',
  },
];

export default function WeatherStrip() {
  return (
    <section className="weather-strip">
      <div className="container weather-inner">
        <div className="weather-main">
          <span className="weather-label">Ireland Weather & Storm Readiness</span>
          <p className="weather-text">
            We monitor Met Éireann warnings daily. Snow, rain or storm won’t
            stop us – but it will change how we work on your roof.
          </p>
        </div>
        <div className="weather-levels">
          {levels.map((lvl) => (
            <div className={`weather-level ${lvl.className}`} key={lvl.label}>
              <span className="weather-level-name">{lvl.label}</span>
              <span className="weather-level-desc">{lvl.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
