import { TeamnameSlice } from "../../store/slice";
import { Addcard } from "./add_card";
import Dashboard_card from "./dashboardcard";

const Card_Details = () => {

  // const cartValue = useSelector((state) => {
  //   return state..value;
  // });
    const team =[
      {
      name: 'Developers',
      icon: 'vite.svg', // Replace with team icon URL
      members: [
        {  image: 'https://randomuser.me/api/portraits/men/32.jpg' }, // Replace with member image URLs
        {  image: 'https://via.placeholder.com/40' },
        { image: 'https://via.placeholder.com/40' },
      ],
    },
    {
      name: 'Developers',
      icon: 'vite.svg', // Replace with team icon URL
      members: [
        {  image: 'https://via.placeholder.com/40' }, // Replace with member image URLs
        {  image: 'https://via.placeholder.com/40' },
        { image: 'https://via.placeholder.com/40' },
      ],
    }

    ] 
  
    return (
      <div className="flex justify-start mt-10">
        {team.map((team,index)=>(
          <Dashboard_card key={index} {...team} teamName={team.name} teamIcon={team.icon} members={team.members}/>
        ))}
        
        <Addcard/>
      </div>
    );
  };
  
  export default Card_Details;