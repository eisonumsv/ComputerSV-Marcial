
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };
  
  return (
    <div className="main-layout">
      {/* Header */}
      <header className="bg-bright-yellow text-navy p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Isaac John M. Marcial</h1>
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
      
      {/* Footer */}
      <footer className="bg-bright-yellow text-navy p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Isaac John M. Marcial - 10-TLEICTCP-A - San Beda Alabang</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
