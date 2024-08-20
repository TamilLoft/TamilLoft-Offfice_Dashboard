import { useParams } from "react-router-dom";
export default function Username(){
    let {id}=useParams();
    return(
        <>
        <h2 className="capitalize font-bold text-2xl w-fit my-3">hi exan <span className="text-sm font-semibold text-gray-400 hidden md:block">here's your currently `${id}`</span></h2>
        </>
    )
}