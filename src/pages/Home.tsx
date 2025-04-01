
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code, Terminal, Laptop } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <Avatar className="h-32 w-32 border-4 border-bright-yellow shadow-lg">
          <AvatarImage src="/placeholder.svg" alt="Isaac John M. Marcial" />
          <AvatarFallback className="text-2xl bg-navy text-bright-yellow">IM</AvatarFallback>
        </Avatar>
        
        <h1 className="page-title text-4xl md:text-5xl font-bold">Isaac John M. Marcial</h1>
        
        <div className="flex items-center gap-2 text-golden-yellow">
          <Terminal className="w-5 h-5" />
          <span className="font-mono">Student Developer</span>
        </div>
        
        <p className="text-lg max-w-2xl mx-auto leading-relaxed">
          Welcome to my personal website showcasing my journey as a student developer at San Beda Alabang.
          Explore my projects, skills, and interests in the world of computer programming.
        </p>
        
        <div className="flex gap-4 mt-4">
          <div className="bg-white/10 p-4 rounded-lg flex items-center gap-2">
            <Code className="text-golden-yellow w-5 h-5" />
            <span>Programming</span>
          </div>
          <div className="bg-white/10 p-4 rounded-lg flex items-center gap-2">
            <Laptop className="text-golden-yellow w-5 h-5" />
            <span>10-TLEICTCP-A</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
          <h2 className="text-xl font-semibold text-golden-yellow mb-3">Technical Skills</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              Web Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              Python Programming
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              UI/UX Design
            </li>
          </ul>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
          <h2 className="text-xl font-semibold text-golden-yellow mb-3">Current Projects</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              Portfolio Website
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              School Coding Assignments
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              Mobile App Development
            </li>
          </ul>
        </div>
        
        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl hover:bg-white/10 transition-all border border-white/10">
          <h2 className="text-xl font-semibold text-golden-yellow mb-3">Learning Goals</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              Full Stack Development
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              Machine Learning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-golden-yellow"></span>
              Cloud Computing
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
