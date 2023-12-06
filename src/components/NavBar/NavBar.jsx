import React from "react";
import { Link } from 'react-scroll';
import { motion } from "framer-motion";

const NavBar =()=>{
    return(
        <motion.nav
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="bg-gray-800 p-4 text-white fixed top-0 w-full z-50">
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
                <Link className="cursor-pointer" to="about me" spy={true} smooth={true} duration={500}>
                    Acerca de
                </Link>
            </div>
        </motion.nav>
    )
};

export default NavBar;