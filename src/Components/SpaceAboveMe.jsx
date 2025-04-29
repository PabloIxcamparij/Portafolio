import React from "react";
import { Image } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

export default function SpaceAbout({ dataSpace }) {
  return (
    <div className="w-full rounded-2xl p-4">
      <h2 className="text-lg font-bold mb-2 ">{dataSpace.title}</h2>

      <span>{dataSpace.information}</span>

      <div className="w-full md:max-w-[88%]">
        <ul className="flex gap-5 p-5 overflow-x-auto h-[25vh] scrollbar-hide">
          {dataSpace.dataBaseUrl.map((img, index) => (
            <li
              key={index}
              className="min-w-[55px] w-[55px] flex items-center justify-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-32 object-contain"
              />
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
