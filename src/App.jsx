import { Route, Routes } from "react-router-dom";
import ContainerApp from "./components/templates";
import CareerPage from "./pages/CareerPage";
import CaseStudyPage from "./pages/CaseStudyPage";

const App = () => (
  <Routes>
    <Route path="/" element={<ContainerApp />} />
    <Route path="/evolucion-profesional" element={<CareerPage />} />
    <Route path="/casos/evolucion-spa" element={<CaseStudyPage />} />
  </Routes>
);

export default App;
