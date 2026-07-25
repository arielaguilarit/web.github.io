import { Aside, Container, Main } from "./styles";
import MenuButtonFloat from "../atoms/MenuButtonFloat";
import About from "../organism/About/index";
import Avatar from "../organism/Avatar/index";
import Experience from "../organism/Experience/index";
import Leadership from "../organism/Leadership/index";
import Projects from "../organism/Projects/index";
import Skills from "../organism/Skills/index";

const ContainerApp = () => {
  return (
    <Container>
      <Aside>
        <Avatar />
      </Aside>
      <Main>
        <section id="about">
          <About />
        </section>
        <section id="leadership">
          <Leadership />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <h2>Contacto</h2>
          <p>
            ¿Tienes un desafío técnico o una plataforma que modernizar?
            Conversemos en{" "}
            <a href="mailto:ariel.aguilarit@gmail.com">
              ariel.aguilarit@gmail.com
            </a>
            .
          </p>
        </section>
      </Main>
      <MenuButtonFloat />
    </Container>
  );
};

export default ContainerApp;
