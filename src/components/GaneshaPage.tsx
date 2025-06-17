import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ganeshaForms } from '../data/ganeshaData';

const GaneshaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const form = ganeshaForms.find(f => f.id === parseInt(id || '1'));

  if (!form) {
    return <div>Form not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <Header />
      
      <main className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <Link 
            to="/" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mb-8 transform hover:scale-105 transition-all duration-300"
          >
            ← Back to Gallery
          </Link>
          
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-center py-12 rounded-2xl mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-fredoka">
              {form.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold opacity-90">
              {form.tagline}
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Illustration */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl aspect-square flex items-center justify-center relative overflow-hidden">
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Animated Emojis */}
                <span className="absolute text-4xl animate-bounce-jump" style={{top: '20%', left: '30%', animationDelay: '0s'}}>🐘</span>
                <span className="absolute text-4xl animate-bounce-jump" style={{top: '30%', right: '25%', animationDelay: '0.5s'}}>🕉️</span>
                <span className="absolute text-4xl animate-bounce-jump" style={{bottom: '30%', left: '25%', animationDelay: '1s'}}>🪔</span>
                <span className="absolute text-4xl animate-bounce-jump" style={{bottom: '20%', right: '30%', animationDelay: '1.5s'}}>🌸</span>
              </div>
            </div>
            
            {/* Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-orange-600 mb-6 font-fredoka">
                Story Time with Pooja
              </h2>
              <div className="prose prose-lg text-gray-700">
                {form.story.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center font-fredoka">
              Watch the Story!
            </h2>
            <div className="aspect-video mb-6 rounded-xl overflow-hidden">
              <iframe 
                src={`https://www.youtube.com/embed/${form.videoId}`}
                title={`${form.name} Story - Kathas with Pooja`}
                className="w-full h-full"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <a 
                href="https://www.youtube.com/@kathaswithpooja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transform hover:scale-105 transition-all duration-300"
              >
                Watch More & Subscribe on YouTube!
              </a>
            </div>
          </div>

          {/* Learn More Section */}
          <div className="bg-orange-50 rounded-2xl p-8 mb-8">
            <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center font-fredoka">
              Let's Learn More!
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Sacred Mantra</h3>
                <p className="text-lg text-amber-800 font-semibold italic leading-relaxed">
                  "{form.mantra}"
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-orange-600 mb-4">Meaning</h3>
                <p className="text-gray-700 leading-relaxed">
                  {form.meaning}
                </p>
              </div>
            </div>
          </div>

          {/* More Adventures */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-fredoka">
              Discover More Amazing Stories!
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Ready for more adventures? Explore the other {32 - form.id} forms of Ganesha!
            </p>
            <Link 
              to="/"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300"
            >
              Explore More Forms
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GaneshaPage;