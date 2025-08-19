import React from 'react';
import { Star, Quote } from 'lucide-react';

interface ReviewsProps {
  darkMode: boolean;
}

export default function Reviews({ darkMode }: ReviewsProps) {
  const reviews = [
    {
      name: "Nigoroy Karimova",
      age: 68,
      location: "Toshkent",
      rating: 5,
      date: "2024-01-15",
      text: "Akula bilan davolanishni boshlabdim va natija ajoyib! 3 oyda og'riqlarim sezilarli darajada kamaydi. Endi ertalab oson turib, kundalik ishlarimni qiyinchiliksiz bajara olaman.",
      avatar: "https://th-thumbnailer.cdn-si-edu.com/uU1atDCFoXSZC_Ek_EAn1we4JiQ=/fit-in/1072x0/https://tf-cmsv2-photocontest-smithsonianmag-prod-approved.s3.amazonaws.com/d06e0c764fb22e8bf51f9993544477d02682690a.JPG"
    },
    {
      name: "Hayrullo Norboev",
      age: 56,
      location: "Samarqand",
      rating: 5,
      date: "2024-01-10",
      text: "48 yoshdan beri bo'g'imlar og'rig'i bilan azob chekardim. Akula ishlatganimdan keyin hayot sifatim yaxshilandi. Hozir nabiram bilan futbol o'ynashga ham qodirman!",
      avatar: "https://photographylife.com/wp-content/uploads/2019/12/Ferghana-Valley-Uzbekistan-30.jpg"
    },
    {
      name: "Malika Rahimova",
      age: 61,
      location: "Buxoro",
      rating: 5,
      date: "2024-01-08",
      text: "Shifokorlar ko'plab dorilar yozishgan edi, lekin hech biri yordam bermadi. Akula esa haqiqatan ishladi! 2 oy ichida og'riqsiz yura bosladim va uyg'oq bo'ldim.",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVjpUoOpM5ObhbQWtwYh7RqK1mWGbYQTcHA&s"
    },
    {
      name: "Abdulla Toshev",
      age: 74,
      location: "Farg'ona",
      rating: 5,
      date: "2024-01-05",
      text: "20 yil davomida bo'g'imlar og'rig'i bilan kurash olib bordim. Akula menga ikkinchi hayot berdi. Hozir bog'imda ishlashga ham quvvatim bor!",
      avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Uzbekistani_old_man_in_2005.jpg/250px-Uzbekistani_old_man_in_2005.jpg"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="reviews" className={`py-16 md:py-20 ${darkMode ? 'bg-slate-800' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Mijozlarimiz fikrlari
          </h2>
          <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-300' : 'text-slate-600'} max-w-3xl mx-auto leading-relaxed`}>
            Minglab odamlar Akula yordamida sog'lom hayotga qaytishdi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`${darkMode ? 'bg-slate-700' : 'bg-white'} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative border ${darkMode ? 'border-slate-600' : 'border-slate-200'}`}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Profile Section */}
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 mr-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-700 shadow-md"
                  />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {review.name}
                  </h3>
                  <p className={`${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {review.age} yosh, {review.location}
                  </p>
                  <div className="flex items-center mt-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className={`${darkMode ? 'text-slate-300' : 'text-slate-700'} leading-relaxed text-base md:text-lg mb-4`}>
                "{review.text}"
              </p>

              {/* Date */}
              <div className="flex justify-between items-center">
                <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {new Date(review.date).toLocaleDateString('uz-UZ', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <div className="flex items-center text-emerald-600">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm font-medium">Tasdiqlangan</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}