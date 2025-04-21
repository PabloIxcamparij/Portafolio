import { useState } from "react";
import { projectData } from "../Data/project.json";
import SpaceProject from "../Components/SpaceProject";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full gap-10">
      {projectData.map((project, index) => (
        <SpaceProject key={index} project={project} />
      ))}
    </div>
  );
}
