import { business, socials } from "../data/content.js";
import SocialIcon from "./SocialIcon.jsx";

export default function Contact() {
  const waHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div className="contact-card">
          <div>
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>
              Contacto
            </span>
            <h2>Pide tu cotización hoy mismo</h2>
            <p>
              Cuéntanos qué necesitas limpiar y te respondemos por WhatsApp con
              disponibilidad y precio.
            </p>
            <div className="contact-ctas">
              <a href={waHref} target="_blank" rel="noreferrer" className="btn btn-whatsapp">
                Escribir por WhatsApp
              </a>
              <a href={`tel:+${business.whatsappNumber}`} className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>
                Llamar ahora
              </a>
            </div>
            <div className="social-row">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn"
                  aria-label={s.name}
                >
                  <SocialIcon name={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-row">
              <span>WhatsApp</span>
              <span>{business.whatsappDisplay}</span>
            </div>
            <div className="contact-info-row">
              <span>Ciudad</span>
              <span>{business.city}</span>
            </div>
            <div className="contact-info-row">
              <span>Horario</span>
              <span>Lun – Sáb, 9:00–19:00</span>
            </div>
            <div className="contact-info-row">
              <span>Respuesta</span>
              <span>El mismo día</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
