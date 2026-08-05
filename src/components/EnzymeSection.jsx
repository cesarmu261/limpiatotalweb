import { useState } from "react";
import { stains } from "../data/content.js";

export default function EnzymeSection() {
  const [done, setDone] = useState(() => new Set());

  function toggle(name) {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(name) ? next.delete(name) : next.add(name);
      return next;
    });
  }

  return (
    <section className="section enzyme-section" style={{ background: "var(--navy)" }}>
      <div className="container">
        <div className="enzyme-photo">
          <img
            src="/images/enzyme-treatment.jpg"
            alt="Aplicación de limpiador enzimático sobre tapicería con máquina de extracción"
          />
        </div>

        <div className="enzyme-copy">
          <span className="eyebrow">Fórmula de 4 enzimas</span>
          <h2>Toca cada mancha y mira lo que nuestra fórmula elimina</h2>
          <p>
            Usamos productos profesionales para tapicería con tratamiento
            enzimático, seguro para niños, mascotas y textiles.
          </p>

          <div className="stain-grid">
            {stains.map((s) => {
              const isDone = done.has(s.name);
              return (
                <button
                  key={s.name}
                  className={`stain-chip ${isDone ? "done" : ""}`}
                  onClick={() => toggle(s.name)}
                  type="button"
                >
                  <span>{s.name}</span>
                  <span className="mark">{isDone ? "✓ ELIMINADO" : "TOCAR"}</span>
                </button>
              );
            })}
          </div>

          <p className="enzyme-note">
            Nota importante: la limpieza no repara daños, desgaste, decoloración,
            oxidación, deterioro, manchas permanentes ni mala manipulación previa.
          </p>
        </div>
      </div>
    </section>
  );
}
