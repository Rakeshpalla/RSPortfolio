import React, { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' }
  ];

  return (
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700/40" role="banner">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between" role="navigation" aria-label="Primary">
        <a href="#about" className="text-white font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1">
          Rakesh Palla
        </a>

        <button
          className="md:hidden text-slate-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-2 py-1"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          ☰
        </button>

            <ul id="primary-menu" className={`hidden md:flex items-center gap-6 text-slate-200`}>
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1 py-1">
                {item.label}
              </a>
            </li>
          ))}
          <li>
                <a href="#contact" className="ml-2 inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </nav>

          {isOpen && (
            <div className="md:hidden border-t border-slate-700/40 bg-slate-900/95">
              <ul className="max-w-6xl mx-auto px-4 py-3 space-y-2 text-slate-200">
            {navItems.map(item => (
              <li key={item.href}>
                <a href={item.href} className="block py-2 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded px-1">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
                <a href="#contact" className="inline-flex items-center px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;



