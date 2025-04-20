import { useState } from "react";
import { projectData } from "../Data/project.json";

export default function ProjectsPage() {
  const [clickIndex, setclickIndex] = useState(0);

  return (
    <div className="flex h-[60vh] w-full bg-slate-800 rounded-2xl p-6 gap-6">
      
      {/* Imágenes centradas */}
      <div className="hidden sm:flex relative justify-center items-center flex-1">
        {projectData.map((project, index) => (
          <img
            key={index}
            src={project.img}
            alt={project.title}
            title="Project Preview"
            className={`
              absolute w-auto h-[80%] max-w-full object-contain rounded-lg transition-opacity duration-500 ease-in-out
              ${
                clickIndex === index
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0"
              }
            `}
          />
        ))}
      </div>

      {/* Lista de títulos con overflow */}
      <div className="flex flex-col gap-6 p-10 w-full justify-center items-center sm:w-1/3 overflow-y-auto max-h-full">
        {projectData.map((project, index) => (
          <h1
            key={index}
            onMouseEnter={() => setclickIndex(index)}
            onMouseLeave={() => setclickIndex(0)}

            className={`text-2xl font-bold cursor-pointer transition-colors duration-300
              ${
                clickIndex === index
                  ? "text-white"
                  : "text-gray-400"
              }
            `}
          >
            {project.title}
          </h1>
        ))}
      </div>
    </div>
  );
}
