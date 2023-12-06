import React from "react";
import ProjectCard from "./ProyectCard";
import Coworking from "../../assets/Coworking.jpg"
import wellNest from "../../assets/wellnest.jpg"

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
          screenshot: wellNest,
        },
        {
          title: 'Plataforma de Recetas de Comida',
          description: 'Diseño y desarrollo integral de una plataforma de recetas de comida.',
          link: 'https://github.com/MDPereyra22/piFood',
          screenshot: Coworking,
        },
        
      ];


    return(
        <section className="bg-gradient-to-r flex flex-col items-center justify-center from-amber-300 via-amber-200 to-amber-100 p-8 text-center min-h-screen">
      <h2 className="text-4xl font-bold mb-24">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-9">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
    );
};

export default Proyects