import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ganeshaForms } from '../data/ganeshaData';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="hero py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="hero-content text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-orange-600 mb-6 font-fredoka">
                Welcome to the World of Ganesha
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                Discover the beautiful forms and inspiring stories of Ganesha from Mudgala Purana through colorful adventures perfect for young minds. Join Pooja on this magical journey to explore ancient wisdom and sacred traditions!
              </p>
              <a 
                href="#gallery" 
                className="inline-block bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Adventure!
              </a>
            </div>
            
            <div className="hero-illustration flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-float">
                  <div className="relative w-full h-full flex items-center justify-center">
                    {/* Animated Emojis */}
                    <span className="absolute text-6xl animate-bounce-jump" style={{top: '20%', left: '30%', animationDelay: '0s'}}>🐘</span>
                    <span className="absolute text-6xl animate-bounce-jump" style={{top: '30%', right: '25%', animationDelay: '0.5s'}}>🕉️</span>
                    <span className="absolute text-6xl animate-bounce-jump" style={{bottom: '30%', left: '25%', animationDelay: '1s'}}>🪔</span>
                    <span className="absolute text-6xl animate-bounce-jump" style={{bottom: '20%', right: '30%', animationDelay: '1.5s'}}>🌸</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-orange-600 mb-4 font-fredoka">
              Choose Your Ganesha Adventure!
            </h2>
            <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Click on any Ganesha form below to learn their amazing stories from the sacred Mudgala Purana!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {ganeshaForms.map((form) => (
                <div 
                  key={form.id}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                  onClick={() => window.location.href = `/ganesha/${form.id}`}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-white group-hover:animate-pulse">
                    ॐ
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-fredoka">
                    {form.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {form.tagline}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube Section */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-4 font-fredoka">
              Watch More Stories!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Don't miss out on amazing stories and adventures on our YouTube channel!
            </p>
            <a 
              href="https://www.youtube.com/@kathaswithpooja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Watch More & Subscribe on YouTube!
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;