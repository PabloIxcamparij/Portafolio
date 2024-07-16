import React from "react";
import {
  frontEndImages,
  backEndImages,
  databaseImages,
} from "../Data/ImgURL.json";
import SpaceAbout from "../Components/SpaceAbout";

export default function AboutPage() {
  return (
    <div className="p-5 text-white">

      <div className="mb-5 gap-5 flex flex-col">
        
        <span>
          I am
          <span className="font-bold text-blue-300"> Software Engineer </span>
          with skills in 
          <span className="font-bold text-blue-300"> FrontEnd </span> and
          <span className="font-bold text-blue-300"> BackEnd. </span> {""}
          My expertise lies in developing
          <span className="font-bold text-blue-300"> web applications</span>, in both development domains.
          Although I have more knowledge and proficiency in
          <span className="font-bold text-blue-300"> front </span> 
          development, because i am more familiar with modern frameworks like
          <span className="font-bold text-blue-300"> React </span> and
          <span className="font-bold text-blue-300"> Vue</span>.
        </span>

        <span>
          I am totally committed to the projetcs i work on. I always seeking to provide an efficient product.
          In addition, i work well in teamwork and, this is supported by knowledge of agile methodologies like 
          <span className="font-bold text-blue-300"> Scrum</span>.
        </span>

      </div>

      <h1 className="text-lg font-bold"> Web Design </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
        <SpaceAbout
          dataSpace={{
            title: "Front End",
            information:
              "In application design I have knowledge of the following frameworks",
            dataBaseUrl: frontEndImages,
          }}
        />
        <SpaceAbout
          dataSpace={{
            title: "Back End",
            information:
              "In the development of application logic I have knowledge about",
            dataBaseUrl: backEndImages,
          }}
        />
        <SpaceAbout
          dataSpace={{
            title: "Data Base",
            information:
              "I have also worked with the following database managers",
            dataBaseUrl: databaseImages,
          }}
        />
      </div>
    </div>
  );
}
