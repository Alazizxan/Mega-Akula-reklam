import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg border-b ${darkMode ? 'border-slate-700' : 'border-gray-100'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} transition-colors duration-300`}>
            MeGa Akula
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#hero" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors duration-300 font-medium`}>
              Bosh sahifa
            </a>
            <a href="#story" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors duration-300 font-medium`}>
              Hikoya
            </a>
            <a href="#lottery" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors duration-300 font-medium`}>
              Chegirma
            </a>
            <a href="#reviews" className={`${darkMode ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'} transition-colors duration-300 font-medium`}>
              Fikrlar
            </a>
          </nav>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-slate-800 text-amber-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-all duration-300 ${darkMode ? 'text-white hover:bg-slate-800' : 'text-slate-900 hover:bg-slate-100'}`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-all duration-300 ${darkMode ? 'border-slate-700 bg-slate-900' : 'border-slate-200 bg-white'}`}>
            <nav className="flex flex-col space-y-2">
              <a href="#hero" className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`} onClick={() => setIsMenuOpen(false)}>
                Bosh sahifa
              </a>
              <a href="#story" className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`} onClick={() => setIsMenuOpen(false)}>
                Hikoya
              </a>
              <a href="#lottery" className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`} onClick={() => setIsMenuOpen(false)}>
                Chegirma
              </a>
              <a href="#reviews" className={`px-4 py-2 rounded-lg transition-colors duration-300 font-medium ${darkMode ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'}`} onClick={() => setIsMenuOpen(false)}>
                Fikrlar
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}