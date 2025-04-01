
import React from 'react';

const Profile = () => {
  return (
    <div>
      <h1 className="page-title">My Profile</h1>
      
      <div className="space-y-6">
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Personal Information</h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold text-bright-yellow">Name</h3>
                <p>Isaac John M. Marcial</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-bright-yellow">School</h3>
                <p>San Beda Alabang</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-bright-yellow">Class Section</h3>
              <p>10-TLEICTCP-A</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Education</h2>
          <p>
            Currently a student at San Beda Alabang, focusing on advancing my skills in technology and arts.
          </p>
        </div>
        
        <div className="bg-white/10 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-bright-yellow mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Digital Art</li>
            <li>Computer Programming</li>
            <li>Football</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
