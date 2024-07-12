import React from "react";
import SpaceProject from "../Components/SpaceProject";
import {projectData } from "../Data/project.json"

export default function ProjectsPage() {
  return (
    <div className="p-5">

      <div className="grid grid-cols-1 mt-5 gap-4">
        {projectData.map((project, index) => (
          <SpaceProject
            key={index}
            title={project.title}
            description={project.description}
            url={project.url}
            urlProject={project.urlProject}
          />
        ))}
      </div>
      
    </div>
  );
}
