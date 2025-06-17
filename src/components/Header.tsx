import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex flex-col">
            <h1 className="text-2xl md:text-3xl font-bold text-orange-600 font-fredoka">
              Kathas with Pooja
            </h1>
            <span className="text-sm font-semibold text-amber-700">
              32 Forms of Ganesha
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/#gallery" 
              className="text-gray-700 hover:text-orange-600 font-semibold transition-colors"
            >
              Gallery
            </Link>
            <a 
              href="https://www.youtube.com/@kathaswithpooja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300"
            >
              YouTube Channel
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;