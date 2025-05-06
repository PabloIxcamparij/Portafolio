import React from "react";
import { Link } from "@nextui-org/react";

export default function SpaceProject({ project }) {
  return (
    <div className="flex flex-col sm:flex-row gap-8 w-full bg-gray-900/80 rounded-2xl p-6 shadow-xl backdrop-blur-sm">
      <div className="flex flex-col gap-4 w-full">
        <h2 className="text-2xl font-bold">{project.title}</h2>

        <p className="text-sm leading-relaxed text-gray-300">
          {project.description}
        </p>

        <Link
          isExternal
          href={project.urlProject}
          showAnchorIcon
          className="text-blue-400"
        >
          Visit the project website
        </Link>

        <Link
          isExternal
          href={project.url}
          showAnchorIcon
          className="text-green-400"
        >
          View the code repository
        </Link>
      </div>

      <div className="flex flex-wrap justify-center items-center sm:flex-col gap-6 w-full">
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          className="w-[240px] h-[140px] sm:w-[320px] sm:h-[180px] md:w-[500px] lg:h-[250px] object-cover opacity-0 transition-opacity duration-500 rounded-2xl"
          onLoad={(e) => {
            e.currentTarget.classList.remove("opacity-0");
            e.currentTarget.classList.add("opacity-100");
          }}
        />

        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm">
          {project.tecUsing.map((tec, index) => (
            <li
              key={index}
              className="bg-gray-800 px-2 py-1 rounded text-center h-8 w-[100px]"
            >
              {tec.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
