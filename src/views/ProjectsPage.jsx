import React from "react";
import SpaceProject from "../Components/SpaceProject";
import { projectData } from "../Data/project.json";

export default function ProjectsPage() {
  return (
      <div className="grid grid-cols-1 gap-5 p-8">
       
        {projectData.map((project, index) => (
          <SpaceProject
            key={index}
            project={project}           
          />
        ))}
        
      </div>
  );
}
