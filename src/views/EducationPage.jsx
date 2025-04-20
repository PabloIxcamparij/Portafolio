import React, { useState } from "react";
import { educationData } from "../Data/education.json";
import SpaceEducation from "../Components/SpaceEducation";

import { Listbox, ListboxItem } from "@nextui-org/react";

export default function EducationPage() {
  const [filterType, setFilterType] = useState("Todos");

  // Obtener los tipos únicos del JSON
  const uniqueTypes = [
    "Todos",
    ...new Set(educationData.map((edu) => edu.type)),
  ];

  // Filtrar la educación según el tipo seleccionado
  const filteredEducation =
    filterType === "Todos"
      ? educationData
      : educationData.filter((edu) => edu.type === filterType);
  return (
    <div className="flex flex-col items-center gap-5">


      <div className="flex gap-2 justify-between w-full max-w-md">
        <button onClick={() => setFilterType("Todos")} className="text-white">
          Todos
        </button>
        <button onClick={() => setFilterType("Degree")} className="text-white">
          Degree
        </button>
        <button
          onClick={() => setFilterType("Certificate")}
          className="text-white"
        >
          Certification
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5">
        {filteredEducation.map((education, index) => (
          <SpaceEducation key={index} education={education} />
        ))}
      </div>
    </div>
  );
}
