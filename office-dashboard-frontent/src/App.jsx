import "./App.css";
import Loginpage from "./login";
import Userinterface from "./UI";
import Header from "./header";
import Content from "./contentbox";

import Categries from "./catagories";
import Dashboard from "./dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const route = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/task",
      element: <Categries />,
    },
    {
      path: "/messages",
      
    },
    {
      path: "/activity",
      
    },
    {
      path: "/settings",
      
    },
    {
      path: "/schedule:id",
      
    }
  ]);
  return (
    <>
      {/* <div className='bg-[#232939] flex items-center justify-center h-screen'>
     <Loginpage/>
     
   </div> */}
      <div className="md:my-3 border-b-2 p-2 mb-4 md:pb-4">
        <Header />
      </div>

      <div className=" flex">
        <Userinterface />
        <section className="p-1 lg:p-7   bg-slate-50 w-full">
          <Content />
          <Dashboard/>
          {/* <Categries /> */}
        </section>
      </div>
    </>
  );
}

export default App;
