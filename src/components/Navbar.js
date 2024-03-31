import React, { useState } from 'react';
import Mepic from '../image/Mepic.png';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className="header-2 shadow-2xl shadow-indigo-200">
                <nav className="bg-white py-2 md:py-4">
                    <div className="container px-4 mx-auto md:flex md:items-center">
                        <div className="flex justify-between items-center">
                            <NavLink to="/" className="font-bold flex text-3xl text-indigo-600">
                                <img src={Mepic} alt="icon" class="h-10 mr-2" />
                                HiteshDevs
                            </NavLink>
                            <button onClick={toggleNavbar} className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </button>
                        </div>

                        {/* Conditionally render navbar items based on isOpen state */}
                        <div className={`md:flex md:ml-auto mt-3 md:mt-0 ${isOpen ? 'block' : 'hidden'}`} id="navbar-collapse">
                            <NavLink to="/about" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:rounded-sm hover:shadow-2xl hover:shadow-indigo-200">About Me</NavLink>
                            <NavLink to="/experience" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:rounded-sm hover:shadow-2xl hover:shadow-indigo-200">Experience</NavLink>
                            <NavLink to="/projects" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:rounded-sm hover:shadow-2xl hover:shadow-indigo-200">Projects</NavLink>
                            <NavLink to="/blog" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:rounded-sm hover:shadow-2xl hover:shadow-indigo-200">Blog</NavLink>
                            <NavLink to="/contact" className="block px-4 py-2 text-gray-600 hover:bg-indigo-100 hover:rounded-sm">Contact</NavLink>
                            <button to="/" class="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-600 rounded hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Download Resume</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
