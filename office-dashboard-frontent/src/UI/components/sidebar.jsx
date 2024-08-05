export default function Sidebar() {
  const menu = [
    {
      title: "dashboard",
      icon: "fa-solid fa-list",
    },
    {
      title: "messages",
      icon: "fa-solid fa-message",
    },
    {
      title: "activity",
      icon: "fa-solid fa-stopwatch",
    },
    {
      title: "schedule",
      icon: "fa-solid fa-calendar-days",
    },
    {
      title: "tasks",
      icon: "fa-solid fa-check",
    },
    {
      title: "settings",
      icon: "fa-solid fa-gears",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-start">
        {menu.map((index) => (
          <a href="#">
            <div className="bg-white rounded md:px-3 md:mb-10 m-4 flex items-center active:text-[#ffa520]  hover:text-[#ffa520] ">
              <div className="md:mr-4 text-xl px-3">
                <i className={index.icon}></i>
              </div>

              <h2 className="font-bold text-xl capitalize hidden md:block">
                {index.title}{" "}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
