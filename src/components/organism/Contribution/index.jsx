import { contributions } from "../../../content/landing";
import { SkillGroups } from "../Skills/styles";

const Contribution = () => (
  <>
    <p className="section-eyebrow">Problemas, no herramientas</p>
    <h2>En qué puedo aportar</h2>
    <p>Áreas donde puedo ayudar a un equipo o una organización a avanzar con mayor claridad.</p>
    <SkillGroups>
      {contributions.map(([title, description]) => (
        <article key={title}>
          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      ))}
    </SkillGroups>
  </>
);

export default Contribution;
