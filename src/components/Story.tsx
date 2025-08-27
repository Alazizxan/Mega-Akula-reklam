import React from 'react';
import { Award, Heart, Shield, Users } from 'lucide-react';

interface StoryProps {
  darkMode: boolean;
}

export default function Story({ darkMode }: StoryProps) {
  const stories = [
    {
      icon: <Award className="w-10 h-10" />,
      image: "700xNximage2.png",
      title: "Академик Каримов ҳикояси",
      description: "Каримов Р. Ф. ни 97 ёшга тўлиши билан табриклаймиз. Президентнинг ўзи табриклади. Каримов Р. Ф. нинг иш жойидан олинган сурат. бўғимларни тиклаш ва умини узойтириш усулини батафсил тасвирлаб берди."
    },
    {
      icon: <Heart className="w-10 h-10" />,
      image: "akula.png",
      title: "Узоқ умр кўриш сирлари",
      description: "Кўп йиллик тадқиқотлар шуни кўрсаткики, бўғимларнинг согʻлиги инсоннинг умумий ҳаёт сифатига бевосита таъсир кўрсатади. Акула табиий ингредиентлар асосида яратилган ва узоқ муддат фойдаланиш учун хавфсиздир."
    },
    {
      icon: <Shield className="w-10 h-10" />,
      image: "700xNximage1.jpg",
      title: "Клиник синов натижалари",
      description: "Клиник синовлар давомида 95% беморлар оғриқ синдромининг сезиларли даражада камайишини қайд этишган. Маҳсулот халқаро сифат стандартларига жавоб беради ва кўпланб сертификатларга эга."
    },
    {
      icon: <Users className="w-10 h-10" />,
      image: "мега крем.png",
      title: "Нима учун Акула хавфсиз?",
      description: "Акула 100% табиий ингредиентлардан тайёрланган. Маҳсулот таркибида кимёвий қўшимчалар йўқ. Барча ёшдаги одамлар учун мос ва узоқ муддат ишлатиш мумкин. Ён таъсирлари йўқ."
    }
  ];

  return (
    <section id="story" className={`py-20 md:py-24 ${darkMode ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
           Мега Акула 
          </h2>
          <p className={`text-xl md:text-2xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
            97 ёшли академикнинг согʻлом ҳаёт сирларини билиб олинг ва ўзингиз ҳам согʻлом бўғимларга эга бўлинг
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
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
                  <div className="absolute top-4 left-4 bg-blue-700 text-white p-3 rounded-full shadow-lg">
                    {React.cloneElement(story.icon, { className: "w-6 h-6" })}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-7">
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {story.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-slate-300" : "text-slate-600"
                    } leading-relaxed text-base`}
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