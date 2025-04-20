import React from "react";
import { Link } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function SpaceProject({ project }) {
  return (
    <div className="flex justify-center items-center gap-6">
      
      <img
        src={project.img}
        title="Project Preview"
        className=" bg-white w-[50%]  h-[80%] rounded-lg object-cover"
      />

      <h1 className="text-2xl font-bold">{project.title}</h1>

      {/* <div className="w-full flex flex-col md:w-2/4 gap-4">
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
      </div> */}
    </div>
  );
}
