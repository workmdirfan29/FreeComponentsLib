import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <div className="min-h-[45vh] flex items-end">
      <div
        id="bottom-container"
        className="md:h-[38vh] md:mt-0 mt-14 min-h-[38vh] px-4 sm:px-12 lg:px-20 w-full"
      >
        <div
          id="bottom-menu"
          className="flex flex-col w-full h-full gap-6 p-6 sm:flex-row sm:gap-2 sm:p-10 rounded-tl-3xl rounded-tr-3xl bg-zinc-900"
        >
          <div id="left-container" className="w-full sm:w-1/2">
            <Link to="/" className="flex gap-3">
              <img src={Logo} width={45} alt="logo" />
              <div id="title" className="leading-tight">
                <h1 className="text-xl font-medium leading-none text-sky-500">
                  Free
                </h1>
                <h3 className="text-xl font-semibold leading-tight">
                  Components lib.
                </h3>
              </div>
            </Link>
            <div id="content" className="my-6">
              <h2 className="text-lg mb-2.5 font-semibold text-sky-500">
                Modern & Accessible
              </h2>
              <p className="text-sm font-medium">
                Your go-to library for free, high-quality templates <br /> and
                components to kickstart your projects.
              </p>
            </div>
          </div>
          <div
            id="right-container"
            className="flex flex-col sm:flex-row items-start w-full sm:w-1/2 gap-[4vw] sm:gap-[6vw]"
          >
            <div id="right-l-container" className="w-full sm:w-1/2">
              <h1 className="relative inline-block text-xl text-sky-500 font-semibold border-b-[1px] border-sky-500">
                Explore clients
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-sky-200 to-transparent"></span>
              </h1>
              <div id="our-client" className="mt-5">
                <Link
                  className="flex items-center gap-2 my-3 text-sm font-medium text-zinc-400 hover:underline hover:text-sky-500"
                  to={"/"}
                >
                  Components Lib. <MdArrowOutward size={15} />
                </Link>
                <Link
                  target="_blank"
                  className="flex items-center gap-2 my-3 text-sm font-medium text-zinc-400 hover:underline hover:text-sky-500"
                  to={
                    "https://freetemplatecomp.vercel.app/templates/index.html"
                  }
                >
                  Free Templates <MdArrowOutward size={15} />
                </Link>
                <Link
                  target="_blank"
                  className="flex items-center gap-2 my-3 text-sm font-medium text-zinc-400 hover:underline hover:text-sky-500"
                  to={"https://freetemplatecomp.vercel.app/index.html"}
                >
                  Temp & Comp <MdArrowOutward size={15} />
                </Link>
              </div>
            </div>
            <div id="right-r-container" className="w-full sm:w-1/2">
              <div id="social-conect">
                <h1 className="relative inline-block text-xl text-sky-500 font-semibold border-b-[1px] border-sky-500">
                  Connect With Us:
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-sky-200 to-transparent"></span>
                </h1>
                <div className="flex items-center gap-4 mt-5 mb-4">
                  <div id="github">
                    <a
                      className="hover:text-sky-500"
                      href="https://github.com/workmdirfan29/FreeComponentsLib"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={22} />
                    </a>
                  </div>
                  <div id="twitter">
                    <a
                      className="hover:text-sky-500"
                      href="https://twitter.com/mdirfan_23"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter size={22} />
                    </a>
                  </div>
                </div>
                <p className="my-3 text-sm text-zinc-400">
                  Follow us for updates and <br /> exciting new releases!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-showcase" className="py-4 bg-black/20">
          <div className="text-sm text-center text-gray-500">
            © {new Date().getFullYear()} Free Components Lib. Built with ❤️ by{" "}
            <a
              href="https://x.com/mdirfan_23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:underline"
            >
              @mdirfan_23
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
