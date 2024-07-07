import React from "react";
import { Outlet } from "react-router";
import Headermenu from "../component/HeaderMenu";
import InformationGeneral from "../component/InformationGeneral";

export default function Layout() {
  return (
    <div className="flex h-screen w-screen bg-gray-950 p-5 gap-4">
      <div className="h-full w-5/12 bg-gray-900 rounded-xl">
        <InformationGeneral />
      </div>

      <div className="flex flex-col w-full bg-gray-900 rounded-xl">
        <Headermenu />

        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
