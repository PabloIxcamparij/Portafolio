import React from "react";
import { Link } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function SpaceProject({ project }) {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full bg-slate-800 text-white rounded-2xl p-4 gap-4">
      <iframe
        src={project.urlProject}
        title="Project Preview"
        className=" bg-white w-full h-80 md:w-3/4 md:h-ful rounded-lg"
      />

      <div className="w-full flex flex-col md:w-2/4 gap-4">
        <h2 className=" text-lg font-bold"> {project.title} </h2>

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
                <li key={index}>
                  {tec.title}
                </li>
              ))}
            </ul>
            
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
