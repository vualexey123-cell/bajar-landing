import type { JobsDict } from "@/lib/content/jobs/ru";

export const jobsUz: JobsDict = {
  meta: {
    title: "Bajar Qo‘shimcha ish: uyga yaqin smena va topshiriqlar",
    description:
      "Uyga yaqin, Uzcard va Humo kartasiga to‘lanadigan qo‘shimcha ish. Kompaniyalar smena va topshiriqlar uchun ijrochi topadi, shartnoma, dalolatnoma va to‘lov o‘zi rasmiylashtiriladi.",
    ogTitle: "Bajar Qo‘shimcha ish: uyga yaqin, kartaga to‘lanadigan smenalar",
    ogDescription: "Ijrochilar uyga yaqin qo‘shimcha ish topadi, kompaniyalar smenalar uchun odam topadi.",
  },

  nav: [
    { label: "Topshiriqlar", href: "#gigs" },
    { label: "Qanday boshlash", href: "#how" },
    { label: "Kompaniyalarga", href: "#business" },
    { label: "Savollar", href: "#faq" },
  ],

  cta: { primary: "Ish joylashtirish" },

  hero: {
    title: "Uyga yaqin, kartaga to‘lanadigan qo‘shimcha ish",
    text: "Tumaningizdagi kompaniyalardan smenalar va bir martalik topshiriqlar. Vaqtni o‘zingiz tanlaysiz, shartnoma, dalolatnoma va to‘lov esa ilovada rasmiylashtiriladi.",
    chips: ["Smena uchun 260 000 so‘mgacha", "Tajribasiz ham bo‘ladi", "4 soatdan smenalar", "Uzcard va Humo’ga to‘lov"],
    primary: "Topshiriqlarni ko‘rish",
    soft: "Ijrochi qidiryapman",
    photos: [
      { src: "/img/courier.webp", alt: "Termosumkali kuryer telefoniga qaramoqda" },
      { src: "/img/retail.webp", alt: "Ijrochi ayol mahsulotlar solingan quti ushlab turibdi" },
      { src: "/img/builder.webp", alt: "Shurupovyort ushlagan usta" },
      { src: "/img/tutor.webp", alt: "Daftarlar ushlagan ijrochi ayol" },
    ],
    phone: {
      title: "Yaqin atrofda",
      location: "Chilonzor",
      filters: ["Bugun", "Kechqurun", "Tajribasiz"],
      perShift: "smena uchun",
      items: [
        { title: "Buyurtma yig‘uvchi", meta: "Ombor, Sergeli · 18:00–23:00", pay: "180 000" },
        { title: "Promouter", meta: "Savdo markazi · 10:00–16:00", pay: "150 000" },
        { title: "Banketda ofitsiant", meta: "Restoran, Mirobod · 17:00–23:00", pay: "250 000" },
        { title: "Ofisni tozalash", meta: "Biznes markaz · 19:00–23:00", pay: "130 000" },
      ],
    },
  },

  teaser: {
    title: "Smenalar uchun odam qidiryapsizmi?",
    text: "Ishni joylashtiring, uni obyektingiz yaqinidagi ijrochilar ko‘radi. Shartnoma, dalolatnoma va to‘lov o‘zi rasmiylashtiriladi.",
    cta: "Kompaniyalarga",
  },

  benefits: {
    title: "Qo‘shimcha ish, hujjatlar va to‘lov bitta ilovada",
    map: {
      title: "Uyga yaqin topshiriqlar",
      text: "Tuman, kun va ish turi bo‘yicha filtrlar. To‘lov, manzil va davomiylik javob berishdan oldin ko‘rinadi.",
      pins: ["180 000", "150 000", "250 000", "130 000", "220 000"],
    },
    payout: {
      title: "Kartaga to‘lov",
      text: "Kompaniya ishni qabul qiladi, dalolatnoma o‘zi tuziladi va pul Uzcard yoki Humo kartasiga ketadi.",
      items: [
        { amount: "+180 000", card: "Humo •• 4417", from: "Ombor, Sergeli" },
        { amount: "+150 000", card: "Uzcard •• 0912", from: "Promo, Chilonzor" },
      ],
    },
    docs: {
      title: "Hujjatlar telefonda",
      text: "Shartnoma va dalolatnoma ilovada imzolanadi, hech qayerga borish shart emas.",
      act: "Dalolatnoma № 214",
      sum: "180 000",
      sign: "Imzolash",
    },
    status: {
      title: "O‘zini o‘zi band qilgan bo‘lishga yordam beramiz",
      text: "Agar maqom hali bo‘lmasa, ilova uni onlayn qanday rasmiylashtirishni ko‘rsatadi.",
      steps: ["Pasport", "O‘zini o‘zi band qilgan maqomi", "To‘lovlar uchun karta"],
    },
    rating: {
      title: "Reyting eng yaxshi smenalarni ochadi",
      text: "Bekor qilinmagan smenalar qancha ko‘p bo‘lsa, yangi topshiriqlarni shuncha erta ko‘rasiz.",
      score: "4,9",
      stats: ["32 smena", "bekor qilishsiz"],
    },
  },

  board: {
    title: "Istalgan kun va vaqtni tanlang",
    text: "Ilovadagi topshiriqlar shunday ko‘rinadi. Bular namunalar, haqiqiy smenalar tumaningizda ishga tushirilgandan keyin paydo bo‘ladi.",
    daysLabel: "Kun",
    days: ["Bugun", "Ertaga", "Indinga", "Dam olish kunlari"],
    categoriesLabel: "Ish turi",
    categories: {
      all: "Hammasi",
      warehouse: "Omborlar",
      delivery: "Yetkazib berish",
      retail: "Riteyl va promo",
      events: "Tadbirlar",
      cleaning: "Tozalash",
    },
    shifts: { day: "Kunduzgi", evening: "Kechki", night: "Tungi" },
    perShift: "smena uchun",
    hours: "soat",
    empty: "Bu kunda bunday topshiriqlar yo‘q. Boshqa kun yoki ish turini ko‘ring.",
    cta: "Topshiriqlarni Telegram’da kuzatish",
    gigs: [
      { day: 0, cat: "warehouse", title: "Buyurtma yig‘uvchi", place: "Ombor, Sergeli", time: "18:00–23:00", shift: "evening", pay: 180_000, hours: 5 },
      { day: 0, cat: "delivery", title: "Velosipedli kuryer", place: "Ovqat yetkazish, Yunusobod", time: "11:00–19:00", shift: "day", pay: 220_000, hours: 8 },
      { day: 0, cat: "retail", title: "Merchendayzer", place: "Supermarket, Chilonzor", time: "08:00–14:00", shift: "day", pay: 140_000, hours: 6 },
      { day: 1, cat: "warehouse", title: "Yuk tushirish", place: "Ombor, Yashnobod", time: "07:00–12:00", shift: "day", pay: 160_000, hours: 5 },
      { day: 1, cat: "events", title: "Banketda ofitsiant", place: "Restoran, Mirobod", time: "17:00–23:00", shift: "evening", pay: 250_000, hours: 6 },
      { day: 1, cat: "cleaning", title: "Ofisni tozalash", place: "Biznes markaz, Mirzo Ulug‘bek", time: "19:00–23:00", shift: "evening", pay: 130_000, hours: 4 },
      { day: 2, cat: "retail", title: "Promouter", place: "Savdo markazi, Chilonzor", time: "10:00–16:00", shift: "day", pay: 150_000, hours: 6 },
      { day: 2, cat: "warehouse", title: "Inventarizatsiya", place: "Elektronika do‘koni, Shayxontohur", time: "22:00–06:00", shift: "night", pay: 240_000, hours: 8 },
      { day: 2, cat: "delivery", title: "O‘z avtomobili bilan kuryer", place: "Posilka yetkazish, Sergeli", time: "09:00–18:00", shift: "day", pay: 260_000, hours: 9 },
      { day: 3, cat: "events", title: "Ko‘rgazmada xostes", place: "Ko‘rgazma markazi, Yunusobod", time: "09:00–17:00", shift: "day", pay: 200_000, hours: 8 },
      { day: 3, cat: "cleaning", title: "Ta’mirdan keyingi tozalash", place: "Kvartira, Yakkasaroy", time: "10:00–16:00", shift: "day", pay: 180_000, hours: 6 },
      { day: 3, cat: "warehouse", title: "Buyurtma yig‘uvchi", place: "Darkstor, Mirobod", time: "08:00–16:00", shift: "day", pay: 190_000, hours: 8 },
    ],
  },

  steps: {
    title: "Birinchi smenaga qanday chiqish mumkin",
    items: [
      {
        title: "Ro‘yxatdan o‘ting",
        text: "Telefon raqami orqali. Pasport va to‘lovlar uchun Uzcard yoki Humo kartasi kerak bo‘ladi.",
      },
      {
        title: "O‘zini o‘zi band qilgan maqomini oling",
        text: "Agar maqom hali bo‘lmasa, ilova uni onlayn qanday rasmiylashtirishni ko‘rsatadi.",
      },
      {
        title: "Topshiriqni tanlang",
        text: "Tuman, kun va ish turi bo‘yicha. Suhbatsiz, bir necha bosishda javob berish mumkin.",
      },
      {
        title: "To‘lovni oling",
        text: "Kompaniya ishni qabul qiladi, siz dalolatnomani telefonda imzolaysiz va pul kartaga tushadi.",
      },
    ],
  },

  audiences: {
    title: "Grafigingizga mos qo‘shimcha ish",
    items: [
      { label: "Talabalarga", image: "/img/courier.webp", alt: "Termosumkali yosh kuryer" },
      { label: "Asosiy ishdan keyin", image: "/img/it.webp", alt: "Noutbuk ushlagan erkak" },
      { label: "Qo‘li gul ustalarga", image: "/img/builder.webp", alt: "Shurupovyort ushlagan usta" },
      { label: "Dam olish kunlari", image: "/img/retail.webp", alt: "Mahsulotlar qutisini ushlagan ijrochi ayol" },
    ],
    tagsLabel: "Yana topshiriqlar",
    tags: ["tajribasiz", "uyga yaqin", "4 soatga", "bir martalik", "dam olish kunlari", "kechki", "tungi"],
  },

  business: {
    title: "Shtatga olmasdan smenalar uchun ijrochilar",
    text: "Gavjum kunlar, mavsumiy loyihalar va to‘liq kunlik xodim kerak bo‘lmagan vazifalar uchun.",
    post: {
      title: "Smena bir necha daqiqada joylashtiriladi",
      text: "Vazifa, manzil, vaqt va to‘lovni yozing. Uni darhol yaqin atrofdagi ijrochilar ko‘radi.",
      fields: [
        { label: "Topshiriq", value: "Buyurtma yig‘uvchi" },
        { label: "Manzil", value: "Ombor, Sergeli" },
        { label: "Qachon", value: "Juma, 18:00–23:00" },
        { label: "To‘lov", value: "Smena uchun 180 000 so‘m" },
        { label: "Kerakli odamlar", value: "6" },
      ],
      publish: "E’lon qilish",
    },
    applicants: {
      title: "Reytingli javoblar",
      text: "Har birining reytingi, kompaniyalar sharhlari va smenalar soni ko‘rinadi.",
      accept: "Qabul qilish",
      accepted: "Smenada",
      items: [
        { name: "Aziz Rahimov", meta: "4,9 · 32 smena", accepted: true },
        { name: "Dilnoza Karimova", meta: "4,8 · 18 smena", accepted: true },
        { name: "Shahzod Tursunov", meta: "Yangi", accepted: false },
      ],
    },
    pool: {
      title: "O‘z ijrochilaringiz ro‘yxati",
      text: "Ishlash yoqqan odamlarni saqlang va smenalarga avval ularni chaqiring.",
      invite: "Ro‘yxatdan 12 kishini chaqirish",
    },
    docs: {
      title: "Hujjatlar va to‘lov",
      text: "Smenadan keyin dalolatnomalar o‘zi tuziladi, to‘lov esa Bajar kabinetidan bitta reestr bilan ketadi.",
      registry: "Jumadagi smena",
      rows: [
        { label: "Ijrochilar", value: "6" },
        { label: "Dalolatnomalar imzolandi", value: "6 / 6" },
        { label: "To‘lovga", value: "1 080 000 so‘m" },
      ],
      pay: "To‘lash",
    },
  },

  faq: {
    title: "Ko‘p beriladigan savollar",
    items: [
      {
        q: "Kim topshiriq olishi mumkin?",
        a: "O‘zini o‘zi band qilganlar, YaTT va jismoniy shaxslar. Agar sizda hali o‘zini o‘zi band qilgan maqomi bo‘lmasa, ilova uni onlayn qanday rasmiylashtirishni ko‘rsatadi.",
      },
      {
        q: "Pul qachon keladi?",
        a: "Kompaniya ishni qabul qilgach va siz ilovada dalolatnomani imzolagach. Odatda pul Uzcard yoki Humo kartasiga bir necha daqiqada tushadi.",
      },
      {
        q: "Tajriba kerakmi?",
        a: "Ko‘p topshiriqlar uchun yo‘q. Topshiriq kartasida nima qila olish kerakligi va qanday hujjatlarni olish kerakligi yozilgan.",
      },
      {
        q: "Birja Bajar to‘lovlaridan nimasi bilan farq qiladi?",
        a: "To‘lovlar kompaniyada ijrochilar allaqachon bo‘lganda kerak. Birja yangilarini topishga yordam beradi: kompaniya smenani e’lon qiladi, shartnoma, dalolatnoma va to‘lov esa asosiy kabinetdagidek davom etadi.",
      },
      {
        q: "Kompaniya uchun joylashtirish qancha turadi?",
        a: "Narx oyiga smena va topshiriqlar soniga bog‘liq. Menejer uni demoda hajmingizga qarab hisoblab beradi.",
      },
    ],
  },

  lead: {
    title: "Birinchi ishni joylashtiring",
    text: "Kontaktlaringizni qoldiring, menejer vazifani tasvirlashga va ijrochilarni tanlashni boshlashga yordam beradi.",
    benefits: [
      "Obyektingiz yaqinidagi ijrochilar",
      "Har bir ijrochi bo‘yicha reyting va sharhlar",
      "Shartnoma, dalolatnoma va kartaga to‘lov buxgalteriyasiz",
      "Keyingi smenalar uchun tekshirilgan odamlar ro‘yxati",
    ],
    size: "Oyiga nechta odam kerak",
  },
};
