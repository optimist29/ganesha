import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div className="flex-1">
            <p className="text-lg font-semibold mb-2">
              &copy; 2025 Pooja. All rights reserved.
            </p>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Made with love for children to learn about Ganesha's sacred forms and educational content for cultural learning and spiritual growth through authentic Hindu traditions
            </p>
          </div>
          
          <div className="flex gap-6">
            <a 
              href="https://www.youtube.com/@kathaswithpooja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 font-semibold transition-colors"
            >
              YouTube
            </a>
            <a 
              href="https://instagram.com/kathaswithpooja/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-orange-400 font-semibold transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;