import PageHeader from "../components/shared/PageHeader";
import { DetailContent, DetailPage, StoryGrid } from "../components/shared/styles";
import { careerStages } from "../content/landing";

const CareerPage = () => (
  <DetailPage>
    <PageHeader
      eyebrow="Trayectoria"
      title="Mi evolución profesional"
      description="Una historia de responsabilidad creciente: desde sacar adelante un proyecto hasta ayudar a equipos a comprender y evolucionar plataformas complejas."
    />
    <DetailContent>
      <StoryGrid>
        {careerStages.map((stage) => (
          <li key={stage.company}>
            <p className="company">{stage.company}</p>
            <h2>{stage.title}</h2>
            <dl>
              <div>
                <dt>Contexto</dt>
                <dd>{stage.context}</dd>
              </div>
              <div>
                <dt>Desafío</dt>
                <dd>{stage.challenge}</dd>
              </div>
              <div>
                <dt>Aprendizaje y transición</dt>
                <dd>{stage.learning} {stage.transition}</dd>
              </div>
            </dl>
          </li>
        ))}
      </StoryGrid>
    </DetailContent>
  </DetailPage>
);

export default CareerPage;
