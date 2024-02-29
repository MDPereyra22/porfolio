// eslint-disable-next-line no-unused-vars
import React from "react";
import ProjectCard from "./ProyectCard";
import coworking from "../../assets/Coworking.png";
import recetas from "../../assets/bestfood.png";
import porfolio from "../../assets/porfolio.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projectsData = [
    {
      title: 'Sinergia Coworking',
      description: (
        <>
          Una plataforma de coworking diseñada e implementada para fomentar la colaboración entre profesionales.
          Desarrollada con React y Node.js, con integración de autenticación.
          Tecnologías utilizadas: React, Node.js, Sql, Cloudinary, Figma.
        </>
      ),
      link: 'https://develop--sinergia-cowork.netlify.app/',
      screenshot: coworking,
      github:'https://github.com/GDuranHenriquez/SinergiaCoworking'
    },
    {
      title: 'The Best Food App',
      description: (
        <>
          Una plataforma integral de recetas de comida con un diseño atractivo y funcionalidades avanzadas.
          Desarrollada con React para garantizar una experiencia de usuario óptima.
          Tecnologías utilizadas: React, Node.Js Sql.
        </>
      ),
      link: 'https://thebestfoodapp.netlify.app',
      screenshot: recetas,
      github:'https://github.com/MDPereyra22/bestFood-client'
    },
    {
      title: 'Porfolio',
      description: (
        <>
          Mi propio porfolio donde muestro mis proyectos y habilidades como desarrollador web.
          Desarrollado con React y desplegado en Netlify.
        </>
        ),
      link: 'https://matiaspereyra.netlify.app/',
      screenshot: porfolio,
      github:'https://github.com/MDPereyra22/porfolio'
    },
    
  ];

  return (
    <motion.section
      className=" bg-gradient-to-r from-purple-800 to-indigo-900 p-14 text-white text-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-black">Proyectos Destacados</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
