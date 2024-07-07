import React from "react";

export default function aboutPage() {
  return (
    <div className="p-10 gap-4">
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

      <div className="flex flex-wrap mt-5">
        <div className="w-2/4 mb-5">
          <h1 className="text-white mb-2"> Front End </h1>
          <span className="text-white">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            laboriosam libero vero laudantium quod quisquam voluptatem rerum
            consectetur repellat dolores iure ut eaque beatae quasi perspiciatis
            fuga, eveniet eos laborum?{" "}
          </span>
          <div align="left">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              height="40"
              alt="java logo"
            />
            <img width="12" />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              height="40"
              alt="python logo"
            />
          </div>
        </div>

        <div className="w-2/4 mb-5">
          <h1 className="text-white  mb-2"> Back End </h1>
          <span className="text-white">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            laboriosam libero vero laudantium quod quisquam voluptatem rerum
            consectetur repellat dolores iure ut eaque beatae quasi perspiciatis
            fuga, eveniet eos laborum?{" "}
          </span>
        </div>

        <div className="w-2/4 mb-5">
          <h1 className="text-white  mb-2"> Back End </h1>
          <span className="text-white">
            {" "}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit
            laboriosam libero vero laudantium quod quisquam voluptatem rerum
            consectetur repellat dolores iure ut eaque beatae quasi perspiciatis
            fuga, eveniet eos laborum?{" "}
          </span>
        </div>
      </div>
    </div>
  );
}
