
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Code, Laptop, Terminal, GraduationCap } from 'lucide-react';

const Profile = () => {
  return (
    <div className="space-y-8">
      {/* Profile Header with Image */}
      <div className="flex flex-col items-center text-center space-y-6 mb-8">
        <div className="relative">
          <img 
            src="/lovable-uploads/2caffd2b-003b-4571-9b2e-c3608abbf1a4.png" 
            alt="Isaac John M. Marcial" 
            className="h-64 w-64 object-cover rounded-2xl border-4 border-golden-yellow shadow-xl"
          />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-golden-yellow">Isaac John M. Marcial</h1>
          <div className="flex items-center justify-center gap-2 text-soft-white mt-2">
            <Terminal className="w-5 h-5 text-golden-yellow" />
            <span>Student Developer</span>
          </div>
        </div>
      </div>

      {/* Profile Content in Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Personal Details Card */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/15 transition-all">
          <h2 className="text-2xl font-semibold text-golden-yellow mb-4 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Personal Information
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-navy/50 p-3 rounded-lg">
              <span className="text-golden-yellow font-medium w-24">Name:</span>
              <span>Isaac John M. Marcial</span>
            </div>
            
            <div className="flex items-center gap-3 bg-navy/50 p-3 rounded-lg">
              <span className="text-golden-yellow font-medium w-24">School:</span>
              <span>San Beda Alabang</span>
            </div>
            
            <div className="flex items-center gap-3 bg-navy/50 p-3 rounded-lg">
              <span className="text-golden-yellow font-medium w-24">Section:</span>
              <span>10-TLEICTCP-A</span>
            </div>
          </div>
        </div>
        
        {/* Education & Skills Card */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/15 transition-all">
          <h2 className="text-2xl font-semibold text-golden-yellow mb-4 flex items-center gap-2">
            <Laptop className="w-6 h-6" />
            Technical Skills
          </h2>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-golden-yellow"></div>
              <span>Web Development</span>
              <div className="ml-auto bg-golden-yellow/20 rounded-full h-2 w-32">
                <div className="bg-golden-yellow h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-golden-yellow"></div>
              <span>Python Programming</span>
              <div className="ml-auto bg-golden-yellow/20 rounded-full h-2 w-32">
                <div className="bg-golden-yellow h-2 rounded-full w-3/5"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-golden-yellow"></div>
              <span>Digital Art</span>
              <div className="ml-auto bg-golden-yellow/20 rounded-full h-2 w-32">
                <div className="bg-golden-yellow h-2 rounded-full w-4/5"></div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-golden-yellow"></div>
              <span>UI/UX Design</span>
              <div className="ml-auto bg-golden-yellow/20 rounded-full h-2 w-32">
                <div className="bg-golden-yellow h-2 rounded-full w-2/5"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Projects */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/15 transition-all">
          <h2 className="text-2xl font-semibold text-golden-yellow mb-4 flex items-center gap-2">
            <Terminal className="w-6 h-6" />
            Current Projects
          </h2>
          
          <div className="space-y-4">
            <div className="bg-navy/50 p-3 rounded-lg">
              <h3 className="text-golden-yellow font-medium">Portfolio Website</h3>
              <p className="text-sm opacity-80">Personal website showcasing skills and projects</p>
            </div>
            
            <div className="bg-navy/50 p-3 rounded-lg">
              <h3 className="text-golden-yellow font-medium">School Coding Assignments</h3>
              <p className="text-sm opacity-80">Various programming tasks for TLEICTCP-A</p>
            </div>
            
            <div className="bg-navy/50 p-3 rounded-lg">
              <h3 className="text-golden-yellow font-medium">Mobile App Development</h3>
              <p className="text-sm opacity-80">Learning React Native for cross-platform apps</p>
            </div>
          </div>
        </div>
        
        {/* Interests */}
        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10 shadow-lg hover:bg-white/15 transition-all">
          <h2 className="text-2xl font-semibold text-golden-yellow mb-4 flex items-center gap-2">
            <Code className="w-6 h-6" />
            Programming Interests
          </h2>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-navy/50 p-3 rounded-lg text-center hover:bg-navy/70 transition-colors cursor-pointer">
              <p className="font-medium">Web Development</p>
            </div>
            
            <div className="bg-navy/50 p-3 rounded-lg text-center hover:bg-navy/70 transition-colors cursor-pointer">
              <p className="font-medium">Python</p>
            </div>
            
            <div className="bg-navy/50 p-3 rounded-lg text-center hover:bg-navy/70 transition-colors cursor-pointer">
              <p className="font-medium">Mobile Apps</p>
            </div>
            
            <div className="bg-navy/50 p-3 rounded-lg text-center hover:bg-navy/70 transition-colors cursor-pointer">
              <p className="font-medium">Game Dev</p>
            </div>
            
            <div className="bg-navy/50 p-3 rounded-lg text-center hover:bg-navy/70 transition-colors cursor-pointer">
              <p className="font-medium">AI/ML</p>
            </div>
            
            <div className="bg-navy/50 p-3 rounded-lg text-center hover:bg-navy/70 transition-colors cursor-pointer">
              <p className="font-medium">Cloud Computing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
