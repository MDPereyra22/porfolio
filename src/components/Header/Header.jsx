import React from "react";

const Header = () => {
    return (
        <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-8 text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Matias Pereyra</h1>
            <p className="text-lg">Full Stack Web Developer</p>
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
        </div>
    )
}

export default Header;
