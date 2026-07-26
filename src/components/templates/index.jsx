import { Aside, Container, Main } from "./styles";
import MenuButtonFloat from "../atoms/MenuButtonFloat";
import About from "../organism/About";
import Avatar from "../organism/Avatar";
import CareerPreview from "../organism/CareerPreview";
import CasePreview from "../organism/CasePreview";
import Contribution from "../organism/Contribution";
import Leadership from "../organism/Leadership";
import EngineeringPrinciples from "../organism/Principles";
import Skills from "../organism/Skills";

const ContainerApp = () => (
  <Container>
    <Aside>
      <Avatar />
    </Aside>
    <Main id="main-content" aria-label="Contenido principal">
      <section id="about"><About /></section>
      <section id="leadership"><Leadership /></section>
      <section id="contribution"><Contribution /></section>
      <section id="principles"><EngineeringPrinciples /></section>
      <section id="career"><CareerPreview /></section>
      <section id="case-study"><CasePreview /></section>
      <section id="skills"><Skills /></section>
      <section id="conversation">
        <p className="section-eyebrow">El siguiente desafío</p>
        <h2>¿Hay una plataforma que necesita evolucionar?</h2>
        <p>
          Puedo ayudarte a comprender el problema, ordenar alternativas y
          conectar arquitectura, experiencia y operación con el contexto real
          de tu organización.
        </p>
        <a className="section-cta" href="mailto:ariel.aguilarit@gmail.com">
          Iniciar una conversación
        </a>
      </section>
      <section id="contact">
        <h2>Contacto</h2>
        <p>
          También puedes encontrarme en{" "}
          <a href="https://www.linkedin.com/in/arielaguilarti/" target="_blank" rel="noreferrer">LinkedIn</a>
          {" "}y <a href="https://github.com/arielaguilarit/" target="_blank" rel="noreferrer">GitHub</a>,
          o escribir a <a href="mailto:ariel.aguilarit@gmail.com">ariel.aguilarit@gmail.com</a>.
        </p>
      </section>
    </Main>
    <MenuButtonFloat />
  </Container>
);

export default ContainerApp;
