import { frequency } from "../data/content.js";

export default function Frequency() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Mantenimiento</span>
          <h2>Frecuencia ideal de lavado</h2>
          <p>Una guía simple para mantener tu tapicería en buen estado todo el año.</p>
        </div>

        <div className="frequency-table">
          {frequency.map((f) => (
            <div className="frequency-row" key={f.item}>
              <span className="item">{f.item}</span>
              <span className="every">{f.every}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
