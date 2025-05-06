import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function InformationGeneral() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full p-4 gap-5">
      <img
        alt="Me"
        src="/Perfil.jpg"
        className="rounded-full w-60 h-60 object-cover opacity-0 transition-opacity duration-500"
        onLoad={(e) => {
          e.currentTarget.style.opacity = 1;
        }}
      />

      <div className="flex flex-col text-center gap-2">
        <h1 className="px-6 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl text-white font-bold">
          José Ixcamparij
        </h1>
        <h1 className="text-lg font-bold">Software Engineer</h1>

        <div className="flex flex-wrap justify-center items-center w-full pt-5 gap-10">
          <a
            href="https://github.com/PabloIxcamparij"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-10 h-12 text-white hover:text-violet-500"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/josé-sorto-180160300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-10 h-12 text-white hover:text-blue-500"
            />
          </a>

          <a
            href="https://wa.me/50687775340"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-10 h-12 text-white hover:text-green-500"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
