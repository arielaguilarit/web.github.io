import { Principles } from "./styles";

const focusAreas = [
  {
    title: "Leer el sistema y sus restricciones",
    description: "Parto de cómo la plataforma llegó a su estado actual: negocio, usuarios, integraciones, equipos, operación y decisiones previas.",
  },
  {
    title: "Evolucionar de forma incremental",
    description: "Busco cambios que reduzcan riesgo y permitan aprender, equilibrando continuidad, experiencia de usuario, deuda y calidad.",
  },
  {
    title: "Respaldar decisiones con evidencia",
    description: "Métricas, observabilidad y señales de uso ayudan a priorizar problemas reales y a no adoptar soluciones por moda.",
  },
  {
    title: "Diseñar más allá de la entrega",
    description: "Una decisión también debe considerar quién la mantendrá, cómo se desplegará, cómo se observará y cómo podrá cambiar.",
  },
  {
    title: "Elevar el contexto del equipo",
    description: "Hago explícitos criterios y alternativas para que arquitectura y calidad sean conversaciones compartidas, no decisiones aisladas.",
  },
  {
    title: "Aplicar IA con responsabilidad",
    description: "Uso IA para acelerar análisis, documentación y revisión, manteniendo el criterio y la responsabilidad en las personas.",
  },
];

const Leadership = () => (
  <>
    <p className="section-eyebrow">Cómo entiendo la ingeniería</p>
    <h2>Mi enfoque</h2>
    <p>
      Mi rol no es imponer una arquitectura ideal. Es ayudar a comprender el
      contexto, hacer visibles los trade-offs y crear condiciones para que la
      plataforma y el equipo puedan evolucionar.
    </p>
    <Principles>
      {focusAreas.map((area) => (
        <article key={area.title}>
          <h3>{area.title}</h3>
          <p>{area.description}</p>
        </article>
      ))}
    </Principles>
  </>
);

export default Leadership;
