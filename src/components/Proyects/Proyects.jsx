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
      description: 'Plataforma de coworking diseñada e implementada para fomentar la colaboración entre profesionales. Desarrollada con React y Node.js, con integración de autenticación.',
      link: 'https://develop--sinergia-cowork.netlify.app/',
      screenshot: coworking,
    },
    {
      title: 'The Best Food App',
      description: 'Plataforma integral de recetas de comida con un diseño atractivo y funcionalidades avanzadas. Desarrollada con React y Firebase para garantizar una experiencia de usuario óptima.',
      link: 'https://thebestfoodapp.netlify.app',
      screenshot: recetas,
    },
    {
      title: 'WellNest Clinic',
      description: 'Colaboración en el diseño y desarrollo de una plataforma médica centrada en el bienestar del paciente. Utiliza tecnologías como React, Redux y Firebase para una experiencia fluida y segura.',
      link: 'https://wellnest-clinic.netlify.app/',
      screenshot: porfolio,
    },
  ];

  return (
    <motion.section
      className=" bg-gradient-to-r from-purple-800 to-indigo-900 p-14 text-white text-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-4xl font-bold mb-8">Proyectos Destacados</h2>
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
