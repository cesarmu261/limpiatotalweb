import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { business } from "../data/content.js";

const NAV_LINKS = [
  { label: "Servicios", to: "/#servicios" },
  { label: "Proceso", to: "/#proceso" },
  { label: "Garantía", to: "/garantia" },
  { label: "Contacto", to: "/#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNavClick(e, to) {
    setOpen(false);
    if (to.startsWith("/#")) {
      const id = to.split("#")[1];
      if (location.pathname !== "/") {
        // Redirige a inicio y luego baja a la sección
        e.preventDefault();
        navigate("/");
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 60);
      } else {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }

  const waHref = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappMessage
  )}`;

  return (
    <header className="site-header">
      <div className="container">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/images/logo-icon.jpg" alt={`Logo de ${business.name}`} />
          <div className="brand-text">
            <strong>{business.name}</strong>
            <span>{business.tagline}</span>
          </div>
        </Link>

        <nav className={`main-nav ${open ? "open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.to} onClick={(e) => handleNavClick(e, link.to)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <a
            href={waHref}
            target="_blank"
            rel="noreferrer"
            className="btn btn-whatsapp"
            aria-label="Escribir por WhatsApp"
          >
            <WhatsAppIcon />
            <span className="btn-text">WhatsApp</span>
          </a>
          <button
            className="nav-toggle"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span style={{ transform: open ? "translateY(7px) rotate(45deg)" : "none" }} />
            <span style={{ opacity: open ? 0 : 1 }} />
            <span style={{ transform: open ? "translateY(-7px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </div>
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.28.63 4.42 1.72 6.25L4 29l7.94-1.66A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.62 28 15S22.63 3 16.02 3Zm0 21.7c-1.98 0-3.83-.55-5.4-1.5l-.39-.23-4.7.98.99-4.58-.25-.4A9.63 9.63 0 0 1 6.3 15c0-5.35 4.36-9.7 9.72-9.7 5.36 0 9.72 4.35 9.72 9.7 0 5.36-4.36 9.7-9.72 9.7Zm5.32-7.26c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.34-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.51h-.56c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.42 0 1.43 1.03 2.81 1.17 3 .15.19 2.02 3.1 4.9 4.34.68.3 1.22.47 1.63.6.68.22 1.31.19 1.8.11.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34Z" />
    </svg>
  );
}
