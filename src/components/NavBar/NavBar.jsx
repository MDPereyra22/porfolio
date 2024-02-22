import React from "react";
import { Link } from 'react-scroll';


const NavBar =()=>{
    return(
        <nav
       
        className="bg-black p-4 text-white fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-around ">
                <Link className="cursor-pointer" to="home" spy={true} smooth={true} duration={500}>
                    Inicio
                </Link>
                <Link className="cursor-pointer" to="projects" spy={true} smooth={true} duration={500}>
                    Proyectos
                </Link>
                <Link className="cursor-pointer" to="technologies" spy={true} smooth={true} duration={500}>
                    Tecnologías
                </Link>
                <Link className="cursor-pointer" to="footer" spy={true} smooth={true} duration={500}>
                    Contacto
                </Link>
            </div>
        </nav>
    )
};

export default NavBar;