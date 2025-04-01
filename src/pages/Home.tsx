
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1 className="page-title">Welcome to My Portfolio</h1>
      <div className="space-y-6">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Hello there!</h2>
          <p className="text-lg">
            I'm Isaac John M. Marcial, a student at San Beda Alabang. Welcome to my personal website
            where you can learn more about me, my interests, and my aspirations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-bright-yellow mb-2">Class Section</h3>
            <p>10-TLEICTCP-A</p>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-bright-yellow mb-2">School</h3>
            <p>San Beda Alabang</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
