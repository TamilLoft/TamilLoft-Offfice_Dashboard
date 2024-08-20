export default function Sidebar() {
  const menu = [
    {
      title: "dashboard",
      img: "dashboard_.svg.svg",
      path: "/dashboard",
    },
    {
      title: "messages",
      img: "messages.svg",
      path: "/messages",
    },
    {
      title: "activity",
      img: "activity.svg",
      path: "/activity",
    },
    {
      title: "schedule",
      img: "schedule.svg",
      path: "/schedule",
    },
    {
      title: "tasks",
      img: "task.svg",
      path: "/task",
    },
    {
      title: "settings",
      img: "settings.svg",
      path: "/settings",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-start">
        {menu.map((index) => (
          <a href={index.path}>
            <div className="bg-white rounded md:px-3 md:mb-10 m-4 flex w-fit items-center active:text-[#ffa520]  hover:text-[#ffa520] ">
              <div className="md:mr-4 w-6 lg:w-14 lg:px-3 f">
                <img src={index.img}  className="w-6"/>
              </div>

              <h2 className="font-bold text-md capitalize hidden md:block">
                {index.title}{" "}
              </h2>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
