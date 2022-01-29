import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalNavBar from "../components/common/GlobalNavBar";
import HomePage from "../views/HomePage";
import AboutPage from "../views/AboutPage";
import ProjectsPage from "../views/ProjectsPage";
import ContactPage from "../views/ContactPage";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <GlobalNavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Router;
