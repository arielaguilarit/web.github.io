import PageHeader from "../components/shared/PageHeader";
import { CaseFigure, CaseSections, DetailContent, DetailPage } from "../components/shared/styles";

const CaseStudyPage = () => (
  <DetailPage>
    <PageHeader
      eyebrow="Caso de evolución de plataforma"
      title="De múltiples hosts a una experiencia integrada"
      description="Una propuesta arquitectónica nacida al conectar deuda técnica Frontend, experiencia de usuario, consumo de servicios y mantenibilidad."
    />
    <DetailContent>
      <CaseFigure>
        <img
          src={`${import.meta.env.BASE_URL}images/case-study-multi-host-to-spa.jpg`}
          alt="Comparación entre múltiples hosts y una SPA con Shell persistente"
          width="1536"
          height="1024"
        />
        <figcaption>Comparación conceptual de la situación observada y la evolución propuesta.</figcaption>
      </CaseFigure>
      <CaseSections>
        <section>
          <h2>Contexto observado</h2>
          <p>
            La plataforma estaba distribuida en varios hosts independientes,
            aunque conceptualmente se presentaba como microfrontends. Cada host
            volvía a cargar elementos y capacidades compartidas.
          </p>
        </section>
        <section>
          <h2>La fricción</h2>
          <ul>
            <li>Header y Sidebar renderizados repetidamente.</li>
            <li>Autenticación, permisos y configuración redundantes.</li>
            <li>Llamadas repetidas a microservicios y demoras.</li>
            <li>Navegación y experiencia de usuario fragmentadas.</li>
          </ul>
        </section>
        <section>
          <h2>La propuesta</h2>
          <p>
            Propuse evolucionar hacia una SPA con una Shell persistente para
            capacidades transversales y módulos remotos enfocados en sus
            dominios. El objetivo era reducir recargas y duplicación, mejorar
            la navegación y facilitar la evolución.
          </p>
        </section>
        <section>
          <h2>Evidencia y criterio</h2>
          <p>
            Utilicé Google Lighthouse para respaldar el análisis con evidencia
            de rendimiento, accesibilidad, buenas prácticas y usabilidad. La
            propuesta conectó la arquitectura con sus efectos sobre personas y
            operación.
          </p>
        </section>
        <section>
          <h2>Impacto profesional</h2>
          <p>
            La iniciativa ayudó a posicionarme como referente técnico y fue uno
            de los hitos que abrió la oportunidad de asumir como Technical Lead.
            No se afirma aquí que la propuesta se haya desplegado completamente.
          </p>
        </section>
        <section>
          <h2>Aprendizaje</h2>
          <p>
            Una propuesta arquitectónica gana valor cuando conecta el problema
            técnico con evidencia, experiencia de usuario y efectos
            operacionales.
          </p>
        </section>
        <section className="todo">
          <h2>Pendiente de validación</h2>
          <p>TODO: incorporar mediciones reales antes y después.</p>
          <p>TODO: confirmar si la SPA se implementó completa, parcialmente o quedó como propuesta.</p>
        </section>
      </CaseSections>
    </DetailContent>
  </DetailPage>
);

export default CaseStudyPage;
