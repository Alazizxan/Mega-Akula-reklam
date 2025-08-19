import React from "react";
import {
  ArrowDown,
  Stethoscope,
  ShieldCheck,
  FlaskConical,
  Pill,
} from "lucide-react";

interface MedHeroProps {
  darkMode: boolean;
}

export default function MedHero({ darkMode }: MedHeroProps) {
  const scrollToLottery = () => {
    document.getElementById("lottery")?.scrollIntoView({ behavior: "smooth" });
  };

  const text = {
    headline: (
      <>
        Bo‘g‘im sog‘lig‘i — {" "}
        <span className="text-blue-700">mutaxassislar yondashuvi</span>
      </>
    ),
    sub: "Mega Akula: bo‘g‘imlar uchun klinik asosli parvarish konsepsiyasi",
    lead:
      "Quyida keltirilgan ma’lumotlar profilaktik parvarish, kundalik gigiyena va hayot tarzi bo‘yicha tavsiyalarni o‘z ichiga oladi. Har qanday qo‘llashdan avval shifokoringiz bilan maslahatlashing.",
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="hero-med"
        className={`relative overflow-hidden ${
          darkMode
            ? "bg-slate-900"
            : "bg-gradient-to-br from-slate-50 to-blue-50"
        }`}
      >
        {/* Background Accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-blue-700 to-indigo-700" />
          <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-600 to-blue-700" />
        </div>

        <div className="container mx-auto px-4 pt-20 pb-14 relative z-10 max-w-4xl text-center">
          {/* Header */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 mb-4 mx-auto">
            <Stethoscope className="w-4 h-4 text-blue-700" />
            <span
              className={`text-xs font-semibold tracking-wide ${
                darkMode ? "text-blue-200" : "text-blue-700"
              }`}
            >
              Klinik izoh
            </span>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {text.headline}
          </h1>

          <p
            className={`mt-4 text-xl md:text-2xl font-semibold ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {text.sub}
          </p>

          <p
            className={`mt-6 text-base md:text-lg leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {text.lead}
          </p>

          {/* Quick badges */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/50 backdrop-blur border border-slate-200 shadow-sm dark:bg-slate-800/50 dark:border-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span
                className={`text-sm ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Parvarish va profilaktikaga mos
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/50 backdrop-blur border border-slate-200 shadow-sm dark:bg-slate-800/50 dark:border-slate-700">
              <FlaskConical className="w-4 h-4 text-indigo-600" />
              <span
                className={`text-sm ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Tahliliy yondashuv
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/50 backdrop-blur border border-slate-200 shadow-sm dark:bg-slate-800/50 dark:border-slate-700">
              <Pill className="w-4 h-4 text-blue-600" />
              <span
                className={`text-sm ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Individual natijalar farq qiladi
              </span>
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={scrollToLottery}
            className="group mt-8 bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full shadow-2xl hover:shadow-blue-700/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2 justify-center">
              Chegirmada olish
              <ArrowDown className="w-5 h-5 group-hover:animate-bounce" />
            </span>
          </button>
        </div>
      </section>

      {/* Info Section */}
      <section
        className={`relative py-16 px-6 md:px-12 ${
          darkMode ? "bg-slate-950 text-slate-200" : "bg-white text-slate-800"
        }`}
      >
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue dark:prose-invert text-center">
          <h2 className="text-3xl font-bold mb-6">
            Bo‘g‘imlarning shikastlanishi qanday patologiyalarga olib keladi?
          </h2>
          <p>
            Avval aytganimdek, butun tana bundan aziyat chekadi. Ammo, albatta,
            harakat bilan bevosita bog‘liq bo‘lgan organlar va tizimlar – ya’ni
            tayanch-harakat tizimining o‘zi birinchi navbatda aziyat chekadi.
          </p>
          <p>
            Suyaklar va bo‘g‘imlardagi yallig‘lanish. Uzoq vaqt davomida shikastlanishda bo‘g‘imlarda suyuqlik to‘planishi mumkin, bu esa to‘qimalarning butunlay nobud bo‘lishiga olib keladi, o‘z navbatida bu muayyan organlardagi alohida hujayralarning nobud bo‘lishiga olib kelishi mumkin.
          </p>
          <p>
            Va xuddi shu narsa hamma joyda sodir bo‘ladi! Revmatik kasalliklardan o‘lgan odamlar soni boshqa sabablaridan o‘lgan odamlar sonidan 4 baravar ko‘p. Shifokorlar buni bilishadi, bo‘g‘imlarni tiklash kerakligini bilishadi, lekin qandaydir sabab bilan bu amaliyot O‘zbekiston tibbiyotida yo‘q. Ko‘pgina shifokorlar artritda og‘riqni kamaytirish uchun tabletkalar yozib berishadi. Ammo ular davolamaydi, vaqtinchalik effekt beradi. Ammo bo‘g‘imlarni tiklash kerak.
          </p>

          <h3 className="mt-8 font-semibold">Bo‘g‘imlarning shikastlanishi quyidagi kasalliklarga sabab bo‘ladi:</h3>
          <ul className="list-disc pl-6 space-y-2 text-left inline-block">
            <li><b>Artrit.</b> Bo‘g‘imlarda yallig‘lanish paydo bo‘ladi...</li>
            <li><b>Osteoartrit.</b> Bo‘g‘imlarning doimiy yemirilishi...</li>
            <li><b>Osteoxondroz.</b> Suyak to‘qimalariga qon oqimi...</li>
            <li><b>Revmatizm.</b> Shikastlanish tufayli og‘riq kuchayadi.</li>
            <li><b>Podagra.</b> Oyoqlarda va ichki qismda paydo bo‘ladi...</li>
            <li><b>Suyaklar va bo‘g‘imlardagi yallig‘lanish.</b> Suyuqlik
              to‘planishi natijasida to‘qimalar nobud bo‘lishi mumkin.</li>
          </ul>

          <h3 className="mt-8 font-semibold">Shikastlanish belgilariga quyidagilar kiradi:</h3>
          <ul className="list-disc pl-6 space-y-2 text-left inline-block">
            <li>Bo‘g‘imlardagi og‘riq</li>
            <li>Harakatning buzilishi</li>
            <li>Surunkali charchoq</li>
            <li>Uyqusizlik</li>
            <li>Oyoq va qo‘llardagi noqulaylik</li>
            <li>Ko‘rish va eshitishning yomonlashishi</li>
            <li>Oyoqlardagi shish</li>
            <li>Nafas qisilishi va stenokardiya</li>
            <li>Mushak va bo‘g‘imlardagi og‘riqlar</li>
          </ul>

          <h3 className="mt-8 font-semibold">Mega Akula haqida</h3>
          <p>
            “Mega Akula” — bo‘g‘imlarni tiklash uchun yaratilgan tabiiy vosita
            bo‘lib, 1–2 hafta ichida hatto shikastlangan bo‘g‘imlarni ham
            tiklash imkonini beradi. Kimyoviy moddalar yo‘q, faqat o‘simlik
            ekstraktlari mavjud.
          </p>
          <p className="mt-2">
            Bu belgilar sizga xos bo‘lsa ham, bo‘lmasa ham, 30 yoshdan keyin hech bo‘lmaganda har 5 yilda bir marta bo‘g‘imlarni tiklab turish kerak. Bu holda sizning sog‘lig‘ingiz haqiqatan ham qahramonona bo‘ladi. Aslida, bo‘g‘imlar juda tez, ayniqsa keksalarda yemiriladi. Buning uchun kun bo‘yi burger va kartoshka fri yeyish shart emas. Bo‘g‘imlarda ma’lum miqdordagi tuzlar to‘planishi uchun oddiy ovqat yeyish kifoya. Vaqt o‘tishi bilan shikastlanishlar to‘planib boradi.
          </p>

          <p className="mt-3">
            Mega Akula muntazam foydalanilganda 1–2 hafta ichida hatto juda shikastlangan bo‘g‘imlarni ham tiklash imkonini beradigan juda yaxshi vosita. Shuni ham ta’kidlamoqchimanki, bu mahsulot tarkibida kimyoviy moddalar mavjud emas, faqat bo‘g‘imlarni tiklash uchun foydali o‘simliklarning juda kontsentratsiyalangan ekstraktlari bor, shuning uchun u nafaqat organizmga zararli emas, balki juda foydali hamdir. Menga eski bemorlar hali ham bo‘g‘imlarni tiklash masalasida murojaat qilishadi. Oxirgi paytlarda men faqat shu vositani tavsiya qilaman. U hammaga yordam beradi va juda yaxshi. Revmatizm instituti saytida klinik sinovlar natijalaridan olingan bo‘g‘imlarni tiklash bo‘yicha rasmiy statistika mavjud. Jami 2000 ga yaqin bemorlar tadqiqotda ishtirok etishdi. Hammalari Mega Akula bilan davolanishdi.
          </p>

          <h3 className="mt-8 font-semibold">Klinik tadqiqot natijalari:</h3>
          <ul className="list-disc pl-6 space-y-2 text-left inline-block">
            <li>Og‘riqning kamayishi – 99%</li>
            <li>Harakatchanlikning normallashuvi – 97%</li>
            <li>Tuzlardan va shishlardan tozalanish – 99%</li>
            <li>Surunkali kasalliklarni davolash samaradorligi – 99%</li>
            <li>Umumiy sog‘liq yaxshilanishi – 100%</li>
            <li>Yon ta’sirlar yo‘qligi – 100%</li>
          </ul>

          <h3 className="mt-8 font-semibold">Mega Akulani qanday olish mumkin?</h3>
          <ol className="list-decimal pl-6 space-y-2 text-left inline-block">
            <li>Quyidagi lotereyada ishtirok eting.</li>
            <li>Ariza shaklini to‘ldiring.</li>
            <li>Menejer siz bilan bog‘lanadi.</li>
            <li>1–4 kunda yetkazib beriladi.</li>
          </ol>
          <h2 className="text-3xl font-bold mt-4 mb-6">
            Mega Akula
          </h2>
          <p>
            Rostislav Filipovichning ta’kidlashicha, uzoq umr ko‘rishning siri sog‘lom bo‘g‘imlarda. Agar ular mustahkam va sog‘lom bo‘lsa, 120 yil va undan ham ko‘proq yashash mumkin, o‘zini mutlaqo sog‘lom his qiladi. Sobiq revmatolog o‘z da’volarini tasdiqlaydi.
          </p>
          <p className="mt-3">
            Muxbirimiz yuz yoshli inson bilan suhbat qurishga muvaffaq bo‘ldi. Karimov R. F. bo‘g‘imlarni tiklash va umrini uzaytirish usulini batafsil tasvirlab berdi.

— Rostislav Filipovich, siz sog‘lom bo‘g‘imlar mustahkam sog‘liq asosi ekanligini ko‘p marta ta’kidlagansiz. Nega bunday deb o‘ylaysiz?

Bu oddiy. Barcha ichki organlar va tizimlarning ishlashi bo‘g‘imlarning holatiga bog‘liq. Bo‘g‘imlarning harakatchanligi – bu erkin va og‘riqsiz harakatlanish, hayotdan to‘liq zavq olishdir. Bolalik, o‘smirlik va yosh­lik davrida biz juda ko‘p harakat qilamiz, bo‘g‘imlarimiz yangi, elastik va sog‘lom – barcha harakatlar maksimal darajada bo‘ladi. Ammo yosh o‘tgan sari biz kamroq harakat qilamiz va bo‘g‘imlarimiz yemirila boshlaydi. Bu turli omillar – nafaqat zararli (masalan, noto‘g‘ri ovqatlanish, ekologiya, o‘troq turmush tarzi), balki butunlay tabiiy (masalan, har bir insonga ta’sir qiluvchi tuzlarning to‘planishi) tufayli sodir bo‘ladi.

Shikastlangan bo‘g‘imlar nima? Bu zang bilan to‘lgan mexanizmlarga o‘xshaydi. Natijada nima sodir bo‘ladi? Natijada harakatlanish og‘irlashadi va og‘riq paydo bo‘ladi. Bo‘g‘imlar bilan ham xuddi shunday hodisa ro‘y beradi. Ularda tuzlar yoki boshqa moddalar to‘planganda, shish paydo bo‘ladi va og‘riq kuchayadi. Natijada, barcha organlar va tizimlar aziyat chekadi, chunki harakat cheklanadi.

Natijada, inson qarishni boshlaydi. Agar siz bo‘g‘imlarni muntazam ravishda tiklab tursangiz, 120 yilgacha yashashingiz mumkin. Va shu bilan birga, hech narsa og‘rimaydi – bironta ham suyak yoki bo‘g‘im, va miyangiz yaxshi ishlaydi. Bu shuni anglatadiki, bo‘g‘imlarni tiklash orqali siz hayotingizni va sog‘lig‘ingizni sezilarli darajada uzaytirishingiz mumkin. Va bu nafaqat nazariya. Bir vaqtlar men buni o‘z bemorlarimga tavsiya qilgan edim, endi esa o‘zim ham shunday qilaman. O‘shanda mening maslahatmga quloq solgan barcha odamlar o‘z tengdoshlaridan uzoq umr ko‘rishdi.
          </p>
         

          <p className="mt-3">
            Aytgancha, AQSh va Kanadada buni har 35–40 yoshdan oshgan odam yarim
            asrdan ko‘proq vaqt davomida qilib keladi. Ya’ni, u yerda bo‘g‘imlarni tiklash haqida
            hamma narsani bilishadi. Nega bizda bunday emasligi men uchun katta savol bo‘lib qolmoqda.
          </p>

          <p className="mt-8 font-semibold text-center">
            Sog‘lom bo‘g‘imlar – sog‘liq kalitidir. ✅
          </p>
        </div>
      </section>
    </>
  );
}
