// components/Weather.jsx
export default function Weather() {
  return (
    <div className="weather-grid">
      <div className="weather-pill green">
        <h4>Green – Normal</h4>
        <p>Normal conditions. Routine work & inspections go ahead as planned.</p>
      </div>

      <div className="weather-pill yellow">
        <h4>Yellow – Extra Care</h4>
        <p>
          Wind or rain warning. Extra care on roofs, more safety checks and
          shorter time on ladders.
        </p>
      </div>

      <div className="weather-pill orange">
        <h4>Orange – Limited Roof Work</h4>
        <p>
          Strong winds or heavy rainfall. Emergency make-safe only until weather
          improves.
        </p>
      </div>

      <div className="weather-pill red">
        <h4>Red – Safety First</h4>
        <p>
          Only life-safety emergency visits when conditions allow. We stay in
          touch and plan work as soon as it is safe.
        </p>
      </div>
    </div>
  );
}
