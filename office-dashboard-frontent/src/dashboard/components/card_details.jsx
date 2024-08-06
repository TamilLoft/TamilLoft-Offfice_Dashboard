import Dashboard_card from "./dashboardcard";

const Card_Details = () => {
    const team = {
      name: 'Developers',
      icon: 'vite.svg', // Replace with team icon URL
      members: [
        {  image: 'https://via.placeholder.com/40' }, // Replace with member image URLs
        {  image: 'https://via.placeholder.com/40' },
        { image: 'https://via.placeholder.com/40' },
      ],
    };
  
    return (
      <div className="flex justify-center mt-10">
        <Dashboard_card teamName={team.name} members={team.members} teamIcon={team.icon} />
      </div>
    );
  };
  
  export default Card_Details;