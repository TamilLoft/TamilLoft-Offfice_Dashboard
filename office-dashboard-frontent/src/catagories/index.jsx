import Category from "./components/catagories";

export default function Categries(){
  const Name=[
    {
        Category:"blogspot"
    },
    {
        Category:"progress"
    },
    {
        Category:"completed"
    }
    ]
    return(
        <>
        <div className="flex gap-2 flex-wrap lg:flex-nowrap  w-fit lg:w-fit">
            {Name.map((index)=>(
             <Category  Title={index.Category}/>
        ))}
       
        </div>
        
        </>
    )
}