import { process } from "../data/content.js";

export default function Process() {
  return (
    <section id="proceso" className="section section--alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2>Nuestro proceso de limpieza</h2>
          <p>Cuatro pasos, siempre en el mismo orden, para un resultado consistente.</p>
        </div>

        <div className="process-grid">
          {process.map((p) => (
            <div className="process-card" key={p.step}>
              <span className="process-step">{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="process-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
