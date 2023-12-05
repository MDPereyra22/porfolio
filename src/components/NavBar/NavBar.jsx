import React from "react";
import { Link } from 'react-scroll';

const NavBar =()=>{
    return(
        <nav className="bg-gray-800 p-4 text-white fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
                <Link className="cursor-pointer" to="home" spy={true} smooth={true} duration={500}>
                    Inicio
                </Link>
                <Link className="cursor-pointer" to="home" spy={true} smooth={true} duration={500}>
                    Inicio
                </Link>
                <Link className="cursor-pointer" to="home" spy={true} smooth={true} duration={500}>
                    Inicio
                </Link>
                <Link className="cursor-pointer" to="home" spy={true} smooth={true} duration={500}>
                    Inicio
                </Link>
            </div>
        </nav>
    )
};

export default NavBar;