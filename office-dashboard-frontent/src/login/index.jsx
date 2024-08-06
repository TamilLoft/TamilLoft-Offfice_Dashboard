import Logo from "../logo";
import Forms from "./components/forms";

export default function Loginpage(){
    return(
        <>
        <div className="flex flex-col lg:w-2/4 items-center w-full p-4 ">
            <div className="w-full md:w-2/4">
             <Logo/>
        </div>
       
        <Forms/>
        </div>
        
        </>
    )
}