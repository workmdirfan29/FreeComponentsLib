import React from "react";
import { Link, Outlet } from "react-router-dom";

const Hero: React.FC = () => {
  const pages = [
    { title: "Alert Dialog", path: "alert-dialog" },
    { title: "Aspect Ratio", path: "aspect-ratio" },
    { title: "Button", path: "button" },
    { title: "Slider", path: "slider" },
  ];

  return (
    <div
      id="wrapper"
      className="relative flex w-full min-h-screen px-6 pt-16 text-white md:px-10 bg-zinc-950"
    >
      <div id="container" className="container relative flex gap-2 mx-auto">
        <div
          id="left-container"
          className="sticky top-16 border-r-[1px] border-zinc-800 w-[18vw] h-[calc(100vh-4rem)] p-2 overflow-y-auto hidden md:block"
        >
          <div id="left-container-data">
            <div>
              <p className="mt-5 mb-2.5 font-extrabold">Follow for updates</p>
              <a
                className="text-sm font-semibold hover:transition-all hover:text-sky-500 hover:ml-2"
                href="https://x.com/mdirfan_23"
              >
                Twitter @mdirfan_23
              </a>
            </div>

            <div id="left-content-wrapper">
              <p className="mt-5 mb-2.5 font-extrabold">All Components</p>
              <div id="left-wrapper-data" className="flex flex-col gap-2">
                {pages.map((pg, idx) => {
                  return (
                    <Link
                      key={idx}
                      to={pg.path}
                      className="text-sm font-medium cursor-pointer hover:underline hover:transition-all hover:text-sky-500 hover:ml-2"
                    >
                      {pg.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div
          id="right-container"
          className="w-full md:w-[82%] mt-5 min-h-[calc(100vh-4rem)] overflow-y-auto p-2"
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Hero;
