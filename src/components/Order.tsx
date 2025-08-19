import React from 'react';
import { CheckCircle, Phone, Truck, Clock } from 'lucide-react';

interface OrderProps {
  darkMode: boolean;
}

export default function Order({ darkMode }: OrderProps) {
  const scrollToLottery = () => {
    document.getElementById('lottery')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Lotereyada ishtirok eting",
      description: "Sovg'a qutisini tanlab chegirma yuting"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Ariza to'ldiring",
      description: "Ism va telefon raqamingizni qoldiring"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Menejer bog'lanadi",
      description: "Mutaxassis siz bilan bog'lanib ma'lumot beradi"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "1-4 kunda yetkazib berish",
      description: "Mahsulot uyingizgacha yetkazib beriladi"
    }
  ];

  return (
    <section id="order" className={`py-16 md:py-20 ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Flexoderil (Akula) ni olish
          </h2>
          <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
            Sog'lom bo'g'imlarga ega bo'lish uchun oddiy 4 bosqich
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-700 to-indigo-700 text-white mb-6 relative shadow-lg`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 text-slate-900 rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {step.title}
              </h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} leading-relaxed text-sm md:text-base`}>
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl p-6 md:p-12 shadow-xl max-w-4xl mx-auto mb-12 border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                100% Tabiiy
              </h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} text-sm md:text-base`}>
                Kimyoviy qo'shimchalarsiz
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Tez ta'sir
              </h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} text-sm md:text-base`}>
                Birinchi haftayoq natija
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-lg md:text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Tekin yetkazib berish
              </h3>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} text-sm md:text-base`}>
                Butun O'zbekiston bo'ylab
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={scrollToLottery}
            className="group bg-gradient-to-r from-emerald-600 to-blue-700 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl font-bold rounded-full shadow-2xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
          >
            <span className="flex items-center justify-center gap-3">
              Hozir buyurtma qiling
              <CheckCircle className="w-6 h-6 group-hover:animate-pulse" />
            </span>
          </button>
          
          <p className={`mt-4 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            Chegirma cheklangan vaqt uchun amal qiladi
          </p>
        </div>
      </div>
    </section>
  );
}