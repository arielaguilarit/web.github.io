import { Link } from "react-router-dom";
import { careerStages } from "../../../content/landing";
import { PreviewGrid } from "./styles";

const CareerPreview = () => (
  <>
    <p className="section-eyebrow">Una responsabilidad cada vez más amplia</p>
    <h2>Mi evolución profesional</h2>
    <p>
      Mi carrera avanzó desde construir software y coordinar un primer proyecto
      hasta comprender plataformas, operación y decisiones que atraviesan a
      equipos completos.
    </p>
    <PreviewGrid>
      {careerStages.map((stage) => (
        <li key={stage.company}>
          <span>{stage.company}</span>
          <strong>{stage.title}</strong>
        </li>
      ))}
    </PreviewGrid>
    <Link className="section-cta" to="/evolucion-profesional">
      Conocer mi evolución profesional <span aria-hidden="true">→</span>
    </Link>
  </>
);

export default CareerPreview;
