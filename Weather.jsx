// components/Weather.jsx
"use client";
import { useEffect, useState } from "react";

export default function Weather() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const lat = 53.652; // Navan, Meath
    const lon = -6.681;
    const url =
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}` +
      `&hourly=temperature_2m,precipitation,wind_speed_10m` +
      `&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,wind_speed_10m_max` +
      `&current_weather=true&timezone=auto`;
    fetch(url).then(r => r.json()).then(setData).catch(e => setErr(String(e)));
  }, []);

  if (err) return <p className="small">Weather unavailable.</p>;
  if (!data) return <p className="small">Loading forecast…</p>;

  const cur = data.current_weather;
  const d0 = data.daily;

  return (
    <div>
      <div className="card" style={{ padding: 14, margin: "8px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong>Now</strong>
          <span className="small">Meath</span>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "baseline" }}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>{Math.round(cur.temperature)}°C</span>
          <span className="small">Wind {Math.round(cur.windspeed)} km/h</span>
        </div>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {[0, 1, 2].map(i => (
          <div key={i} className="card" style={{ padding: 12 }}>
            <strong>Day {i + 1}</strong>
            <div className="small">
              Max {Math.round(d0.temperature_2m_max[i])}° • Min {Math.round(d0.temperature_2m_min[i])}°
              <br />
              Rain {Math.round(d0.precipitation_sum[i])} mm • Wind {Math.round(d0.wind_speed_10m_max[i])} km/h
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
