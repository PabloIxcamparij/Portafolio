import React from "react";
import SpaceProject from "../Components/SpaceProject";
import {projectData } from "../Data/project.json"

export default function ProjectsPage() {
  return (
    <div className="p-5">

      <div className="mb-5">

        <h1 className="text-white"> My persona </h1>
        <span className="text-white">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          laboriosam libero vero laudantium quod quisquam voluptatem rerum
          consectetur repellat dolores iure ut eaque beatae quasi perspiciatis
          fuga, eveniet eos laborum?{" "}
        </span>

      </div>

      <h1 className="text-white"> Web Design </h1>

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
