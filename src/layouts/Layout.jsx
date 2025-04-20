import React from "react";
import { Outlet } from "react-router";
import Headermenu from "../Components/HeaderMenu";
import { useInformation } from "../Hook/useInformation";

export default function Layout() {
  const {} = useInformation();

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-950 text-white p-6 gap-6">
      
      <Headermenu />

      <main className="flex items-center justify-center">
        <Outlet />
      </main>
    </div>
  );
}
