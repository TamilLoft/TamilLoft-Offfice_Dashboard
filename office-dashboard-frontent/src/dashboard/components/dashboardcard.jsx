
const Dashboard_card = ({ teamName, members, teamIcon }) => {
    return (
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg rounded-xl">
        <div className="flex items-center p-4 border-b border-gray-200">
          <img src={teamIcon} alt={`${teamName} icon`} className="w-8 h-8 mr-3" />
          <h2 className="text-lg font-semibold">{teamName}</h2>
        </div>
        <ul className="item-center flex">
          {members && members.length > 0 ? (
            members.map((member, index) => (
              <li key={index} className="flex items-center p-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <span className="text-gray-700">{member.name}</span>
              </li>
            ))
          ) : (
            <li className="p-4 text-center text-gray-500">No members found</li>
          )}
        </ul>
      </div>
    );
  };
  export default Dashboard_card