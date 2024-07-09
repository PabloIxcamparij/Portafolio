import React from "react";
import { Image } from "@nextui-org/react";
import Marquee from "react-fast-marquee";

export default function SpaceInformation({ dataSpace }) {
  console.log(dataSpace.dataBaseUrl);

  return (
    <div className="w-full bg-slate-800 rounded-2xl p-4">

      <h2 className="text-white text-lg font-bold mb-2 "> {dataSpace.title} </h2>

      <span className="text-white">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit laboriosam
        libero vero laudantium quod quisquam voluptatem rerum consectetur
        repellat dolores iure ut eaque beatae quasi perspiciatis fuga, eveniet
        eos laborum?{" "}
      </span>

      <Marquee speed={40} className="mt-2" >

        {dataSpace.dataBaseUrl.map((img, index) => (
          <div key={index} className="flex justify-center">
            <Image isZoomed src={img.src} alt={img.alt} className="h-20 p-2 mr-5 ml-5" />
          </div>
        ))}
        
      </Marquee>

    </div>
  );
}
