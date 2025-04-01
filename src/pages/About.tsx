
import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="page-title">About Me</h1>
      
      <div className="space-y-6">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Who I Am</h2>
          <p className="text-lg">
            A young aspiring teenager with a passion for creativity and technology. I enjoy digital drawing, 
            playing football, and exploring the world of computer programming. Constantly seeking to learn and 
            improve, I aim to develop innovative skills that will help me grow in both artistic and technical fields.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-bright-yellow mb-3">My Journey</h3>
            <p>
              My interest in technology began at an early age when I was first introduced to computers. 
              Since then, I've been fascinated by how technology works and how it can be used to create 
              amazing things. Alongside my technical pursuits, I've also nurtured my creative side through 
              digital art and design.
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-bright-yellow mb-3">Goals & Aspirations</h3>
            <p>
              I aspire to combine my technical knowledge with my artistic abilities to create innovative 
              solutions that blend both worlds. My goal is to continue learning and developing skills that 
              will prepare me for a career in technology while maintaining my creative pursuits.
            </p>
          </div>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-bright-yellow mb-3">Education</h3>
          <p>
            Currently a student at San Beda Alabang in class 10-TLEICTCP-A, I'm focusing on both academic 
            excellence and extracurricular activities to ensure a well-rounded education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
