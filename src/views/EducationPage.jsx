import { educationData } from "../Data/education.json";
import SpaceEducation from "../Components/SpaceEducation";

export default function EducationPage() {

  return (
    <div className="w-full grid lg:grid-cols-2 gap-5 mt-10 mb-5">
      {educationData.map((education, index) => (
        <SpaceEducation key={index} education={education} />
      ))}
    </div>
  );
}
