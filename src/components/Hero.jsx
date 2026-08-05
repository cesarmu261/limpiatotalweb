import { business } from "../data/content.js";

export default function Hero() {
  const waHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">Limpieza profesional de tapicería · {business.city}</span>
          <h1>Tu tapicería, con la frescura del primer día</h1>
          <p className="hero-sub">
            Aspirado, tratamiento con fórmula de 4 enzimas y extracción profesional
            con equipo de inyección-succión. Salas, colchones, sillas, vestiduras de
            auto y más — directo en tu casa.
          </p>
          <div className="hero-ctas">
            <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              Cotizar por WhatsApp
            </a>
            <a href="#servicios" className="btn btn-outline">
              Ver servicios
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>4</strong>
              <span>ENZIMAS ACTIVAS</span>
            </div>
            <div className="hero-stat">
              <strong>8</strong>
              <span>TIPOS DE SUPERFICIE</span>
            </div>
            <div className="hero-stat">
              <strong>24h</strong>
              <span>ATENCIÓN A REPORTES</span>
            </div>
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-media-frame">
            <img
              src="/images/hero-machine.jpg"
              alt="Equipo profesional de inyección-succión para limpieza de tapicería junto a una sala"
            />
          </div>
          <div className="hero-badge">
            <strong>Equipo profesional</strong>
            <p>Inyección-succión de alto rendimiento para una extracción real de suciedad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
