import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectsPage from "./views/ProjectsPage";
import AboutPage from "./views/AboutPage";
import EducationPage from "./views/EducationPage"
import Layout from "./layouts/Layout"


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutPage />} index />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/education" element={<EducationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
