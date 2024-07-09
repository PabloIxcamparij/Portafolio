import React from "react";
import { frontEndImages, backEndImages, databaseImages} from "../Data/ImgURL.json";
import SpaceInformation from "../Components/SpaceInformation";

export default function aboutPage() {

  return (
    <div className="p-5">

      <div className="mb-5">
        <h1 className="text-white"> My persona </h1>
        <span className="text-white">
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
          laboriosam libero vero laudantium quod quisquam voluptatem rerum
          consectetur repellat dolores iure ut eaque beatae quasi perspiciatis
          fuga, eveniet eos laborum?{" "}
        </span>
      </div>

      <h1 className="text-white"> Web Design </h1>

      <div className="grid grid-cols-2 mt-5 gap-4">
       
        <SpaceInformation dataSpace={{title:"Front End", information: "A", dataBaseUrl: frontEndImages}}/>
        <SpaceInformation dataSpace={{title:"Back End", information: "A", dataBaseUrl: backEndImages}}/>
        <SpaceInformation dataSpace={{title:"Data Base", information: "A", dataBaseUrl: databaseImages}}/>

      </div>
      
    </div>
  );
}
