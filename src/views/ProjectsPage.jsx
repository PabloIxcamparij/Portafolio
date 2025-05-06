import { useState } from "react";
import { projectData } from "../Data/project.json";
import SpaceProject from "../Components/SpaceProject";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full xl:w-[80%] gap-10 mt-10 mb-5">
      {projectData.map((project, index) => (
        <SpaceProject key={index} project={project} />
      ))}
    </div>
  );
}
