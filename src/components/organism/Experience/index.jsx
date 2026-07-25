import StickySubTitle from "../../atoms/StickySubTitle";
import Accordion from "../../molecules/Accordion";
import experiences from "./experiences";
import { Main } from "./styles";

const index = () => {
  return (
    <>
      <StickySubTitle title={"Experiencia"} />
      <Main>
        {experiences.map((job) => (
          <Accordion key={job.id} {...job} />
        ))}
      </Main>
    </>
  );
};

export default index;
