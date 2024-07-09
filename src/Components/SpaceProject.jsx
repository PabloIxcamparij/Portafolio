import React from "react";
import { Link } from "@nextui-org/react";

export default function SpaceProject({ title, description, url, urlProject }) {
  return (
    <div className="flex w-full bg-slate-800 rounded-2xl p-4 gap-4">
      {/* div imagen de la pagina web */}
      <div className=" bg-white w-2/3 h-80 rounded-xl">
        <iframe
          src={urlProject}
          title="Project Preview"
          width="100%"
          height="100%"
          className="rounded-lg"
          frameBorder="0"
        ></iframe>
      </div>

      <div className="flex flex-col w-2/4 gap-4">
        <h2 className="text-white text-lg font-bold"> {title} </h2>

        <span className="text-white">{description}</span>

        <Link isExternal href={urlProject} showAnchorIcon>
          lLink to the project website
        </Link>

        <Link isExternal href={url} showAnchorIcon>
          Link to the project repositories
        </Link>
      </div>
    </div>
  );
}
