
import React from 'react';

const Hobbies = () => {
  return (
    <div>
      <h1 className="page-title">My Hobbies</h1>
      
      <div className="space-y-8">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Digital Drawing</h2>
          <p className="mb-4">
            I'm passionate about digital art and spend much of my free time creating illustrations and designs on various digital platforms. I enjoy exploring different styles and techniques to expand my artistic abilities.
          </p>
          <div className="h-40 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Digital Art Creations</span>
          </div>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Football</h2>
          <p className="mb-4">
            Football is more than just a sport to me—it's a passion that teaches me teamwork, discipline, and perseverance. I enjoy both playing and watching matches whenever possible.
          </p>
          <div className="h-40 bg-gradient-to-r from-green-500 to-green-700 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Football Activities</span>
          </div>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Computer Programming</h2>
          <p className="mb-4">
            I'm fascinated by the world of coding and software development. I enjoy learning different programming languages and building small projects to improve my skills.
          </p>
          <div className="h-40 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
            <span className="text-white text-lg font-semibold">Coding Projects</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
