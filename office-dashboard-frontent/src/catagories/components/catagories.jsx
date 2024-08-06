import Taskcard from "../../task card"
export default function Category(props){
    const {Title}=props
    
    return(
        <>
        <div className="border-2 rounded-xl h-fit  lg:w-4/12 ">
            <h2 className="text-gray-600 font-bold p-4 border-b-2 capitalize">{Title}</h2>
            <Taskcard/>
        </div>
        </>
    )
}