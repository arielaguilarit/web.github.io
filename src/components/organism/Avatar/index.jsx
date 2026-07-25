import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContainerAvatar, Icons, Img } from "./styles";

const Avatar = () => {
  return (
    <ContainerAvatar>
      <p className="eyebrow">Tech Lead · Software Engineer</p>
      <h1>Ariel Aguilar</h1>
      <Img
        src="https://avatars.githubusercontent.com/u/1995779?v=4"
        alt="Ariel Aguilar"
      />
      <p>
        Lidero equipos y diseño plataformas web escalables, cloud native y
        centradas en resolver problemas de negocio.
      </p>
      <p className="availability">
        Arquitectura · Modernización · AI Engineering
      </p>
      <Icons>
        <a
          href="https://github.com/arielaguilarit/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar perfil de GitHub de Ariel Aguilar"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/arielaguilarti/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visitar perfil de LinkedIn de Ariel Aguilar"
        >
          <FaLinkedin size={25} />
        </a>
        <a href="mailto:ariel.aguilarit@gmail.com" aria-label="Enviar correo a Ariel Aguilar">
          <MdEmail size={27} />
        </a>
      </Icons>
    </ContainerAvatar>
  );
};

export default Avatar;
