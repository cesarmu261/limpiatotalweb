import { Link } from "react-router-dom";
import { terms, business } from "../data/content.js";

export default function Terms() {
  return (
    <section className="terms-page">
      <div className="container">
        <Link to="/" className="terms-back">
          ← Volver al inicio
        </Link>

        <span className="eyebrow">Legal</span>
        <h1 style={{ fontSize: "clamp(30px, 4.5vw, 46px)", marginTop: 10 }}>
          Términos y condiciones del servicio
        </h1>
        <p style={{ marginTop: 16, color: "var(--muted)", fontSize: 17, maxWidth: 640 }}>
          Al contratar los servicios de {business.name}, el cliente acepta las
          siguientes condiciones:
        </p>

        <div className="terms-list">
          {terms.map((t) => (
            <div className="term-item" key={t.title}>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
