import React from "react";
import { Outlet } from "react-router";
import Headermenu from "../Components/HeaderMenu";
import GeneralInformation from "../Components/GeneralInformation";
import { useInformation } from "../Hook/useInformation";

export default function Layout() {
  const {} = useInformation();

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-950 p-5 gap-4">
      <Headermenu />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
