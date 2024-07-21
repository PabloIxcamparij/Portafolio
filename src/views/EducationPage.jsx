import React from "react";
import { educationData } from "../Data/education.json";
import SpaceEducation from "../Components/SpaceEducation";

export default function EducationPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5">
      {educationData.map((education, index) => (
        <SpaceEducation key={index} education={education} />
      ))}
    </div>
  );
}
