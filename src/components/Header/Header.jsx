import React from "react";
import profileImage from "../../assets/perfil.jpg"

const Header = () => {
    return (
        <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 text-white text-center">
            <div className="flex items-center justify-center mb-4">
                <img
                    src={profileImage}
                    alt="Profile"
                    className="w-40 h-40 rounded-full mr-4"
                />
                <div>
                    <h1 className="text-4xl font-bold">Matías Daniel Pereyra</h1>
                    <p className="text-lg">Full Stack Web Developer</p>
                    
                </div>
            </div>
            <div className="mt-6">
                <a
                    href="https://github.com/MDPereyra22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 mx-2"
                >
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/matipere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-300 mx-2"
                >
                    LinkedIn
                </a>
            </div>
        </header>
    )
}

export default Header;
