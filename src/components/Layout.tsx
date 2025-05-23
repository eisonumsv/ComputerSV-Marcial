
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Code } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <div className="main-layout">
      {/* Header - 20% darker blue */}
      <header className="bg-darker-navy text-golden-yellow p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Isaac John M. Marcial</h1>
          </div>
          <nav className="flex flex-wrap gap-2">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/profile" className={`nav-link ${isActive('/profile')}`}>Profile</Link>
            <Link to="/hobbies" className={`nav-link ${isActive('/hobbies')}`}>Hobbies</Link>
            <Link to="/about" className={`nav-link ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
          </nav>
        </div>
      </header>
      
      {/* Main content */}
      <main className="main-content">
        <div className="window w-full max-w-4xl mx-auto">
          <div className="window-header">
            <span>Isaac's {location.pathname.replace('/', '') || 'Home'} Page</span>
            <div className="window-buttons">
              <span className="window-button window-button-close"></span>
              <span className="window-button window-button-minimize"></span>
              <span className="window-button window-button-maximize"></span>
            </div>
          </div>
          <div className="window-content">
            {children}
          </div>
        </div>
      </main>
      
      {/* Footer - 20% darker blue */}
      <footer className="bg-darker-navy text-golden-yellow p-4 mt-8 shadow-md">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Isaac John M. Marcial - 10-TLEICTCP-A - San Beda Alabang</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
