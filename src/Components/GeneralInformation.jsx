import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorVariants, Image } from "@nextui-org/react";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function InformationGeneral() {
  return (
    <div className="flex flex-col bg-gray-900 rounded-2xl justify-around items-center h-full w-full lg:w-1/3 pt-10 p-4 gap-5">
      <div className="flex flex-col sm:flex-row lg:flex-col gap-5 items-center">
        <Image
          alt="Me"
          src="/Perfil.jpg"
          className="rounded-full w-40 h-40 object-cover hover:scale-125 hover:transition-transform duration-1000 "
          isBlurred
        />

        <div className="flex flex-col text-center gap-2">
          <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-2xl text-white font-bold">
            José Ixcamparij
          </h1>
          <h1 className="text-lg font-bold">Software Engineer</h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full gap-10">
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
  );
}
