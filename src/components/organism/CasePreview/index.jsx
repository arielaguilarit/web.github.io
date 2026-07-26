import { Link } from "react-router-dom";
import { CaseCard } from "./styles";

const CasePreview = () => (
  <CaseCard>
    <img
      src={`${import.meta.env.BASE_URL}images/case-study-multi-host-to-spa.jpg`}
      alt="Comparación entre múltiples hosts y una SPA con Shell persistente"
      width="1536"
      height="1024"
      loading="lazy"
    />
    <div>
      <p className="section-eyebrow">Caso destacado</p>
      <h2>De múltiples hosts a una experiencia integrada</h2>
      <p>
        Cómo detecté deuda Frontend y propuse una SPA con Shell persistente,
        conectando arquitectura, rendimiento, experiencia de usuario y
        operación.
      </p>
      <Link className="section-cta" to="/casos/evolucion-spa">
        Ver caso de evolución de plataforma <span aria-hidden="true">→</span>
      </Link>
    </div>
  </CaseCard>
);

export default CasePreview;
