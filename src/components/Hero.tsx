import React from 'react';
import { ArrowDown } from 'lucide-react';
import photo from "@/assets/photo_2025-08-18_19-15-26.jpg";
interface HeroProps {
  darkMode: boolean;
}

export default function Hero({ darkMode }: HeroProps) {
  const scrollToLottery = () => {
    document.getElementById('lottery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 transform rotate-12 scale-150"></div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Ёш – ҳаётда 
            <span className="text-blue-700"> тўсиқ эмас!</span>
          </h1>
          
          <h2 className={`text-xl md:text-3xl lg:text-4xl font-semibold mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            МеГа Акула билан бўғимларингизни соғлом қилинг
          </h2>

          {/* Story Preview */}
          <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 mb-8 border ${darkMode ? 'border-slate-700' : 'border-white/20'} shadow-xl`}>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-700 to-indigo-700 flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                  97
                </div>
              </div>
              <div className="text-left">
                <h3 className={`text-xl md:text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Академик Ростислав Каримов
                </h3>
                <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} text-lg leading-relaxed`}>
                  97 ёшида ҳам фаол ҳаёт кечираётган таниқли академикнинг соғлом бўғимлар сирлари
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToLottery}
            className="group bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-blue-700/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-3">
              Чегирмада олиш
              <ArrowDown className="w-6 h-6 group-hover:animate-bounce" />
            </span>
          </button>

          {/* Hero Image */}
          <div className="mt-12 relative">
            <div className="relative max-w-2xl mx-auto">
              <img
                src="/photo_2025-08-18_19-15-26.jpg"
                alt="Akula tibbiyoti va sog'lom turmush tarzi"
                class="rounded-2xl shadow-2xl w-[400px] h-auto border-4 border-white/20 mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}