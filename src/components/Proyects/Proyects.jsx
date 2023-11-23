import React from "react";

const Proyects =()=>{
    const projectsData = [
        {
          title: 'Plataforma de Coworking',
          description: 'Diseño e implementación de una plataforma de coworking.',
          link: 'https://develop--sinergia-cowork.netlify.app/',
        },
        {
          title: 'Proyecto Plataforma Médica',
          description: 'Contribución al diseño y desarrollo de una plataforma médica.',
          link: 'https://wellnest-clinic.netlify.app/',
        },
        {
          title: 'Plataforma de Recetas de Comida',
          description: 'Diseño y desarrollo integral de una plataforma de recetas de comida.',
          link: 'https://github.com/MDPereyra22/piFood',
        },
        // Agrega más proyectos según sea necesario
      ];


    return(
        <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
        <ul>
          {projectsData.map((project, index) => (
            <li key={index} className="mb-4">
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Ver proyecto
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
};

export default Proyects