import PropTypes from "prop-types";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  ContainerAccordion,
  ContentAccordion,
  DateContainer,
  HeaderAccordion,
  TitleContainer,
  ToggleIcon,
} from "./styles";

const Accordion = React.memo(function Accordion({
  title,
  description,
  highlights,
}) {
  const [isActive, setIsActive] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  const toggleAccordion = useCallback(() => {
    setIsActive((prevState) => !prevState);
  }, []);

  const closeAccordion = () => {
    if (isActive) {
      headerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  useEffect(() => {
    setHeight(isActive ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [isActive]);

  return (
    <ContainerAccordion>
      <HeaderAccordion
        ref={headerRef}
        type="button"
        aria-expanded={isActive}
        onClick={toggleAccordion}
      >
        <TitleContainer>
          <h3>{title}</h3>
        </TitleContainer>
        <DateContainer>
          <ToggleIcon>{isActive ? "-" : "+"}</ToggleIcon>
        </DateContainer>
      </HeaderAccordion>
      <ContentAccordion
        $isActive={isActive}
        $height={height}
        ref={contentRef}
        onTransitionEnd={closeAccordion}
      >
        <p>{description}</p>
        <ul>
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </ContentAccordion>
    </ContainerAccordion>
  );
});

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  highlights: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Accordion;
