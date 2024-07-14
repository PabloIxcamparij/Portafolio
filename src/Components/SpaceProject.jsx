import React from "react";
import { Link } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function SpaceProject({
  title,
  description,
  url,
  urlProject,
  tecUsing,
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full bg-slate-800 rounded-2xl p-4 gap-4">
      
      <div className=" bg-white w-full h-120 md:w-3/4 md:h-full rounded-xl">
        <iframe
          src={urlProject}
          title="Project Preview"
          width="100%"
          height="100%"
          className="rounded-lg"
        />
        
      </div>

      <div className="w-full flex flex-col md:w-2/4 gap-4">
        <h2 className="text-white text-lg font-bold"> {title} </h2>

        <span className="text-white">{description}</span>

        <Link isExternal href={urlProject} showAnchorIcon>
          Link to the project website
        </Link>

        <Link isExternal href={url} showAnchorIcon>
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
              {tecUsing.map((tec, index) => (
                <li key={index} className="text-white">
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
