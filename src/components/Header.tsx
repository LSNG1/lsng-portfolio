"use client";

import { useState, useEffect } from 'react';
import { MenuIcon } from 'lucide-react';

type HeaderProps = {
  sections: string[];
};

export default function Header({ sections }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('introduction');
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-xl font-bold text-blue-600">LSNG</a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {sections.map((sectionId) => (
                <button
                  key={sectionId}
                  onClick={() => scrollToSection(sectionId)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${activeSection === sectionId ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                >
                  {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue-500 hover:bg-gray-100"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden px-2 pt-2 pb-3">
          {sections.map((sectionId) => (
            <button
              key={sectionId}
              onClick={() => scrollToSection(sectionId)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${activeSection === sectionId ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
            >
              {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
