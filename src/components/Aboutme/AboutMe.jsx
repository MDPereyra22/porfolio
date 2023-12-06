// src/components/AboutMe.jsx
import React from 'react';
import profileImage from '../../assets/rojo.jpg';

const AboutMe = () => {
  return (
    <section className=" bg-gradient-to-r from-amber-300 via-amber-200 to-amber-100 text-white p-8 shadow-md">
      <div className="flex items-center ">
        <img src={profileImage} alt="Mi imagen" className=" w-60  mr-10" />
        <div>
          <h2 className="text-3xl font-bold mb-2 text-black p-2">Acerca de Mí</h2>
          <p className="text-left text-black p-2">
            Soy Matías, un desarrollador Full Stack.
            Soy una persona enérgica, imaginativa, optimista, comprometida, resolutiva y detallista. Poseo una gran capacidad de liderazgo, comunicación eficaz, colaboración en equipo, planificación y organización.
            Decidí adentrarme en el mundo del desarrollo Full Stack en Henry, impulsado por mi profundo interés en el avance tecnológico y en cómo la programación puede dar vida a proyectos educativos innovadores.
          </p>
          <p className="text-left text-black p-2">
            En mi recorrido, he desempeñado roles como auxiliar docente y profesor de computación, experiencias que me permitieron observar de primera mano lo necesario de una transformación tecnológica en la educación.
            Esta visión me motivó a expandir mis habilidades y sumergirme de lleno en el universo del desarrollo Full Stack. Ahora, anhelo aplicar mis conocimientos técnicos para crear soluciones web innovadoras que revolucionen la manera en que aprendemos y nos comunicamos.
          </p>
          <p className="text-left text-black p-2">
            Busco la oportunidad idónea para exhibir mis habilidades, contribuir con mis conocimientos a un equipo y, sobre todo, continuar mi aprendizaje mientras impulso mi trayectoria como desarrollador de software.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
