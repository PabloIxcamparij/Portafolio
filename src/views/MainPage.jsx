import React from "react";
import {
  frontEndImages,
  backEndImages,
  databaseImages,
} from "../Data/ImgURL.json";

import SpaceAboveMe from "../Components/SpaceAboveMe";
import GeneralInformation from "../Components/GeneralInformation";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <GeneralInformation />

      <div className="w-full p-4 flex flex-col gap-6 lg:grid lg:grid-cols-8 lg:grid-rows-8">
        {/* 5. About Me */}
        <div className="bg-gray-900 p-6 rounded-xl flex flex-col lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-1">
          <h1 className="text-4xl font-bold text-center mb-4 text-white">
            About Me
          </h1>

          <span className="">
            I am
            <span className="font-bold text-blue-300"> Software Engineer </span>
            with skills in
            <span className="font-bold text-blue-300"> FrontEnd </span> and
            <span className="font-bold text-blue-300"> BackEnd. </span> {""}
            My expertise lies in developing
            <span className="font-bold text-blue-300"> web applications</span>,
            in both development domains. Although I have more knowledge and
            proficiency in
            <span className="font-bold text-blue-300"> front </span>
            development, because i am more familiar with modern frameworks like
            <span className="font-bold text-blue-300"> React </span> and
            <span className="font-bold text-blue-300"> Vue</span>.
          </span>
          <br />
          <span>
            I am totally committed to the projetcs i work on. I always seeking
            to provide an efficient product. In addition, i work well in
            teamwork and, this is supported by knowledge of agile methodologies
            like
            <span className="font-bold text-blue-300"> Scrum</span>.
          </span>
        </div>

        {/* 4. Front End */}
        <div className="bg-gray-900 p-4 rounded-xl flex flex-col lg:col-span-4 lg:row-span-3 lg:col-start-1 lg:row-start-3">
          <SpaceAboveMe
            dataSpace={{
              title: "Front End",
              information:
                "In the development of application logic I have experience with:",
              dataBaseUrl: frontEndImages,
            }}
          />
        </div>

        {/* 3. Back End */}
        <div className="bg-gray-900 p-4 rounded-xl flex flex-col lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-3">
          <SpaceAboveMe
            dataSpace={{
              title: "Back End",
              information:
                "In application design I have knowledge of the following frameworks:",
              dataBaseUrl: backEndImages,
            }}
          />
        </div>

        {/* 1. General Technologies */}
        <div className="bg-gray-900 p-4 rounded-xl flex flex-col lg:col-span-6 lg:row-span-3 lg:col-start-1 lg:row-start-6">
          <SpaceAboveMe
            dataSpace={{
              title: "General Technologies",
              information:
                "Some technologies I also use that fit both backend and standalone environments:",
              dataBaseUrl: backEndImages, // Puedes filtrar si solo quieres Java, C#, etc.
            }}
          />
        </div>

        {/* 2. Databases */}
        <div className="bg-gray-900 p-4 rounded-xl flex flex-col lg:col-span-2 lg:row-span-3 lg:col-start-7 lg:row-start-6">
          <SpaceAboveMe
            dataSpace={{
              title: "Databases",
              information: "I’ve worked with these database managers:",
              dataBaseUrl: databaseImages,
            }}
          />
        </div>
      </div>
    </div>
  );
}
