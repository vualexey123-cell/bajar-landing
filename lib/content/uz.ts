import type { Dict } from "./ru";

// Uzbek (Latin) dictionary. Same shape as ru.ts.
// o‘ and g‘ use U+2018, the tutuq belgisi uses U+2019: both glyphs exist in Geist.
export const uz: Dict = {
  meta: {
    title: "Bajar: O‘zbekistonda YaTT, o‘zini o‘zi band qilganlar va jismoniy shaxslarga to‘lovlar",
    description:
      "Topshiriqlar, shartnomalar, dalolatnomalar va Uzcard hamda Humo kartalariga to‘lovlar bitta kabinetda. YaTT, o‘zini o‘zi band qilganlar va jismoniy shaxslar bilan ishlaydigan kompaniyalar uchun.",
    ogTitle: "Bajar: ijrochilarga oddiy, tez va qonuniy to‘lovlar",
    ogDescription: "Topshiriqlar, shartnomalar, dalolatnomalar va Uzcard hamda Humo kartalariga to‘lovlar bitta kabinetda.",
    ogLocale: "uz_UZ",
  },
  ui: {
    home: "Bajar, bosh sahifa",
    mainNav: "Asosiy navigatsiya",
    openMenu: "Menyuni ochish",
    closeMenu: "Menyuni yopish",
    language: "Sayt tili",
    heroImageAlt: "Bajar’dagi kompaniya kabineti: balans, kunlik to‘lovlar, imzolash uchun hujjatlar va so‘nggi to‘lovlar",
    currency: "so‘m",
    mln: "mln",
    bln: "mlrd",
    country: "O‘zbekiston",
    city: "Toshkent",
  },
  products: {
    business: {
      label: "Biznes uchun",
      items: {
        home: { name: "Bajar To‘lovlar", text: "Shtatdan tashqari xodimlarga to‘lovlar va ular bilan ishlashni avtomatlashtirish platformasi" },
        hire: { name: "Bajar Birja", text: "Vaqtinchalik xodimlarni qidirish va yollash platformasi" },
      },
    },
    workers: {
      label: "Ijrochilar uchun",
      items: {
        jobs: { name: "Bajar Qo‘shimcha ish", text: "Vaqtinchalik topshiriqlarni qidirish platformasi" },
        getpaid: { name: "To‘lovlarni olish", text: "Buyurtmachidan to‘lovlarni olish platformasi" },
      },
    },
  },

  cta: {
    primary: "Demo olish",
    soft: "Tejamni hisoblash",
  },

  hero: {
    title: "YaTT, o‘zini o‘zi band qilganlar va jismoniy shaxslarga oddiy, tez va qonuniy to‘lovlar",
    text: "Shartnoma, dalolatnoma va Uzcard hamda Humo kartalariga to‘lov o‘zi tayyorlanadi. Buxgalteriya faqat reestrni tasdiqlaydi.",
  },

  alternatives: {
    title: "Bajar topshiriqlar, hujjat aylanishi va to‘lovlarni avtomatlashtiradi",
    text: "",
    columns: ["Qo‘lda o‘tkazmalar", "Bajar"],
    rows: [
      {
        topic: "Topshiriqlar",
        cells: [
          { text: "Messenjer va jadvallarda, qabul og‘zaki", ok: false },
          { text: "Topshiriq berasiz, natijani tekshirasiz va kabinetda tasdiqlaysiz", ok: true },
        ],
      },
      {
        topic: "Shartnoma",
        cells: [
          { text: "Qog‘oz, imzolar, skanlar", ok: false },
          { text: "Shablon asosida, telefon yoki E-IMZO orqali imzo", ok: true },
        ],
      },
      {
        topic: "Dalolatnoma",
        cells: [
          { text: "Har bir ijrochidan yig‘asiz", ok: false },
          { text: "Topshiriq tasdiqlangach tuziladi va onlayn imzolanadi", ok: true },
        ],
      },
      {
        topic: "Pul o‘tkazish",
        cells: [
          { text: "100 ta o‘tkazma, birma-bir", ok: false },
          { text: "Uzcard va Humo kartalariga bitta reestr bilan", ok: true },
        ],
      },
      {
        topic: "Maqomni tekshirish",
        cells: [
          { text: "Qo‘lda", ok: false },
          { text: "Har bir to‘lovdan oldin", ok: true },
        ],
      },
      {
        topic: "100 ta to‘lovga vaqt",
        cells: [
          { text: "taxminan 58 soat", ok: false },
          { text: "bir soatdan kam", ok: true },
        ],
      },
    ],
    note: "Vaqt taxminiy: bitta to‘lovga taxminan 35 daqiqa qo‘l mehnati.",
  },

  features: {
    title: "Excel, bank va messenjerlar o‘rniga bitta kabinet",
    text: "Ijrochilarga har hafta to‘lash va hujjatlarni qo‘lda yig‘maslik uchun kerak bo‘lgan hamma narsa.",
    payouts: {
      title: "Ommaviy to‘lovlar",
      text: "Excel’dan reestrni yuklang yoki qabul qilingan dalolatnomalarni belgilang. Yuzta to‘lov bitta harakat bilan ketadi, har birining holati reestrda ko‘rinadi.",
      rows: [
        { name: "Aziz Rahimov", card: "Uzcard •• 0912", amount: "360 000" },
        { name: "Dilnoza Karimova", card: "Humo •• 2281", amount: "1 440 000" },
        { name: "Shahzod Tursunov", card: "Uzcard •• 7730", amount: "168 000" },
        { name: "Madina Ahmedova", card: "Humo •• 5054", amount: "1 600 000" },
        { name: "Kamila Yusupova", card: "Humo •• 4417", amount: "1 500 000" },
        { name: "Jasur Xasanov", card: "Uzcard •• 3368", amount: "2 700 000" },
      ],
      pending: "Jarayonda",
      done: "To‘landi",
      registry: "Reestr № 128",
      sent: "{total} tadan {count} tasi yuborildi",
    },
    tasks: {
      title: "Topshiriqlarni boshqarish",
      text: "Ijrochilarga topshiriq bering, natijani qabul qiling va to‘g‘ridan-to‘g‘ri kabinetda to‘lang. Dalolatnoma qabuldan keyin o‘zi tuziladi.",
      flow: ["Topshiriq berish", "Qabul qilish", "To‘lash"],
      accept: "Qabul qilish",
      statuses: { review: "Tekshiruvda", accepted: "Qabul qilindi", paid: "To‘landi" },
      items: [
        { title: "6 ta banner dizayni", who: "Kamila Yusupova", amount: "1 500 000", status: "review" },
        { title: "24 ta buyurtmani yetkazish", who: "Aziz Rahimov", amount: "360 000", status: "accepted" },
        { title: "4 ta rolik suratga olish", who: "Madina Ahmedova", amount: "1 600 000", status: "paid" },
      ],
    },
    docs: {
      title: "Elektron hujjatlar",
      text: "Shartnoma, topshiriq va dalolatnoma shablon asosida tuziladi. Ijrochi telefondan, kompaniya E-IMZO orqali imzolaydi.",
      items: ["Shartnoma", "Topshiriq", "Dalolatnoma"],
    },
    onboarding: {
      title: "Havola orqali ulanish",
      text: "Ijrochiga havola yuboring. U telefondan ro‘yxatdan o‘tadi, pasport va maqomini esa o‘zimiz tekshiramiz.",
      joined: "38 nafar ijrochi havola orqali ulandi",
    },
    manager: {
      title: "Shaxsiy menejer",
      text: "Ajratilgan menejer kompaniyani ulaydi, ijrochilarni taklif qilishga yordam beradi va Telegram’da doim aloqada bo‘ladi.",
      image: "/img/manager.webp",
      alt: "Bajar shaxsiy menejeri",
      role: "Sizning menejeringiz",
      status: "Telegram’da aloqada",
    },
    api: {
      title: "API va 1C’ga eksport",
      text: "Dalolatnoma va reestrlar 1C’ga tushadi, REST API orqali esa to‘lovlarni o‘z tizimingizdan ishga tushirish mumkin.",
    },
  },

  steps: {
    title: "Shartnomadan to‘lovgacha to‘rt qadam",
    items: [
      {
        title: "Kompaniyani ulang",
        text: "Ofertani E-IMZO orqali imzolang va balansni hisob raqamidan o‘tkazma bilan to‘ldiring.",
      },
      {
        title: "Ijrochilarni taklif qiling",
        text: "Havola yuboring. Ijrochi ro‘yxatdan o‘tadi, biz esa pasport va maqomini tekshiramiz.",
      },
      {
        title: "Topshiriq yarating",
        text: "Qo‘lda, reestr yoki API orqali. Shartnoma va topshiriq shablon asosida tuziladi.",
      },
      {
        title: "Qabul qiling va to‘lang",
        text: "Dalolatnoma imzolangach pul kartaga o‘tadi, hujjatlar esa kabinetda saqlanadi.",
      },
    ],
  },

  contractors: {
    title: "Ijrochilar uchun yangi darajadagi qulaylik",
    text: "Tezkor to‘lovlar va tushunarli hujjatlar odamlarni yollash va ushlab qolishga yordam beradi. Har bir ijrochida Bajar ilovasi bor.",
    image: {
      src: "/img/contractor-app.webp",
      alt: "Bajar ijrochi ilovasi: oylik daromad, imzolash uchun dalolatnoma va to‘lovlar tarixi",
    },
    points: [
      {
        icon: "signature",
        title: "Telefondan imzo",
        text: "Shartnoma va dalolatnomani ijrochi o‘zi imzolaydi, ofisga kelmasdan va kuryersiz.",
      },
      {
        icon: "card",
        title: "Pul kartaga",
        text: "To‘lov dalolatnoma imzolangan zahoti Uzcard yoki Humo kartasiga tushadi. «Qachon to‘laysiz» degan savollar kamayadi.",
      },
      {
        icon: "support",
        title: "O‘z yordam xizmati",
        text: "Ijrochilarning ilovada va Telegram’da o‘z yordam xizmati bor. Ularning savollari buxgalteriyangizgacha yetib bormaydi.",
      },
      {
        icon: "document",
        title: "Daromad haqida ma’lumotnoma",
        text: "Bank yoki viza uchun ma’lumotnomani ijrochi buxgalteriyaga murojaat qilmasdan o‘zi yuklab oladi.",
      },
    ],
  },

  demoCta: {
    title: "Bajar’ni o‘z to‘lovlaringiz misolida ko‘ring",
    text: "Hozir ijrochilarga qanday to‘layotganingizni ko‘rib chiqamiz, kabinetni sizning misolingizda ko‘rsatamiz va buxgalteriyada qancha vaqt bo‘shashini hisoblab beramiz.",
  },

  industries: {
    taskLabel: "Topshiriq namunasi",
    items: [
      {
        id: "delivery",
        name: "Yetkazib berish va logistika",
        image: "/img/courier.webp",
        alt: "Termosumkali kuryer telefoniga qaramoqda",
        text: "Ishbay haq oladigan kuryerlar, haydovchilar va yuk tashuvchilar. To‘lov har smenadan keyin yoki haftada bir marta.",
        task: { title: "Buyurtmalarni yetkazish", qty: "24 ta buyurtma", rate: "har biri 15 000 so‘m", total: "360 000 so‘m" },
      },
      {
        id: "retail",
        name: "Riteyl va omborlar",
        image: "/img/retail.webp",
        alt: "Merchandayzer mahsulotlar qutisini ushlab turibdi",
        text: "Mavsumiy cho‘qqilarda shtatni kengaytirmasdan merchandayzerlar, promouterlar va buyurtma yig‘uvchilar.",
        task: { title: "Tovarlarni javonga terish", qty: "140 ta pozitsiya", rate: "har biri 1 200 so‘m", total: "168 000 so‘m" },
      },
      {
        id: "it",
        name: "IT va dizayn",
        image: "/img/it.webp",
        alt: "Ochiq noutbuk ushlagan dasturchi",
        text: "Loyiha asosida ishlaydigan dasturchilar, dizaynerlar va kopirayterlar. Har bir bosqich uchun shartnoma va dalolatnoma.",
        task: { title: "Banner dizayni", qty: "6 ta banner", rate: "har biri 250 000 so‘m", total: "1 500 000 so‘m" },
      },
      {
        id: "education",
        name: "Ta’lim",
        image: "/img/tutor.webp",
        alt: "Daftar va kitob ushlagan repetitor",
        text: "Repetitorlar, kurs o‘qituvchilari va metodistlar. O‘tilgan darslar bo‘yicha to‘lov.",
        task: { title: "Ingliz tili darslari", qty: "12 ta dars", rate: "har biri 120 000 so‘m", total: "1 440 000 so‘m" },
      },
      {
        id: "repair",
        name: "Ta’mirlash va qurilish",
        image: "/img/builder.webp",
        alt: "Akkumulyatorli drel ushlagan ta’mirlash ustasi",
        text: "Obyektlardagi ustalar va brigadalar. Har bir bosqichga dalolatnoma va qabul qilingan zahoti to‘lov.",
        task: { title: "Elektr montaji", qty: "3 ta xona", rate: "har biri 900 000 so‘m", total: "2 700 000 so‘m" },
      },
      {
        id: "media",
        name: "Media va kontent",
        image: "/img/media.webp",
        alt: "Stabilizatorli kamera ushlagan videograf",
        text: "Videograflar, montajchilar va SMM mutaxassislari. Har bir rolik yoki post uchun to‘lov.",
        task: { title: "Qisqa videolar suratga olish", qty: "4 ta rolik", rate: "har biri 400 000 so‘m", total: "1 600 000 so‘m" },
      },
      {
        id: "other",
        name: "Boshqa",
        image: "/img/translator.webp",
        alt: "Hujjatlar papkasini ushlagan tarjimon",
        text: "Frilanserlar, tarjimonlar, maslahatchilar, promouterlar va boshqa ijrochilar. Har bir topshiriq bo‘yicha shartnoma, dalolatnoma va to‘lov.",
        task: { title: "Hujjatlarni tarjima qilish", qty: "20 sahifa", rate: "har biri 60 000 so‘m", total: "1 200 000 so‘m" },
      },
    ],
  },

  pricing: {
    title: "To‘lovlardan komissiya. Abonent to‘lovisiz",
    text: "Ulanish, kabinet va qo‘llab-quvvatlash bepul, aylanma o‘sgani sari stavka pasayadi. Sohani tanlang yoki o‘z hajmlaringizni kiriting.",
    industryLabel: "Soha",
    sliderLabel: "Ijrochilarga oylik to‘lovlar summasi",
    stops: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    defaultStop: 6,
    tiers: [
      { upTo: 100, rate: 2.5, label: "100 mln gacha" },
      { upTo: 500, rate: 2, label: "100-500 mln" },
      { upTo: 1000, rate: 1.5, label: "500 mln - 1 mlrd" },
    ],
    customLabel: "1 mlrd dan ortiq",
    customNote: "Oyiga 1 mlrd so‘mdan ortiq aylanma uchun stavkani alohida hisoblaymiz.",
    feeLabel: "Bajar komissiyasi",
    totalLabel: "Jami to‘ldirish",
    cta: "Demo olish",
    tiersLabel: "Aylanma bo‘yicha stavkalar",
    customShort: "Alohida",
    payoutsUnit: "ta to‘lov",
    volumeMln: "{n} mln so‘m",
    volumeBln: "{n} mlrd so‘m",
    hoursLine: "oyiga taxminan {n} {unit}",
    hourOne: "soat",
    hourMany: "soat",
    payoutsLabel: "Ijrochilarga oylik to‘lovlar soni",
    payoutStops: [10, 25, 50, 100, 200, 300, 500, 750, 1000, 1500, 2000],
    defaultPayoutStop: 6,
    bankLabel: "Hozirgi bank o‘tkazmalari komissiyasi",
    bankStops: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3],
    defaultBankStop: 4,
    minutesPerPayout: 35,
    timeLabel: "Buxgalteriyada bo‘shaydigan vaqt",
    timeNote: "Bitta to‘lovga 35 daqiqa ketsa, to‘liq stavkadagi bitta buxgalter oyiga taxminan {n} ta to‘lovni bajaradi: o‘tkazma, shartnoma va dalolatnoma.",
    accountantHours: 168,
    accountantSalary: 12_000_000,
    savingsLabel: "Oyiga tejaysiz",
    staffExtra: "va {n} nafar {unit}ning ish vaqti",
    accountantForms: { one: "buxgalter", few: "buxgalter", many: "buxgalter", other: "buxgalter" },
    nowBankLabel: "Bank komissiyasi",
    nowWorkLabel: "Buxgalter maoshi",
    lowSavingsNote: "Kam va yirik to‘lovlarda asosiy foyda buxgalteriya vaqti va hujjatlardagi tartibda. Bunday hajm uchun stavkani alohida tanlaymiz.",
    moneyNote: "Toshkentdagi o‘rtacha oylik maosh, taxminan 12 mln so‘m asosida.",
  },

  security: {
    title: "Pul, ma’lumotlar va hujjatlar himoyada",
    titleWithCompany: "Bajar ortida kim turibdi va pul qanday himoyalangan",
    companyLabel: "Kompaniya",
    companyFields: { stir: "STIR", address: "Manzil", bank: "Hamkor bank", founder: "Asoschi" },
    text: "Bajar har bir to‘lovdan oldin ijrochi maqomini tekshiradi va har bir to‘lov bo‘yicha to‘liq hujjatlar to‘plamini saqlaydi.",
    items: [
      {
        icon: "server",
        title: "O‘zbekistondagi serverlar",
        text: "Ijrochilarning shaxsiy ma’lumotlarini qonun talabiga ko‘ra mamlakat hududida saqlaymiz.",
      },
      {
        icon: "bank",
        title: "Pul bankda",
        text: "Kompaniya mablag‘lari to‘lov vaqtigacha hamkor bankdagi hisobda turadi.",
      },
      {
        icon: "signature",
        title: "Yuridik kuchga ega imzo",
        text: "Hujjatlar E-IMZO orqali imzolanadi va qog‘oz hujjatlar bilan bir xil kuchga ega.",
      },
      {
        icon: "lock",
        title: "Jurnal va rollar",
        text: "Kabinetdagi har bir harakat qayd etiladi, kirish huquqlari esa rollar bo‘yicha ajratilgan.",
      },
    ],
  },

  faq: {
    title: "Ko‘p beriladigan savollar",
    items: [
      {
        q: "Bu kartadan kartaga o‘tkazmalardan nimasi bilan yaxshi?",
        a: "O‘tkazma faqat to‘lovni hal qiladi. Bajar esa topshiriqlarni yuritadi, shartnoma va dalolatnomani rasmiylashtiradi hamda ijrochi maqomini tekshiradi, shuning uchun har bir to‘lov bo‘yicha buxgalteriyada to‘liq hujjatlar to‘plami qoladi.",
      },
      {
        q: "Ulanish uchun kompaniyaga nima kerak?",
        a: "Ofertani E-IMZO orqali imzolash uchun kompaniya rekvizitlari va direktorning elektron raqamli imzosi. Menejer kabinetni sozlash va birinchi ijrochilarni taklif qilishda yordam beradi.",
      },
      {
        q: "Ijrochi pulni qanchalik tez oladi?",
        a: "Odatda dalolatnoma imzolangandan keyin bir necha daqiqa ichida. Uzcard va Humo kartalariga to‘lovlar dam olish kunlari ham kecha-kunduz ishlaydi.",
      },
      {
        q: "Bajar orqali kim bilan ishlash mumkin?",
        a: "O‘zini o‘zi band qilganlar, yakka tartibdagi tadbirkorlar va jismoniy shaxslar bilan. Bajar har bir ijrochi turi uchun o‘z shartnomasini tayyorlaydi, menejer esa sizning holatingizda qanday hujjatlar kerakligini aytib beradi.",
      },
      {
        q: "Balansdagi pul bilan nima bo‘ladi?",
        a: "Kompaniya mablag‘lari hamkor bank hisobida saqlanadi va faqat ijrochilaringizga to‘lovlar uchun ishlatiladi. Sarflanmagan qoldiqni hisob raqamingizga qaytarish mumkin.",
      },
      {
        q: "Kompaniya ijrochi uchun soliq to‘lashi kerakmi?",
        a: "Bu ijrochi maqomiga bog‘liq. O‘zini o‘zi band qilganlarga to‘lovlarda kompaniya odatda soliq ushlab qolmaydi, jismoniy shaxslar uchun esa o‘z qoidalari amal qiladi. Bajar har bir to‘lovdan oldin maqomni tekshiradi, ish sxemangiz bo‘yicha esa yuristimiz maslahat beradi.",
      },
      {
        q: "Platforma qanday hujjatlarni tayyorlaydi?",
        a: "Xizmat ko‘rsatish shartnomasi, topshiriq, bajarilgan ishlar dalolatnomasi va to‘lovlar reestri. Barcha hujjatlar kabinetda saqlanadi va 1C’ga eksport qilinadi.",
      },
    ],
  },

  lead: {
    title: "Bajar’ni kompaniyangiz misolida ko‘rsatamiz",
    text: "Kontaktlaringizni qoldiring, menejer kabinetni ijrochilaringiz misolida ko‘rsatadi. Yozishma qulayroqmi? Bizga Telegram’da yozing.",
    benefits: [
      "Topshiriqlar, shartnomalar, dalolatnomalar va to‘lovlar bitta kabinetda",
      "Uzcard va Humo kartalariga yuzlab to‘lovlar bitta reestr bilan",
      "Har bir to‘lovdan oldin ijrochi maqomi tekshiriladi",
      "Hujjatlar telefondan yoki E-IMZO orqali imzolanadi",
      "Ulanish bepul, shaxsiy menejer Telegram’da doim aloqada",
    ],
    fields: {
      name: "Ismingiz",
      company: "Kompaniya",
      phone: "Telefon",
      size: "Nechta ijrochingiz bor",
    },
    sizes: ["10 tagacha", "10-50", "50-200", "200 dan ortiq"],
    submit: "Ariza yuborish",
    submitting: "Yuborilmoqda",
    consent: "Tugmani bosish orqali shaxsiy ma’lumotlarni qayta ishlash siyosatiga rozilik bildirasiz.",
    errors: {
      name: "Sizga qanday murojaat qilishimizni yozing",
      company: "Kompaniya nomini kiriting",
      phone: "Raqam +998 90 123 45 67 formatida bo‘lishi kerak",
      network: "Arizani yuborib bo‘lmadi. Qayta urinib ko‘ring yoki bizga Telegram’da yozing.",
    },
    success: {
      title: "Ariza yuborildi",
      text: "Menejer ish kuni davomida qo‘ng‘iroq qiladi. Qulayroq bo‘lsa, Telegram’da yozing.",
      again: "Yana bittasini yuborish",
    },
  },

  footer: {
    tagline: "O‘zbekistonda ijrochilar bilan ishlash platformasi: to‘lovlar, vaqtinchalik xodimlarni tanlash va qo‘shimcha ish.",
    columns: [
      {
        title: "Hujjatlar",
        links: [
          { label: "Maxfiylik siyosati", href: "#" },
          { label: "Ommaviy oferta", href: "#" },
        ],
      },
    ],
    contacts: "Kontaktlar",
  },
};
