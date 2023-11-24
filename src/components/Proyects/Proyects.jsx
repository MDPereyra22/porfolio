import React from "react";
import ProjectCard from "./ProyectCard";
import Coworking from "../../assets/Coworking.jpg"

const Proyects =()=>{
    const projectsData = [
        {
          title: 'Sinergia Coworking',
          description: 'Diseño e implementación de una plataforma de coworking.',
          link: 'https://develop--sinergia-cowork.netlify.app/',
          screenshot: Coworking,
        },
        {
          title: 'WellNest Clinic',
          description: 'Contribución al diseño y desarrollo de una plataforma médica.',
          link: 'https://wellnest-clinic.netlify.app/',
          screenshot: Coworking,
        },
        {
          title: 'Plataforma de Recetas de Comida',
          description: 'Diseño y desarrollo integral de una plataforma de recetas de comida.',
          link: 'https://github.com/MDPereyra22/piFood',
          screenshot: Coworking,
        },
        // Agrega más proyectos según sea necesario
      ];


    return(
        <section className="my-8 text-center">
      <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
    );
};

export default Proyects