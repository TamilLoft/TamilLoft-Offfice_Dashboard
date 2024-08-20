import Card_Details from "./card_details";

const Team = () => {
  return (
    <>
      <div className="bg-transparent border-2 rounded-xl p-1">
        <div className="flex justify-between text-lg text-slate-500 px-3">
          <h1>Teams</h1>
          <button>
            <i class="fa-solid fa-ellipsis"></i>
          </button>
        </div>
        <Card_Details />
      </div>
    </>
  );
};

export default Team;
