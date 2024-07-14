import HeaderMenuButton from "./HeaderMenuButton";
import { useInformation } from "../Hook/useInformation";

export default function HeaderMenu() {

  const {isMobile,pageTitle,buttons} = useInformation()

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center gap-5 w-full p-2">
      <h1 className="text-white font-bold text-4xl">{pageTitle}</h1>
      
      <div className="flex flex-row w-full lg:w-2/3 justify-around rounded-full gap-4">
        
        {buttons.map((button, index) => (
            <HeaderMenuButton dataButton={button} isActive={button.isActive} isMobile={isMobile} key={index}/>
        ))}

      </div>

    </div>
  );
}
