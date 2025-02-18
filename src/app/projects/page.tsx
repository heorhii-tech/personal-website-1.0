"use client";
import React from "react";
import { Projects } from "@/components/sections/projectsPage/Projects";
import { PROJECTS_CONFIG } from "@share/common/common";

const ProjectsPage = () => {
  return (
    <div className="projects-page mx-auto">
      <div className="container mx-auto">
        <Projects config={PROJECTS_CONFIG} />
      </div>
    </div>
  );
};
export default ProjectsPage;
