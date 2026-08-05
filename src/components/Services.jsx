import { services } from "../data/content.js";

export default function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Qué limpiamos</span>
          <h2>Limpieza profesional de todo tipo de superficies</h2>
          <p>
            Un mismo estándar de limpieza para cada rincón de tu casa o tu auto,
            con el producto y la técnica adecuada para cada material.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="service-card" key={s.name}>
              <div className="service-icon">{s.name.charAt(0)}</div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
