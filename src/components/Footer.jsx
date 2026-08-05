import { Link } from "react-router-dom";
import { business, socials } from "../data/content.js";
import SocialIcon from "./SocialIcon.jsx";

export default function Footer() {
  const waHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/images/logo-icon.jpg" alt={`Logo de ${business.name}`} />
            <div>
              <strong>{business.name}</strong>
              <p>{business.tagline} · {business.city}</p>
            </div>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <strong>Navegación</strong>
              <Link to="/#servicios">Servicios</Link>
              <Link to="/#proceso">Proceso</Link>
              <Link to="/garantia">Garantía</Link>
              <Link to="/#contacto">Contacto</Link>
            </div>
            <div className="footer-col">
              <strong>Contacto</strong>
              <a href={waHref} target="_blank" rel="noreferrer">
                {business.whatsappDisplay}
              </a>
              <p>{business.city}</p>
            </div>
            <div className="footer-col">
              <strong>Síguenos</strong>
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
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {business.name}. Todos los derechos reservados.</span>
          <Link to="/garantia">Términos y condiciones</Link>
        </div>
      </div>
    </footer>
  );
}
