import { Link } from "react-router-dom";

export default function GuaranteeBand() {
  return (
    <section className="section section--alt">
      <div className="container">
        <div className="guarantee-band">
          <div>
            <span className="eyebrow" style={{ color: "var(--teal-light)" }}>
              Garantía
            </span>
            <h2>La garantía aplica sobre la correcta ejecución del servicio contratado</h2>
            <p>
              No cubre la eliminación total de manchas u olores, la restauración del
              color original, la reparación del mueble ni el desgaste por uso. Consulta
              los 12 puntos completos de nuestros términos y condiciones.
            </p>
          </div>
          <Link to="/garantia" className="btn btn-light">
            Ver términos completos
          </Link>
        </div>
      </div>
    </section>
  );
}
