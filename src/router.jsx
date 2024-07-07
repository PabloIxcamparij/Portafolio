import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectsPage from "./views/ProjectsPage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage"
import Layout from "./layouts/Layout"


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<AboutPage />} index />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
