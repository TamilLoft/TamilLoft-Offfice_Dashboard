import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addname } from "../../store/slice";

export const Addcard = () => {
  const [show, setShow] = useState(false);
  const [team,setTeam]=useState([])
  const Name=useRef(null)
  
  const teamDispatch=useDispatch();

//   function clickbutton(){
//     setShow(!show)
//   }
  return (
    <>
      <div className="text-slate-500 border-2 flex justify-center w-2/4 items-center border-dashed p-3 flex-col">
        <button onClick={()=>(setShow(!show))} className="text-xl"><i class="fa-solid fa-plus"></i> add</button>
        {show && (
          <div>
            <label>Name:</label>
            <input className="w-max border rounded-lg" ref={Name} type="text" />
            {/* <label>member:</label>
            <input className="w-max border rounded-lg" /> */}
            <button onClick={()=>(teamDispatch(addname()))}><i class="fa-solid fa-plus"></i>add</button>
          </div>
        )}
      </div>
    </>
  );
};
