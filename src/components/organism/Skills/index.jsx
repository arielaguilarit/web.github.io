import { skillGroups } from "../../../content/landing";
import { SkillGroups } from "./styles";

const Skills = () => (
  <>
    <p className="section-eyebrow">Tecnología al servicio del contexto</p>
    <h2>Capacidades técnicas</h2>
    <p>
      Capacidades que utilizo para acompañar arquitectura, entrega, operación y
      evolución; no una lista exhaustiva de herramientas.
    </p>
    <SkillGroups>
      {skillGroups.map(([title, skills]) => (
        <article key={title}>
          <h3>{title}</h3>
          <ul>
            {skills.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </article>
      ))}
    </SkillGroups>
  </>
);

export default Skills;
