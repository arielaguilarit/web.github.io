import { Link } from "react-router-dom";
import { Hero, HeroActions } from "./styles";

const About = () => (
  <Hero>
    <p className="section-eyebrow">Technical Lead · Evolución de plataformas</p>
    <h2>
      Comprender lo complejo
      <br />
      para hacerlo evolucionar
    </h2>
    <div>
      <p className="hero-lead">
        Ayudo a equipos a conectar arquitectura, experiencia de usuario,
        operación y contexto de negocio para evolucionar plataformas sin perder
        continuidad.
      </p>
      <p>
        Más de diez años ampliando mi responsabilidad desde el desarrollo Full
        Stack hacia el liderazgo técnico, con IA aplicada como acelerador del
        criterio, no como reemplazo.
      </p>
      <HeroActions>
        <Link to="/evolucion-profesional">Conocer mi evolución profesional</Link>
        <Link className="secondary" to="/casos/evolucion-spa">
          Ver caso de evolución de plataforma
        </Link>
      </HeroActions>
    </div>
    <img
      src={`${import.meta.env.BASE_URL}images/career-evolution-hero.jpg`}
      alt="Evolución desde el desarrollo de software hasta el liderazgo técnico de plataformas y equipos"
      width="1672"
      height="941"
    />
  </Hero>
);

export default About;
