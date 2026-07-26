import { principles } from "../../../content/landing";
import { Principles as PrincipleGrid } from "../Leadership/styles";

const EngineeringPrinciples = () => (
  <>
    <p className="section-eyebrow">Criterios para decidir</p>
    <h2>Principios de ingeniería</h2>
    <p>Ideas breves que orientan cómo analizo, propongo y acompaño cambios técnicos.</p>
    <PrincipleGrid>
      {principles.map(([title, description]) => (
        <article key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </PrincipleGrid>
  </>
);

export default EngineeringPrinciples;
