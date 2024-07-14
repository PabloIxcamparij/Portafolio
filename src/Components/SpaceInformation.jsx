import React from "react";
import { Image } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

export default function SpaceInformation({ dataSpace }) {
  return (
    <div className="w-full bg-slate-800 rounded-2xl p-4">
      <h2 className="text-white text-lg font-bold mb-2 ">{dataSpace.title}</h2>

      <span className="text-white">{dataSpace.information}</span>

      <Accordion>
        <AccordionItem
          key="1"
          title={<h1 className="text-white">Skills list</h1>}
          textValue="Skills list"
          className="text-white font-bold"
        >
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {dataSpace.dataBaseUrl.map((img, index) => (
              <li key={index} className="text-white">
                {img.alt}
              </li>
            ))}
          </ul>
        </AccordionItem>
      </Accordion>

      <Marquee speed={40} className="mt-2">
        {dataSpace.dataBaseUrl.map((img, index) => (
          <div key={index} className="flex justify-center">
            <Image
              isZoomed
              src={img.src}
              alt={img.alt}
              className="h-20 p-2 mr-5 ml-5"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
