import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

interface StoryProps {
  darkMode: boolean;
}

export default function Story({ darkMode }: StoryProps) {
  const stories = [
    {
      icon: <Award className="w-8 h-8" />,
      image: "700xNximage2.png",
      title: "Akademik Karimov hikoyasi",
      description: "Karimov R. F. ni 97 yoshga to‘lishi bilan tabriklaymiz. Prezidentning o‘zi tabrikladi. Karimov R. F. ning ish joyidan olingan surat. bo‘g‘imlarni tiklash va umrini uzaytirish usulini batafsil tasvirlab berdi."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      image: "akula.png",
      title: "Uzoq umr ko'rish sirlari",
      description: "Ko'p yillik tadqiqotlar shuni ko'rsatdiki, bo'g'imlarning sog'ligi insonning umumiy hayot sifatiga bevosita ta'sir ko'rsatadi. Akula tabiiy ingredientlar asosida yaratilgan va uzoq muddat foydalanish uchun xavfsizdir."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      image: "700xNximage1.jpg",
      title: "Klinik sinov natijalari",
      description: "Klinik sinovlar davomida 95% bemorlar og'riq sindromining sezilarli darajada kamayishini qayd etishgan. Mahsulot xalqaro sifat standartlariga javob beradi va ko'plab sertifikatlarga ega."
    },
    {
      icon: <Users className="w-8 h-8" />,
      image: "мега крем.png",
      title: "Nima uchun Akula xavfsiz?",
      description: "Akula 100% tabiiy ingredientlardan tayyorlangan. Mahsulot tarkibida kimyoviy qo'shimchalar yo'q. Barcha yoshdagi odamlar uchun mos va uzoq muddat ishlatish mumkin. Yon ta'sirlari yo'q."
    }
  ];

  return (
    <section id="story" className={`py-16 md:py-20 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
           Mega Akula 
          </h2>
          <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
            97 yoshli akademikning sog'lom hayot sirlarini bilib oling va o'zingiz ham sog'lom bo'g'imlarga ega bo'ling
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-4">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
    {stories.map((story, index) => (
      <div
        key={index}
        className={`${
          darkMode ? "bg-slate-700" : "bg-slate-50"
        } rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border ${
          darkMode ? "border-slate-600" : "border-slate-200"
        }`}
      >
        {/* Image */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-3 left-3 bg-blue-700 text-white p-2 rounded-full shadow-lg">
            {React.cloneElement(story.icon, { className: "w-5 h-5" })}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6">
          <h3
            className={`text-lg font-bold mb-3 ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {story.title}
          </h3>
          <p
            className={`${
              darkMode ? "text-slate-300" : "text-slate-600"
            } leading-relaxed text-sm`}
          >
            {story.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}