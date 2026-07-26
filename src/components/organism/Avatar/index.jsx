import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContainerAvatar, Icons, Img } from "./styles";

const Avatar = () => {
  return (
    <ContainerAvatar>
      <p className="eyebrow">Technical Lead</p>
      <h1>Ariel Aguilar</h1>
      <Img
        src="https://avatars.githubusercontent.com/u/1995779?v=4"
        alt="Ariel Aguilar"
        width="152"
        height="152"
        fetchPriority="high"
      />
      <p>
        Más de diez años ayudando a evolucionar software, plataformas y
        prácticas de ingeniería.
      </p>
      <p className="availability">
        Plataformas · Arquitectura · Equipos
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
