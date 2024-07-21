import React from "react";
import { Outlet } from "react-router";
import Headermenu from "../Components/HeaderMenu";
import InformationGeneral from "../Components/InformationGeneral";

export default function Layout() {
  return (
    <div className="flex flex-col xl:flex-row min-h-screen w-full bg-gray-950 p-5 gap-4">

      <div className="flex flex-col xl:flex-row h-full w-full gap-4">
        
        <div className="h-full w-full xl:w-2/6 bg-gray-900 rounded-xl overflow-y-auto">
          <InformationGeneral />
        </div>

        <div className="flex flex-col w-full bg-gray-900 rounded-xl overflow-y-auto">
          <Headermenu />
          <div className="w-full flex-grow p-4">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}
