import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Heading(){
    return(
        <>
        <div className="flex items-center w-40 justify-evenly">
            <button className="p-2 px-4 bg-[#ffa520] rounded-lg text-white"><i class="fa-solid fa-plus"></i> New</button>
            <div className='p-1 rounded'><i class="fa-solid fa-bell"></i></div>
            <div className='p-1 rounded'><i class="fa-solid fa-user"></i></div>
        </div>
        
        </>
    )
}