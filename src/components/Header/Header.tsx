import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { FaGithub, FaHome, FaTwitter } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { BiPaste } from "react-icons/bi";
import PasteContainer from "../container/PasteContainer";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isOpenContainer, setIsOpenContainer] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const openContainer = () => {
    setIsOpenContainer(!isOpenContainer)
  }
  return (
    <>
      {/* Header */}
      <div className="fixed z-30 flex items-center justify-between w-full px-6 py-2 border-b border-black shadow bg-zinc-900 backdrop-blur-3xl md:px-14">
        {/* Logo */}
        <Link to={"/"} id="img-container" className="flex items-center gap-3">
          <img width={40} src={Logo} alt="Logo" />
          <div id="logo-title" className="hidden leading-relaxed md:block">
            <h1 className="text-lg font-medium leading-none mb-0.5 text-sky-500">
              Free
            </h1>
            <h2 className="text-xl font-medium leading-none">
              Components lib.
            </h2>
          </div>
        </Link>

        {/* Links Container for Desktop */}
        <div id="links-container" className="items-center relative hidden md:flex gap-7">
          <Link to="/">
            <FaHome size={22} className="hover:text-sky-500" />
          </Link>

          <Link className="hover:text-sky-500" to="components">
            Components
          </Link>
          <Link className="hover:text-sky-500" to="contribute">
            Contribute
          </Link>
          <Link
            className="hover:text-sky-500"
            target="_blank"
            to="https://freetemplatecomp.vercel.app/templates/index.html"
          >
            Templates
          </Link>
          <p className="hover:text-sky-500 cursor-pointer" onClick={openContainer}>
            <BiPaste size={20}  color="skyblue"/>
          </p>
        </div>

        <div>
          {
            isOpenContainer && (
              <div className="absolute w-[80vw] top-10 right-10">
                <PasteContainer />
              </div>
            )
          }
        </div>

        {/* Social Links and Hamburger Menu */}
        <div className="flex items-center gap-4 md:gap-7">
          <a
            href="https://github.com/workmdirfan29/FreeComponentsLib"
            target="_blank"
            className="hover:text-sky-500"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://x.com/mdirfan_23"
            target="_blank"
            className="hover:text-sky-500"
          >
            <FaTwitter size={25} />
          </a>
          {/* Hamburger Menu for Mobile */}
          <button className="md:hidden text-sky-500" onClick={toggleSidebar}>
            <RiMenu3Fill size={30} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 bg-zinc-900 bg-opacity-95 transform ${
          isSidebarOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300`}
      >
        {/* Close Icon */}
        <button
          className="absolute top-4 right-4 text-sky-500"
          onClick={toggleSidebar}
        >
          <IoClose size={30} />
        </button>

        {/* Sidebar Content */}
        <div className="flex flex-col items-center justify-center h-full gap-6">
          <Link
            onClick={toggleSidebar}
            to={"/"}
            className="flex items-center gap-2 text-xl text-white hover:text-sky-500"
          >
            <FaHome /> Home
          </Link>
          <Link
            onClick={toggleSidebar}
            to="contribute"
            className="text-xl text-white hover:text-sky-500"
          >
            Contribute
          </Link>
          <Link
            onClick={toggleSidebar}
            to="components"
            className="text-xl text-white hover:text-sky-500"
          >
            Components
          </Link>
          <Link
            onClick={toggleSidebar}
            target="_blank"
            to="https://freetemplatecomp.vercel.app/templates/index.html"
            className="text-xl text-white hover:text-sky-500"
          >
            Templates
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
