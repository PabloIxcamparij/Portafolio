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
    <div className="flex flex-col items-center gap-6 ">
      <GeneralInformation />

      <div className="bg-gray-900 x w-[85%] rounded-xl overflow-y-auto p-8">
        <div className="flex flex-col items-center gap-6 ">
          <div className="flex flex-col p-6 gap-6">
            <h1 className="text-4xl font-bold text-center">About Me</h1>

            <span>
              I am
              <span className="font-bold text-blue-300">
                {" "}
                Software Engineer{" "}
              </span>
              with skills in
              <span className="font-bold text-blue-300"> FrontEnd </span> and
              <span className="font-bold text-blue-300"> BackEnd. </span> {""}
              My expertise lies in developing
              <span className="font-bold text-blue-300"> web applications</span>
              , in both development domains. Although I have more knowledge and
              proficiency in
              <span className="font-bold text-blue-300"> front </span>
              development, because i am more familiar with modern frameworks
              like
              <span className="font-bold text-blue-300"> React </span> and
              <span className="font-bold text-blue-300"> Vue</span>.
            </span>

            <span>
              I am totally committed to the projetcs i work on. I always seeking
              to provide an efficient product. In addition, i work well in
              teamwork and, this is supported by knowledge of agile
              methodologies like
              <span className="font-bold text-blue-300"> Scrum</span>.
            </span>
          </div>

          <h1 className="text-lg font-bold"> Web Design </h1>

          <div className="grid grid-cols-1 mt-5 gap-4">
            <SpaceAboveMe
              dataSpace={{
                title: "Front End",
                information:
                  "In application design I have knowledge of the following frameworks",
                dataBaseUrl: frontEndImages,
              }}
            />
            <SpaceAboveMe
              dataSpace={{
                title: "Back End",
                information:
                  "In the development of application logic I have knowledge about",
                dataBaseUrl: backEndImages,
              }}
            />
            <SpaceAboveMe
              dataSpace={{
                title: "Data Base",
                information:
                  "I have also worked with the following database managers",
                dataBaseUrl: databaseImages,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
