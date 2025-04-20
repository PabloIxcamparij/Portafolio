import HeaderMenuButton from "./HeaderMenuButton";
import { useInformation } from "../Hook/useInformation";

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export default function HeaderMenu() {

  const {isMobile,buttons} = useInformation()

  return (
    <Navbar className=" w-full bg-white/15 backdrop-filter backdrop-blur-md bg-opacity-10 rounded-lg flex justify-around items-center gap-5 p-2">
      
        {buttons.map((button, index) => (
            <HeaderMenuButton dataButton={button} isActive={button.isActive} isMobile={isMobile} key={index}/>
        ))}

    </Navbar>
  );
}
