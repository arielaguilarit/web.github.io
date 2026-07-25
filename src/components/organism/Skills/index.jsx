import { SkillGroups } from "./styles";

const skillGroups = [
  {
    title: "Arquitectura y liderazgo",
    skills: [
      "Arquitectura frontend y backend",
      "Microservicios y microfrontends",
      "Diseño de APIs y BFF",
      "Liderazgo técnico y code review",
    ],
  },
  {
    title: "Desarrollo de plataformas",
    skills: [
      "React, TypeScript y Node.js",
      "NestJS, Express y APIs REST",
      "Componentes reutilizables y design systems",
      "Clean Code, SOLID y testing",
    ],
  },
  {
    title: "Cloud y datos",
    skills: [
      "AWS Lambda, API Gateway y CloudFront",
      "PostgreSQL, MongoDB, DynamoDB y Redis",
      "Arquitecturas serverless y event driven",
      "Seguridad, IAM y Secrets Manager",
    ],
  },
  {
    title: "Entrega y operación",
    skills: [
      "CI/CD con GitHub Actions y GitLab CI",
      "Docker, Kubernetes, EKS y Helm",
      "Observabilidad con logs, métricas y dashboards",
      "Performance y monitoreo de aplicaciones",
    ],
  },
  {
    title: "AI Engineering",
    skills: [
      "Agentes para desarrollo y refactorización",
      "Automatización de pruebas y documentación",
      "Asistencia para code review y arquitectura",
      "Integración responsable de IA en equipos",
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2>Capacidades para sistemas que deben escalar</h2>
      <p>
        Un enfoque integral: desde la decisión de arquitectura hasta la entrega,
        observabilidad y evolución continua del producto.
      </p>
      <SkillGroups>
        {skillGroups.map((group) => (
          <article key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </SkillGroups>
    </>
  );
};

export default Skills;
