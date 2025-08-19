import React from 'react';

interface FooterProps {
  darkMode: boolean;
}

export default function Footer({ darkMode }: FooterProps) {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-slate-800 border-t border-slate-700' : 'bg-slate-100 border-t border-slate-200'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Logo */}
          <div className={`text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Akula
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
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
          </div>
          
          {/* Disclaimer */}
          <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'} mb-6 max-w-2xl mx-auto`}>
            <p className="mb-2">
              Akula - tabiiy bo'g'im sog'lig'ini qo'llab-quvvatlovchi mahsulot. 
              Dori vositasi emas. Foydalanishdan oldin shifokor bilan maslahatlashing.
            </p>
            <p>
              Individual intolerantlik yoki allergik reaktsiyalar bo'lishi mumkin.
            </p>
          </div>
          
          {/* Copyright */}
          <div className={`text-center text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'} border-t ${darkMode ? 'border-slate-700' : 'border-slate-300'} pt-6`}>
            © 2025 Akula. Barcha huquqlar himoyalangan.
          </div>
        </div>
      </div>
    </footer>
  );
}