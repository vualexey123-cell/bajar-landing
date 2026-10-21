import type { HireDict } from "@/lib/content/hire/ru";

export const hireUz: HireDict = {
  meta: {
    title: "Bajar Birja: smena va topshiriqlar uchun vaqtinchalik xodimlar",
    description:
      "Smena, topshiriq va mavsumiy ishlar uchun shtatga olmasdan ijrochilar toping. Reytingli javoblar, shartnomalar, dalolatnomalar va to‘lov bitta Bajar kabinetida.",
    ogTitle: "Bajar Birja: shtatga olmasdan vaqtinchalik xodimlar",
    ogDescription: "Obyektingiz yaqinida smena va topshiriqlar uchun ijrochilar. Shartnoma, dalolatnoma va to‘lov o‘zi rasmiylashtiriladi.",
  },

  cta: { primary: "Ish joylashtirish", soft: "Qanday ishlaydi" },

  hero: {
    title: "Shtatga olmasdan smena va topshiriqlar uchun vaqtinchalik xodimlar",
    text: "Smenani e’lon qiling, obyekt yaqinidagi ijrochilarni reyting va sharhlar bo‘yicha tanlang va ishni kabinetdan to‘lang. Shartnoma va dalolatnomalar o‘zi rasmiylashtiriladi.",
    board: {
      title: "Haftalik smenalar",
      tabs: ["Faol", "Yakunlangan"],
      add: "Yangi smena",
      filled: "{total} tadan {n} tasi",
      statuses: { open: "Tanlov davom etmoqda", full: "To‘ldirildi" },
      items: [
        { title: "Buyurtma yig‘uvchilar", place: "Ombor, Sergeli", when: "Juma, 18:00–23:00", filled: 6, total: 6 },
        { title: "Promouterlar", place: "Savdo markazi, Chilonzor", when: "Shanba, 10:00–16:00", filled: 3, total: 4 },
        { title: "Banketda ofitsiantlar", place: "Restoran, Mirobod", when: "Shanba, 17:00–23:00", filled: 8, total: 8 },
        { title: "Yuk tushirish", place: "Ombor, Yashnobod", when: "Yakshanba, 07:00–12:00", filled: 2, total: 5 },
      ],
    },
  },

  steps: {
    title: "E’londan to‘lovgacha to‘rt qadam",
    items: [
      {
        title: "Smenani e’lon qiling",
        text: "Vazifa, manzil, vaqt, to‘lov va nechta odam kerakligi. Smena va bir martalik topshiriqlar uchun shablonlar bor.",
      },
      {
        title: "Ijrochilarni tanlang",
        text: "Yaqin atrofdagi odamlardan javoblar keladi. Reyting, kompaniyalar sharhlari va smenalar soni ko‘rinadi.",
      },
      {
        title: "Ishni qabul qiling",
        text: "Ijrochilar ilovada smena boshlanishi va tugashini belgilaydi, siz natijani tasdiqlaysiz.",
      },
      {
        title: "Bitta reestr bilan to‘lang",
        text: "Dalolatnomalar o‘zi tuziladi, barcha ijrochilarga to‘lov Bajar kabinetidan ketadi.",
      },
    ],
  },

  features: {
    title: "Tanlov, hujjatlar va to‘lov bitta kabinetda",
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

  roles: {
    title: "Kimlarni topish mumkin",
    items: [
      { label: "Kuryerlar va haydovchilar", image: "/img/driver.webp", alt: "Mashina kalitini ushlagan haydovchi" },
      { label: "Yig‘uvchilar va yuk tashuvchilar", image: "/img/warehouse.webp", alt: "Skaner va quti ushlagan buyurtma yig‘uvchi" },
      { label: "Ofitsiantlar va xostes", image: "/img/waiter.webp", alt: "Patnis ushlagan ofitsiant ayol" },
      { label: "Call-markaz operatorlari", image: "/img/callcenter.webp", alt: "Garnitura taqqan operator" },
    ],
    tagsLabel: "Shuningdek",
    tags: ["merchendayzerlar", "promouterlar", "tozalash", "ustalar", "o‘qituvchilar", "onlayn topshiriqlar"],
  },

  band: {
    title: "Ijrochilaringiz allaqachon bormi?",
    text: "Bajar To‘lovlar’ni ulang: doimiy ijrochilar bilan shartnomalar, dalolatnomalar va to‘lovlar qo‘l mehnatisiz.",
    cta: "Bajar To‘lovlar",
  },

  faq: {
    title: "Ko‘p beriladigan savollar",
    items: [
      {
        q: "Bajar Birja Bajar To‘lovlar’dan nimasi bilan farq qiladi?",
        a: "To‘lovlar ijrochilaringiz allaqachon bo‘lganda kerak. Birja yangilarini topishga yordam beradi: siz smenani e’lon qilasiz, shartnoma, dalolatnoma va to‘lov esa to‘lovlar kabinetidagidek davom etadi.",
      },
      {
        q: "Smenalarga kim javob beradi?",
        a: "Bajar Qo‘shimcha ish’dagi o‘zini o‘zi band qilganlar, YaTT va jismoniy shaxslar. Ro‘yxatdan o‘tishda har biri shaxsini tasdiqlaydi, to‘lovdan oldin esa Bajar uning maqomini tekshiradi.",
      },
      {
        q: "Odamlarni qanchalik tez topish mumkin?",
        a: "Smenani darhol obyekt yaqinidagi ijrochilar ko‘radi. Tanlov tezligi tuman, vaqt va to‘lovga bog‘liq, menejer esa smenani qanday jozibali qilishni maslahat beradi.",
      },
      {
        q: "Ish qanday to‘lanadi?",
        a: "Balansni hisob raqamidan o‘tkazma bilan to‘ldirasiz. Qabul qilingandan keyin dalolatnomalar o‘zi tuziladi, to‘lov esa Uzcard va Humo kartalariga bitta reestr bilan ketadi.",
      },
      {
        q: "Joylashtirish qancha turadi?",
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
