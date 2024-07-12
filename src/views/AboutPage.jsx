import React from "react";
import {
  frontEndImages,
  backEndImages,
  databaseImages,
} from "../Data/ImgURL.json";
import SpaceInformation from "../Components/SpaceInformation";

export default function AboutPage() {
  return (
    <div className="p-5">
      <div className="mb-5 gap-5 flex flex-col">
        <span className="text-white">
          I am
          <span className="font-bold text-blue-300">
            {" "}
            Software Developer{" "}
          </span>{" "}
          with skills in {" "}
          <span className="font-bold text-blue-300">FrontEnd </span> and{" "}
          <span className="font-bold text-blue-300">BackEnd. </span> {""}
          My expertise lies in developing{" "}
          <span className="font-bold text-blue-300">web applications</span>, in both development domains.
          Although I have more knowledge and proficiency in frontend
          development, because i am more familiar with modern frameworks like{" "}
          <span className="font-bold text-blue-300">React</span> and{" "}
          <span className="font-bold text-blue-300">Vue</span>.
        </span>

        <span className="text-white">
          I am totally committed to the projetcs i work on , always seeking to provide an efficient product.
          Addionally, i work well in teamwork, this is supported by knowledge of agile methodologies like {" "}
          <span className="font-bold text-blue-300">Scrum</span>.
        </span>
      </div>

      <h1 className="text-white"> Web Design </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
        <SpaceInformation
          dataSpace={{
            title: "Front End",
            information:
              "In application design I have knowledge of the following frameworks",
            dataBaseUrl: frontEndImages,
          }}
        />
        <SpaceInformation
          dataSpace={{
            title: "Back End",
            information:
              "In the development of application logic I have knowledge about",
            dataBaseUrl: backEndImages,
          }}
        />
        <SpaceInformation
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
