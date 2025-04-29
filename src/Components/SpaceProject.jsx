import React from "react";
import { Link } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function SpaceProject({ project }) {
  return (
    <div className="flex flex-col lg:flex-row gap-6 w-[85%] bg-gray-900 rounded-lg p-6">
      <img
        src={project.img}
        alt={project.title}
        loading="lazy"
        className="rounded-2xl w-full h-[45vh] lg:w-[55%] object-contain opacity-0 transition-opacity duration-500"
        onLoad={(e) => {
          e.currentTarget.style.opacity = 1;
        }}
      />

      <div className="flex flex-col gap-5 w-full">
        <h2 className="text-lg font-bold"> {project.title} </h2>

        <span>{project.description}</span>
        
        <Link isExternal href={project.urlProject} showAnchorIcon>
          Link to the project website
        </Link>

        <Link isExternal href={project.url} showAnchorIcon>
          Link to the project repositories
        </Link>

        <Accordion>
          <AccordionItem
            key="1"
            title={<h1 className="text-white">Technologies used</h1>}
            textValue="Technologies used"
            className="text-white font-bold"
          >
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {project.tecUsing.map((tec, index) => (
                <li key={index}>{tec.title}</li>
              ))}
            </ul>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
