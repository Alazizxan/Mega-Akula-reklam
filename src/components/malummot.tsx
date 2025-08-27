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
        Бўғим согʻлиғи — {" "}
        <span className="text-blue-700">мутахассислар ёндашуви</span>
      </>
    ),
    sub: "Мега Акула: бўғимлар учун клиник асосли парвариш концепцияси",
    lead:
      "Қуйда келтирилган маьлумотлар профилактик парвариш, кундалик гигиена ва ҳаёт тарзи бўйича тавсияларни ўз ичига олади. Ҳар қандай қўллашдан аввал шифокорингиз билан масаҳатлашингиз.",
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
              Клиник изоҳ
            </span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            {text.headline}
          </h1>

          <p
            className={`mt-6 text-2xl md:text-3xl font-semibold ${
              darkMode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            {text.sub}
          </p>

          <p
            className={`mt-8 text-lg md:text-xl leading-relaxed ${
              darkMode ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {text.lead}
          </p>

          {/* Quick badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/50 backdrop-blur border border-slate-200 shadow-sm dark:bg-slate-800/50 dark:border-slate-700">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              <span
                className={`text-base ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Парвариш ва профилактикага мос
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/50 backdrop-blur border border-slate-200 shadow-sm dark:bg-slate-800/50 dark:border-slate-700">
              <FlaskConical className="w-5 h-5 text-indigo-600" />
              <span
                className={`text-base ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Таҳлилий ёндашув
              </span>
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/50 backdrop-blur border border-slate-200 shadow-sm dark:bg-slate-800/50 dark:border-slate-700">
              <Pill className="w-5 h-5 text-blue-600" />
              <span
                className={`text-base ${
                  darkMode ? "text-slate-200" : "text-slate-800"
                }`}
              >
                Индивидуал натижалар фарқ қилади
              </span>
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={scrollToLottery}
            className="group mt-10 bg-gradient-to-r from-blue-700 to-indigo-700 text-white px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-semibold rounded-full shadow-2xl hover:shadow-blue-700/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5"
          >
            <span className="flex items-center gap-2 justify-center">
              Чегирмада олиш
              <ArrowDown className="w-6 h-6 group-hover:animate-bounce" />
            </span>
          </button>
        </div>
      </section>

      {/* Info Section */}
      <section
        className={`relative py-20 px-6 md:px-12 ${
          darkMode ? "bg-slate-950 text-slate-200" : "bg-white text-slate-800"
        }`}
      >
        <div className="max-w-5xl mx-auto prose prose-xl prose-blue dark:prose-invert text-center">
          <h2 className="text-4xl font-bold mb-8">
            Бўғимларнинг шикастланиши қандай патологияларга олиб келади?
          </h2>
          <p className="text-xl">
            Аввал айтганимдек, бутун тана бундан азият чекади. Аммо, албатта,
            ҳаракат билан бевосита богʻлиқ бўлган органлар ва тизимлар – яъни
            таянч-ҳаракат тизимининг ўзи биринчи навбатда азият чекади.
          </p>
          <p className="text-xl">
            Суяклар ва бўғимлардаги яллиғʻланиш. Узоқ вақт давомида шикастланишда бўғимларда суюқлик тўпланиши мумкин, бу эса тўқималарнинг бутунлай нобуд бўлишига олиб келади, ўз навбатида бу муайян органлардаги алоҳида ҳужайраларнинг нобуд бўлишига олиб келиши мумкин.
          </p>
          <p className="text-xl">
            Ва худди шу нарса ҳамма жойда содир бўлади! Ревматик касалликлардан ўлган одамлар сони бошқа сабабларидан ўлган одамлар сонидан 4 баравар кўп. Шифокорлар буни билишади, бўғимларни тиклаш кераклигини билишади, лекин қандайдир сабаб бу амалиёт Ўзбекистон тиббиётида йўқ. Кўпгина шифокорлар артритда оғриқни камайтириш учун таблитклар ёзиб беришади. Аммо улар даволамайди, вақтинчалик эффект беради. Аммо бўғимларни тиклаш керак.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">Бўғимларнинг шикастланиши қуйидаги касалликларга сабаб бўлади:</h3>
          <ul className="list-disc pl-8 space-y-3 text-left inline-block text-xl">
            <li><b>Артрит.</b> Бўғимларда яллиғʻланиш пайдо бўлади...</li>
            <li><b>Остеоартрит.</b> Бўғимларнинг доимий емирилиши...</li>
            <li><b>Остеохондроз.</b> Суяк тўқималарига қон оқими...</li>
            <li><b>Ревматизм.</b> Шикастланиш туфайли оғриқ кучайди.</li>
            <li><b>Подагра.</b> Оёқларда ва ички қисмда пайдо бўлади...</li>
            <li><b>Суяклар ва бўғимлардаги яллиғʻланиш.</b> Суюқлик
              тўпланиши натижасида тўқималар нобуд бўлиши мумкин.</li>
          </ul>

          <h3 className="mt-10 text-2xl font-semibold">Шикастланиш белгиларига қуйидагилар киради:</h3>
          <ul className="list-disc pl-8 space-y-3 text-left inline-block text-xl">
            <li>Бўғимлардаги оғриқ</li>
            <li>Ҳаракатнинг бузилиши</li>
            <li>Сурунки чарчоқ</li>
            <li>Уйқусизлик</li>
            <li>Оёқ ва қўллардаги ноқулайлик</li>
            <li>Кўриш ва эшитишнинг ёмонлашиши</li>
            <li>Оёқлардаги шиш</li>
            <li>Нафас қисилиши ва стенокардия</li>
            <li>Мушак ва бўғимлардаги оғриқлар</li>
          </ul>

          <h3 className="mt-10 text-2xl font-semibold">Мега Акула ҳақида</h3>
          <p className="text-xl">
            "Мега Акула" — бўғимларни тиклаш учун яратилган табиий восита
            бўлиб, 1–2 ҳафта ичида ҳатто шикастланган бўғимларни ҳам
            тиклаш имконини беради. Кимёвий моддалар йўқ, фақат ўсимлик
            экстрактлари мавжуд.
          </p>
          <p className="mt-4 text-xl">
            Бу белгилар сизга хос бўлса ҳам, бўлмаса ҳам, 30 ёшдан кейин ҳеч бўлмаганда ҳар 5 йилда бир марта бўғимларни тиклаб туриш керак. Бу ҳолда сизнинг согʻлиғингиз ҳақиқатан ҳам қаҳрамонона бўлади. Аслда, бўғимлар жуда тез, айниқса кексаларда емирилади. Бунинг учун кун бўйи бургер ва картошка фри ейиш шарт эмас. Бўғимларда маьлум микдордаги тузлар тўпланиши учун оддий овқат ейиш кифоя. Вақт ўтиши билан шикастланишлар тўпланиб боради.
          </p>

          <p className="mt-4 text-xl">
            Мега Акула мунтазам фойдаланилганда 1–2 ҳафта ичида ҳатто жуда шикастланган бўғимларни ҳам тиклаш имконини берадиган жуда яхши восита. Шуни ҳам таъкидламоқчиманки, бу маҳсулот таркибида кимёвий моддалар мавжуд эмас, фақат бўғимларни тиклаш учун фойдали ўсимликларнинг жуда концентратсияланган экстрактлари бор, шунинг учун у нафақат организмга зарарли эмас, балки жуда фойдали ҳамдир. Менга эски беморлар ҳали ҳам бўғимларни тиклаш масаласида мурожаат қилишади. Охирги пайтларда мен фақат шу воситани тавсия қиламан. У ҳаммага ёрдам беради ва жуда яхши. Ревматизм институти сайтида клиник синовлар натижаларидан олинган бўғимларни тиклаш бўйича расмий статистика мавжуд. Жами 2000 га яқин беморлар тадқиқотда иштирок этди. Ҳаммалари Мега Акула билан даволанишди.
          </p>

          <h3 className="mt-10 text-2xl font-semibold">Клиник тадқиқот натижалари:</h3>
          <ul className="list-disc pl-8 space-y-3 text-left inline-block text-xl">
            <li>Оғриқнинг камайиши – 99%</li>
            <li>Ҳаракатчанликнинг нормаллашуви – 97%</li>
            <li>Тузлардан ва шишлардан тозаланиш – 99%</li>
            <li>Сурунки касалликларни даволаш самарадорлиги – 99%</li>
            <li>Умумий согʻлик яхшиланиши – 100%</li>
            <li>Ён таъсирлар йўқлиги – 100%</li>
          </ul>

          <h3 className="mt-10 text-2xl font-semibold">Мега Акулани қандай олиш мумкин?</h3>
          <ol className="list-decimal pl-8 space-y-3 text-left inline-block text-xl">
            <li>Қуйидаги лотереяда иштирок этинг.</li>
            <li>Ариза шаклини тўлдиринг.</li>
            <li>Менежер сиз билан богʻланади.</li>
            <li>1–4 кунда етказиб берилади.</li>
          </ol>
          <h2 className="text-4xl font-bold mt-8 mb-8">
            Мега Акула
          </h2>
          <p className="text-xl">
            Ростислав Филипповичнинг таъкидлашича, узоқ умр кўришнинг сири согʻлом бўғимларда. Агар улар мустаҳкам ва согʻлом бўлса, 120 йил ва ундан ҳам кўпроқ яшаш мумкин, ўзини мутлақо согʻлом ҳис қилади. Собиқ ревматолог ўз даъволарини тасдиқлайди.
          </p>
          <p className="mt-4 text-xl">
            Мухбиримиз юз ёшли инсон билан суҳбат қуришга муваффақ бўлди. Каримов Р. Ф. бўғимларни тиклаш ва умини узойтириш усулини батафсил тасвирлаб берди.

— Ростислав Филиппович, сиз согʻлом бўғимлар мустаҳкам согʻлик асоси эканлигини кўп марта таъкидлагансиз. Нега бундай деб ўйлайсиз?

Бу оддий. Барча ички органлар ва тизимларнинг ишлаши бўғимларнинг ҳолатига богʻлиқ. Бўғимларнинг ҳаракатчанлиги – бу эркин ва оғриқсиз ҳаракатланиш, ҳаётдан тўлиқ завқ олишдир. Болалик, ўсмирлик ва ёшлик даврида биз жуда кўп ҳаракат қиламиз, бўғимларимиз янги, эластик ва согʻлом – барча ҳаракатлар максимал даражада бўлади. Аммо ёш ўтган сари биз камроқ ҳаракат қиламиз ва бўғимларимиз емирила бошлайди. Бу турли омиллар – нафақат зарарли (масалан, нотоʻғри овқатланиш, экология, ўтроқ турмуш тарзи), балки бутунлай табиий (масалан, ҳар бир инсонга таъсир қилувчи тузларнинг тўпланиши) туфайли содир бўлади.

Шикастланган бўғимлар нима? Бу занг билан тўлган механикларга ўхшайди. Натижада нима содир бўлади? Натижада ҳаракатланиш оғирлашади ва оғриқ пайдо бўлади. Бўғимлар билан ҳам худди шундай ҳодиса рўй беради. Уларда тузлар ёки бошқа моддалар тўпланганда, шиш пайдо бўлади ва оғриқ кучайди. Натижада, барча органлар ва тизимлар азият чекади, чунки ҳаракат чекланади.

Натижада, инсон қаришни бошлайди. Агар сиз бўғимларни мунтазам равишда тиклаб турсангиз, 120 йилгача яшашингиз мумкин. Ва шу билан бирга, ҳеч нарса оғримайди – биронта ҳам суяк ёки бўғим, ва миянгиз яхши ишлайди. Бу шуни англатадики, бўғимларни тиклаш орқали сиз ҳаётингиз ва согʻлиғингизни сезиларли даражада узойтиришингиз мумкин. Ва бу нафақат назария. Бир вақтлар мен буни ўз беморларимга тавсия қилган эдим, энди эса ўзим ҳам шундай қиламан. Ўшанда менинг масаҳатмга қулоқ солган барча одамлар ўз тенгдошларидан узоқ умр кўришди.
          </p>
         

          <p className="mt-4 text-xl">
            Айтганчи, АКШ ва Канадада буни ҳар 35–40 ёшдан ошган одам ярим
            асрдан кўпроқ вақт давомида қилиб келади. Яъни, у ерда бўғимларни тиклаш ҳақида
            ҳамма нарсани билишади. Нега бизда бундай эмаслиги мен учун катта савол бўлиб қолмоқда.
          </p>

          <p className="mt-10 text-2xl font-semibold text-center">
            Согʻлом бўғимлар – согʻлик калитидир. ✅
          </p>
        </div>
      </section>
    </>
  );
}