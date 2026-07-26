import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { DetailHeader } from "./styles";

const PageHeader = ({ eyebrow, title, description }) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Ariel Aguilar`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionTag?.content;
    if (descriptionTag) descriptionTag.content = description;
    window.scrollTo(0, 0);

    return () => {
      document.title = previousTitle;
      if (descriptionTag && previousDescription) descriptionTag.content = previousDescription;
    };
  }, [description, title]);

  return (
    <DetailHeader>
      <Link to="/" className="back">← Volver al inicio</Link>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </DetailHeader>
  );
};

PageHeader.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PageHeader;
