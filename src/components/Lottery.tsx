import React, { useState } from 'react';
import { Gift, X, Phone, User } from 'lucide-react';

interface LotteryProps {
  darkMode: boolean;
}

interface FormData {
  name: string;
  phone: string;
}

export default function Lottery({ darkMode }: LotteryProps) {
  const [selectedBox, setSelectedBox] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const giftBoxes = [
    { id: 1, color: 'from-red-500 to-pink-600', delay: '0s' },
    { id: 2, color: 'from-blue-500 to-purple-600', delay: '0.2s' },
    { id: 3, color: 'from-green-500 to-teal-600', delay: '0.4s' }
  ];

  const handleBoxClick = (boxId: number) => {
    if (selectedBox !== null) return;
    
    setSelectedBox(boxId);
    setTimeout(() => {
      setShowModal(true);
    }, 1000);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    
    try {
      // API simulyatsiya
      await new Promise(resolve => setTimeout(resolve, 1500));
      setShowModal(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setSelectedBox(null);
        setFormData({ name: '', phone: '' });
      }, 4000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="lottery" className={`py-16 md:py-20 ${darkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 to-blue-50'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Chegirmangizni yutib oling!
            </h2>
            <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-2xl mx-auto leading-relaxed`}>
              Bitta sovg'a qutisini tanlab, o'zingizga chegirmani qo'lga kiriting
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {giftBoxes.map((box) => (
              <div
                key={box.id}
                onClick={() => handleBoxClick(box.id)}
                className={`relative cursor-pointer transform transition-all duration-500 hover:scale-110 ${
                  selectedBox === box.id ? 'scale-125 animate-pulse' : ''
                } ${selectedBox !== null && selectedBox !== box.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{ animationDelay: box.delay }}
              >
                <div className={`w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-gradient-to-br ${box.color} rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden group border-2 border-white/20`}>
                  {selectedBox === box.id && (
                    <div className="absolute inset-0 bg-white/20 animate-ping rounded-2xl"></div>
                  )}
                  <Gift className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white drop-shadow-lg group-hover:animate-bounce" />
                  <div className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 bg-amber-400 rounded-full animate-ping"></div>
                </div>
                
                {selectedBox === box.id && (
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-amber-400 text-slate-900 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold animate-bounce shadow-lg">
                    🎉 100% chegirma!
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Tabrik blok faqat modal yopilgandan keyin chiqadi */}
          {selectedBox && !showModal && (
            <div className="text-center mt-12">
              <button
                onClick={handleShowModal}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-semibold shadow-lg hover:scale-105 transform transition-all duration-300"
              >
                🎉 100% Chegirmani Olish!
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50  p-10">
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-sm w-full mx-4 overflow-hidden border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            {/* Header */}
            <div className="relative bg-gradient-to-r from-blue-700 to-indigo-700 p-4 text-white">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors duration-200 p-1"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-1">🎉 Tabriklaymiz!</h3>
                <p className="text-sm">Siz 100% chegirma yutdingiz!</p>
              </div>
            </div>

            {/* Product Display */}
            <div className="p-0 text-center border-b border-slate-200">
              <div className="relative inline-block">
                <img
                  src="/мега крем.png"
                  alt="Akula mahsuloti"
                  className="w-20 h-25 object-cover rounded-lg mx-auto mb-2"
                />
                <div className="absolute -top-1 -right-16 bg-red-600 text-white text-xs px-2 py-1 rounded-full font-bold shadow-lg">
                  Krem 0 so'm!
                </div>
              </div>
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'} text-xs mt-2`}>
                To'liq komplekt yarim narxda!
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 space-y-3">
              <div>
                <label className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Ismingiz
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-colors duration-200 text-sm ${
                      darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                    placeholder="Ismingizni kiriting"
                    required
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-medium mb-1 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Telefon raqamingiz
                </label>
                <div className="relative">
                  <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`} />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={`w-full pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-700 focus:border-blue-700 transition-colors duration-200 text-sm ${
                      darkMode ? 'bg-slate-700 border-slate-600 text-white' : 'bg-white border-slate-300 text-slate-900'
                    }`}
                    placeholder="+998 90 123 45 67"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-2 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? 'Yuborilmoqda...' : 'Yuborish'}
              </button>

              <p className={`text-xs text-center ${darkMode ? 'text-slate-400' : 'text-slate-500'} leading-tight`}>
                Ma'lumotlaringiz xavfsiz saqlanadi va uchinchi shaxslarga berilmaydi
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className={`${darkMode ? 'bg-slate-800' : 'bg-white'} rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center border ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}>
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              ✅ Tabriklaymiz!
            </h3>
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Ma'lumotlaringiz qabul qilindi! Tez orada operator siz bilan bog'lanadi.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
