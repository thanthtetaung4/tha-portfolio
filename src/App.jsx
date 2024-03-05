import Sections from "./components/Sections";
import Projects from "./components/Projects";
import ProjectsLayout from "./components/ProjectsLayout";
import ProjectDetails from "./components/ProjectDetails";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Sections />} />
        <Route path="/projects" element={<ProjectsLayout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
