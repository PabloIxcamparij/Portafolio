import React from "react";

export default function SpaceAbout({ dataSpace }) {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-2 text-red-500">{dataSpace.title}</h2>

      <p className="px-3">{dataSpace.information}</p>

      <div className="w-full overflow-x-auto scrollbar-hide mt-5">
        <ul className="flex gap-5 min-w-max px-3">
          {dataSpace.dataBaseUrl.map((img, index) => (
            <li key={index} className="flex items-center justify-center">
              <img
                src={img.src}
                alt={img.alt}
                className="w-[50px] h-[50px] object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
