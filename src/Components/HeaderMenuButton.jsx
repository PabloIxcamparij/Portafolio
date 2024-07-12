import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderMenuButton = React.forwardRef(({ dataButton, isActive, isMobile }, ref) => {
  const [hoverAbout, setHoverAbout] = useState(false);

  const hoverClass = isActive || hoverAbout ? "bg-gray-900 text-white" : "text-gray-400";

  return (
    <NavLink to={dataButton.way}>
      <button
        ref={ref}
        className={`flex items-center justify-center gap-2 rounded-full transition duration-300 p-3 ${hoverClass}`}
        onMouseEnter={() => setHoverAbout(true)}
        onMouseLeave={() => setHoverAbout(false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`h-8 w-8 transition duration-300 ${hoverClass}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={dataButton.svg} />
        </svg>

        {!isMobile && (
          <h1 className={`font-bold ${hoverClass}`}>{dataButton.title}</h1>
        )}
        
      </button>
    </NavLink>
  );
});

export default HeaderMenuButton;
