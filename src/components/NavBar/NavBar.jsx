// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="bg-black p-4 text-white fixed top-0 w-screen z-50">
      <div className="container mx-auto flex justify-around ">
        <div className="hidden sm:block">
          <Link
            className="cursor-pointer mx-4"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Inicio
          </Link>
          <Link
            className="cursor-pointer mx-4"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
          >
            Proyectos
          </Link>
          <Link
            className="cursor-pointer mx-4"
            to="technologies"
            spy={true}
            smooth={true}
            duration={500}
          >
            Tecnologías
          </Link>
          <Link
            className="cursor-pointer mx-4"
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacto
          </Link>
        </div>
        <div className="sm:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {showMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
          {showMenu && (
            <div className="flex flex-col mt-2">
              <Link
                className="cursor-pointer text-white mx-4"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Inicio
              </Link>
              <Link
                className="cursor-pointer text-white mx-4"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Proyectos
              </Link>
              <Link
                className="cursor-pointer text-white mx-4"
                to="technologies"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Tecnologías
              </Link>
              <Link
                className="cursor-pointer text-white mx-4"
                to="footer"
                spy={true}
                smooth={true}
                duration={500}
                onClick={() => setShowMenu(false)}
              >
                Contacto
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
