import type { JobsDict } from "@/lib/content/jobs/ru";

export const jobsUz: JobsDict = {
  meta: {
    title: "Bajar Qo‘shimcha ish: uyga yaqin smena va topshiriqlar",
    description:
      "Uyga yaqin, Uzcard va Humo kartasiga to‘lanadigan qo‘shimcha ish. Kompaniyalar smena va topshiriqlar uchun ijrochi topadi, shartnoma, dalolatnoma va to‘lov o‘zi rasmiylashtiriladi.",
    ogTitle: "Bajar Qo‘shimcha ish: uyga yaqin, kartaga to‘lanadigan smenalar",
    ogDescription: "Ijrochilar uyga yaqin qo‘shimcha ish topadi, kompaniyalar smenalar uchun odam topadi.",
  },

  hero: {
    title: "Uyga yaqin, kartaga to‘lanadigan qo‘shimcha ish",
    text: "Tumaningizdagi kompaniyalardan smenalar va bir martalik topshiriqlar. Vaqtni o‘zingiz tanlaysiz, shartnoma, dalolatnoma va to‘lov esa ilovada rasmiylashtiriladi.",
    chips: ["Smena uchun 260 000 so‘mgacha", "Tajribasiz ham bo‘ladi", "4 soatdan smenalar", "Uzcard va Humo’ga to‘lov"],
    primary: "Topshiriqlarni ko‘rish",
    soft: "Ijrochi qidiryapman",
    photos: [
      { src: "/img/warehouse.webp", alt: "Skaner va quti ushlagan buyurtma yig‘uvchi" },
      { src: "/img/waiter.webp", alt: "Patnis ushlagan ofitsiant ayol" },
      { src: "/img/cleaner.webp", alt: "Purkagich ushlagan tozalovchi ayol" },
      { src: "/img/driver.webp", alt: "Mashina kalitini ushlagan haydovchi" },
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
    cta: "Bajar Birja’ga o‘tish",
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
      { label: "Talabalarga", image: "/img/student.webp", alt: "Ryukzak va telefon ushlagan talaba qiz" },
      { label: "Asosiy ishdan keyin", image: "/img/office.webp", alt: "Yelkasiga pidjak tashlagan erkak" },
      { label: "Qo‘li gul ustalarga", image: "/img/builder.webp", alt: "Shurupovyort ushlagan usta" },
      { label: "Dam olish kunlari", image: "/img/hostess.webp", alt: "Planshet ushlagan xostes" },
    ],
    tagsLabel: "Yana topshiriqlar",
    tags: ["tajribasiz", "uyga yaqin", "4 soatga", "bir martalik", "dam olish kunlari", "kechki", "tungi"],
  },

  band: {
    title: "Kompaniya bilan allaqachon ishlayapsizmi?",
    text: "Agar buyurtmachi Bajar orqali to‘lasa, shartnoma, dalolatnomalar va to‘lovlar o‘sha ilovaga keladi.",
    cta: "To‘lovlarni olish",
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
        q: "Turli kompaniyalardan topshiriq olish mumkinmi?",
        a: "Ha. Bajar Qo‘shimcha ish’da istalgan kompaniyaning topshiriqlarini o‘zingiz tanlaysiz va qulay vaqtda ishlaysiz.",
      },
    ],
  },
};
