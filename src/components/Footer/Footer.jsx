import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github2.png";
import phone from "../../assets/llamada-telefonica.png";
import sobre from "../../assets/sobre.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8 text-center">  
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold mb-4">¡Conectemos!</h3>
        <div className="flex space-x-4 p-4">
          <a href="https://www.linkedin.com/in/matipere/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="w-40 h-auto hover:opacity-40 transition-all duration-300" />
          </a>
          <a href="https://github.com/MDPereyra22" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="w-40 h-auto hover:opacity-40  transition-all duration-300" />
          </a>
          <a href="https://wa.link/fz5i7j" target="_blank" rel="noopener noreferrer">
            <img src={phone} alt="Teléfono" className="w-40 h-auto hover:opacity-40  transition-all duration-300" />
          </a>
          <a href="mailto:pereyra.dmatias@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={sobre} alt="Correo" className="w-40 h-auto hover:opacity-40  transition-all duration-300" />
          </a>
        </div>
        <p className="mt-4">© 2024 Matias Pereyra</p>
      </div>
    </footer>
  );
};

export default Footer;
