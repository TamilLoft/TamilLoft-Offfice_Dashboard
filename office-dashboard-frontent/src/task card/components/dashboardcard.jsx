const DashboardCard = ({
  title,
  daysLeft,
  time,
  team,
  teamMembers,
  completedPercentage,
}) => {
  return (
    <div className="bg-white rounded-lg mt-4 shadow-lg p-6 md:p-4 max-w-sm md:max-w-md max-w-lg  ">
      <div className="grid-cols-1 grid justify-between xl:justify-items-center xl:grid xl:grid-cols-2">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-gray-400">{team}</p>
        </div>

        <div className="text-sm text-gray-500 bg-gray-200 rounded-lg m-1 w-max p-2 h-min">
          {daysLeft} days left
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        {/* <div className="text-2xl font-bold text-gray-800">
            {time}
          </div> */}
        <div className="flex -space-x-2">
          {teamMembers.map((member, index) => (
            <img
              key={index}
              className="w-8 h-8 rounded-full border-2 border-white"
              src={member}
              alt={`team-member-${index}`}
            />
          ))}
        </div>
      </div>
      <div className="mt-6">
        <div className="h-2 w-full bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-500 rounded-full"
            style={{ width: `${completedPercentage}%` }}
          ></div>
        </div>
        <div className="text-right text-sm font-medium text-gray-500 mt-2">
          {completedPercentage}% Completed
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
