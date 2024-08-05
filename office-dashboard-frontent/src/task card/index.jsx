import DashboardCard from "./components/dashboardcard";


const Taskcard = () => {
  const task =[
    {
    title: 'Design Landing Page',
    daysLeft: 3,
    time: '02:30:45',
    teamMembers: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/men/55.jpg',
    ],
    completedPercentage: 90,
    team:"UI/UX designers"
  },
  {
    title: 'Documentation',
    daysLeft: 3,
    time: '02:30:45',
    teamMembers: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/men/55.jpg',
    ],
    completedPercentage: 60,
    team:"HR team"
  },
  {
    title: 'Project break down',
    daysLeft: 31,
    time: '02:30:45',
    teamMembers: [
      'https://randomuser.me/api/portraits/men/32.jpg',
      'https://randomuser.me/api/portraits/women/44.jpg',
      'https://randomuser.me/api/portraits/men/55.jpg',
    ],
    completedPercentage: 50,
    team:"Project management Team"
  }
  ] 

  return (
    <div className="p-4 sm:p-6 md:p-5 bg-transparent  min-h-screen " >
      {task.map((task,index)=>(
      <DashboardCard key={index} {...task} />  
      ))}  
      
    </div>
  );
};

export default Taskcard;