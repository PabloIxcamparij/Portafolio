import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function HeaderMenuButton({dataButton}) {
    
  const [hoverAbout, setHoverAbout] = useState(false);

  return (
    <>
      <NavLink to={dataButton.way}>
        <button
          className={` flex items-center justify-center gap-2 rounded-full transition duration-300 p-3 ${
            hoverAbout ? "bg-gray-900" : "bg-white"
          }`}
          onMouseEnter={() => setHoverAbout(true)}
          onMouseLeave={() => setHoverAbout(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`h-8 w-8 transition duration-300 ${
              hoverAbout ? "text-white" : "text-current"
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d= {dataButton.svg}
            />
          </svg>

          <h1 className={`${hoverAbout ? "text-white" : "text-current"}`}>
            {dataButton.title}
          </h1>

        </button>
      </NavLink>
    </>
  );
}
