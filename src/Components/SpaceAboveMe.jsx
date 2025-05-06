import React from "react";

export default function SpaceAbout({ dataSpace }) {
  return (
    <>
      <h2 className="text-xl font-bold mb-2 text-red-500">{dataSpace.title}</h2>

      <span className="px-3">{dataSpace.information}</span>

      <ul className="w-full flex gap-5 overflow-x-auto h-[70px]">
        {dataSpace.dataBaseUrl.map((img, index) => (
          <li
            key={index}
            className="flex items-center justify-center"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-contain"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
