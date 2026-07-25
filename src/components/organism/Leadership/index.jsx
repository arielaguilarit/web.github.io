import { Principles } from "./styles";

const principles = [
  {
    title: "Decisiones que escalan",
    description:
      "Defino arquitecturas simples de evolucionar: límites claros, componentes reutilizables y decisiones técnicas entendibles para el equipo.",
  },
  {
    title: "Equipos con autonomía",
    description:
      "Impulso estándares, mentoring, code review y prácticas de entrega que elevan la calidad sin frenar el flujo de trabajo.",
  },
  {
    title: "Evolución con evidencia",
    description:
      "Combino observabilidad, automatización y mejora continua para modernizar plataformas con riesgos controlados y resultados sostenibles.",
  },
];

const Leadership = () => {
  return (
    <>
      <h2>Mi enfoque como Tech Lead</h2>
      <p>
        La tecnología es un medio para resolver problemas de negocio. Mi rol es
        alinear arquitectura, personas y entrega para que esa solución siga
        siendo valiosa en el tiempo.
      </p>
      <Principles>
        {principles.map((principle) => (
          <article key={principle.title}>
            <h3>{principle.title}</h3>
            <p>{principle.description}</p>
          </article>
        ))}
      </Principles>
    </>
  );
};

export default Leadership;
