import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function InformationGeneral() {
  return (
    <div className="flex justify-around items-center flex-col md:flex-row xl:flex-col h-full w-full p-4 gap-5">
      <div className="flex flex-col gap-5 items-center">
        <div className="bg-white w-40 h-40 rounded-full" />

        <div className="flex flex-col text-white items-start gap-2">
          <p className="text-2xl font-bold">Jose Sorto Ixcamparij</p>
          <p className="text-lg font-bold">Informatic</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <h1 className="text-white font-bold text-3xl gap-10">Contact me</h1>

        <div className="flex justify-around items-center w-full gap-10">
          <a
            href="https://github.com/PabloIxcamparij"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="w-14 h-20"
              style={{ color: "#ffffff" }}
            />
          </a>

          <a
            href="https://www.linkedin.com/in/josé-sorto-180160300/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-14 h-20"
              style={{ color: "#ffffff" }}
            />
          </a>

          <a
            href="https://wa.me/50687775340"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="w-14 h-20"
              style={{ color: "#ffffff" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
