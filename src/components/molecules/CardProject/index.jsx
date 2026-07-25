import PropTypes from "prop-types";
import { Actions, Card, Content } from "./styles";
const CardProject = ({ nameProject, description, stack = [], src, alt, status }) => {
  return (
    <Card>
      <Content>
        <div>
          <h3>{nameProject}</h3>
          <p>{description}</p>
          <p>{stack?.join(" / ")}</p>
        </div>

        <Actions>
          <span>{status}</span>
        </Actions>
      </Content>
      <div>
        <img src={src} alt={alt} />
      </div>
    </Card>
  );
};

CardProject.propTypes = {
  nameProject: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.array.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CardProject;
