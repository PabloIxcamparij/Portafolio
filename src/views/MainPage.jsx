import React from "react";
import {
  frontEndImages,
  backEndImages,
  databaseImages,
  generalTechImages,
} from "../Data/ImgURL.json";

import SpaceAboveMe from "../Components/SpaceAboveMe";
import GeneralInformation from "../Components/GeneralInformation";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center">
      
      <GeneralInformation />

      <div className="w-full p-4 flex flex-col gap-6 lg:grid lg:grid-cols-8 lg:grid-rows-8">
        
        <div className="text-wrap md:px-16 rounded-xl flex flex-col lg:col-span-8 lg:row-span-2 lg:col-start-1 lg:row-start-1">
         
          <h1 className="text-4xl font-bold text-center mb-4 text-white">
            About Me
          </h1>

          <span>
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

        <div className="bg-gray-900  rounded-xl flex flex-col p-6 items-center justify-around lg:col-span-4 lg:row-span-3 lg:col-start-1 lg:row-start-3">
          <SpaceAboveMe
            dataSpace={{
              title: "Front End",
              information:
                "Frontend development is my main focus. I love designing and building web experiences. React has become one of my favorite tools, and I'm always open to exploring new technologies.",
              dataBaseUrl: frontEndImages,
            }}
          />
        </div>

        <div className="bg-gray-900 rounded-xl flex flex-col p-6 items-center justify-around lg:col-span-4 lg:row-span-3 lg:col-start-5 lg:row-start-3">
          <SpaceAboveMe
            dataSpace={{
              title: "Back End",
              information:
                "Although backend is not my main area, I enjoy solving logical challenges and structuring server-side logic. I've gained solid experience.",
              dataBaseUrl: backEndImages,
            }}
          />
        </div>

        <div className="bg-gray-900 rounded-xl flex flex-col p-6 items-center justify-around lg:col-span-5 lg:row-span-3 lg:col-start-1 lg:row-start-6">
          <SpaceAboveMe
            dataSpace={{
              title: "General Technologies",
              information:
                "I have solid foundations in programming with Java and C#, and I’ve approached Python for its versatility and ease of use. These languages have helped shape the way I think about problem solving and software design.",
              dataBaseUrl: generalTechImages,
            }}
          />
        </div>

        <div className="bg-gray-900 rounded-xl flex flex-col p-6 items-center justify-around lg:col-span-3 lg:row-span-3 lg:col-start-6 lg:row-start-6">
          <SpaceAboveMe
            dataSpace={{
              title: "Databases",
              information:
                "Databases have been a fundamental part of my career. I’ve worked with various relational",
              dataBaseUrl: databaseImages,
            }}
          />
        </div>
      </div>

    </div>
  );
}
