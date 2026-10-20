import type { JobsDict } from "@/lib/content/jobs/ru";

export const jobsUz: JobsDict = {
  meta: {
    title: "Bajar Qo‘shimcha ish: O‘zbekistonda smena va topshiriqlar uchun ijrochilar",
    description:
      "Vaqtinchalik ish birjasi: kompaniyalar smena, topshiriq va mavsumiy ishlar uchun tekshirilgan ijrochilarni topadi, odamlar esa uyiga yaqin, kartaga to‘lanadigan qo‘shimcha ish topadi.",
    ogTitle: "Bajar Qo‘shimcha ish: kartaga to‘lanadigan smena va topshiriqlar",
    ogDescription: "Kompaniyalar smena va topshiriqlar uchun ijrochi topadi, odamlar uyiga yaqin qo‘shimcha ish topadi.",
  },

  nav: [
    { label: "Qanday ishlaydi", href: "#how" },
    { label: "Kompaniyalarga", href: "#business" },
    { label: "Ijrochilarga", href: "#workers" },
    { label: "Savollar", href: "#faq" },
  ],

  cta: {
    primary: "Ish joylashtirish",
    soft: "Qo‘shimcha ish qidiryapman",
  },

  hero: {
    title: "Smena, topshiriq yoki mavsum uchun ijrochilar",
    text: "Qo‘shimcha ishni joylashtiring, uni obyektingiz yaqinidagi tekshirilgan ijrochilar ko‘radi. Shartnoma, dalolatnoma va kartaga to‘lov o‘zi rasmiylashtiriladi.",
    imageAlt: "Ijrochi ayol mahsulotlar solingan quti ushlab turibdi",
    feedLabel: "Yaqin atrofdagi ishlar",
    apply: "Javob berish",
    perShift: "smena uchun",
    items: [
      { title: "Buyurtma yig‘uvchi", place: "Ombor, Sergeli", time: "Bugun, 18:00–23:00", pay: "180 000" },
      { title: "Savdo markazida promouter", place: "Chilonzor", time: "Shanba, 10:00–16:00", pay: "150 000" },
      { title: "Banketda ofitsiant", place: "Mirobod", time: "Juma, 17:00–23:00", pay: "250 000" },
    ],
    toast: "Smena qabul qilindi, kartada 180 000 so‘m",
  },

  steps: {
    title: "E’londan to‘lovgacha bitta joyda",
    items: [
      {
        title: "Vazifani tasvirlang",
        text: "Nima qilish kerak, qayerda va qachon, qancha to‘laysiz. Smena, bir martalik topshiriq va mavsumiy loyihalar uchun shablonlar bor.",
      },
      {
        title: "Ijrochilarni tanlang",
        text: "Yaqin atrofdagi odamlardan javoblar keladi. Reyting, sharhlar va ishlangan smenalar soni ko‘rinadi.",
      },
      {
        title: "Ishni qabul qiling",
        text: "Ijrochi ilovada smena boshlanishi va tugashini belgilaydi, siz esa natijani kabinetda tasdiqlaysiz.",
      },
      {
        title: "Dalolatnoma va to‘lov o‘zi",
        text: "Qabul qilingandan keyin Bajar dalolatnoma tuzadi va pulni Uzcard yoki Humo kartasiga yuboradi.",
      },
    ],
  },

  business: {
    title: "Kompaniyalarga: shtatga olmasdan smenalarni yopish",
    text: "Gavjum kunlar, mavsumiy loyihalar va to‘liq kunlik xodim kerak bo‘lmagan vazifalar uchun.",
    points: [
      { icon: "lightning", title: "Tez tanlov", text: "Ishni darhol obyektingiz yaqinidagi ijrochilar ko‘radi." },
      {
        icon: "star",
        title: "Reyting va sharhlar",
        text: "Har bir ijrochining boshqa kompaniyalar qoldirgan sharhlari va ishlangan smenalar tarixi ko‘rinadi.",
      },
      {
        icon: "users",
        title: "O‘z ijrochilaringiz ro‘yxati",
        text: "Ishlash yoqqan ijrochilarni saqlang va yangi smenalarni avval ularga taklif qiling.",
      },
      {
        icon: "files",
        title: "Hujjatlar va to‘lov",
        text: "Shartnomalar, dalolatnomalar va to‘lovlar o‘sha Bajar kabinetida, buxgalteriya uchun alohida ishsiz.",
      },
    ],
  },

  workers: {
    title: "Ijrochilarga: uyga yaqin qo‘shimcha ish",
    text: "Kompaniyalardan smenalar va bir martalik topshiriqlar. Qachon va qancha ishlashni o‘zingiz hal qilasiz.",
    points: [
      "Uyga yaqin va qulay vaqtdagi ishlar",
      "Ish qabul qilingach Uzcard yoki Humo kartasiga to‘lov",
      "Shartnoma va dalolatnoma telefonda imzolanadi",
      "O‘zini o‘zi band qilgan maqomini rasmiylashtirishga yordam beramiz",
      "Yaxshi reyting ko‘proq takliflar ochadi",
    ],
    cta: "Telegram’dagi qo‘shimcha ishlar",
    imageAlt: "Bajar ijrochi ilovasi: oylik daromad, imzolash uchun dalolatnoma va to‘lovlar tarixi",
  },

  categories: {
    title: "Qanday ishlarni joylashtirish mumkin",
    items: [
      { icon: "truck", name: "Yetkazib berish", text: "Kuryerlar, haydovchilar, ekspeditorlar" },
      { icon: "package", name: "Omborlar", text: "Buyurtma yig‘ish, yuk tushirish, inventarizatsiya" },
      { icon: "storefront", name: "Riteyl va promo", text: "Merchendayzerlar, promouterlar, maslahatchilar" },
      { icon: "event", name: "Tadbirlar", text: "Ofitsiantlar, xostes, maydonni jihozlash" },
      { icon: "cleaning", name: "Tozalash", text: "Ofislar, omborlar, ta’mirdan keyingi tozalash" },
      { icon: "repair", name: "Ta’mir va montaj", text: "Ustalar, yordamchi ishchilar, mebel yig‘ish" },
      { icon: "calls", name: "Call-markaz", text: "Qo‘ng‘iroqlar, qo‘llab-quvvatlash, so‘rovnomalar" },
      { icon: "online", name: "Onlayn topshiriqlar", text: "Dizayn, matnlar, ma’lumotlarni belgilash" },
    ],
  },

  faq: {
    title: "Ko‘p beriladigan savollar",
    items: [
      {
        q: "Birja Bajar to‘lovlaridan nimasi bilan farq qiladi?",
        a: "To‘lovlar ijrochilaringiz allaqachon bo‘lganda kerak. Birja yangilarini topishga yordam beradi: siz smena yoki topshiriqni e’lon qilasiz, shartnoma, dalolatnoma va to‘lov esa asosiy kabinetdagidek davom etadi.",
      },
      {
        q: "Ishlarga kim javob bera oladi?",
        a: "O‘zini o‘zi band qilganlar, YaTT va jismoniy shaxslar. Agar odamda hali o‘zini o‘zi band qilgan maqomi bo‘lmasa, ilova uni qanday rasmiylashtirishni ko‘rsatadi.",
      },
      {
        q: "Ijrochilar qanday tekshiriladi?",
        a: "Ro‘yxatdan o‘tishda ijrochi shaxsini tasdiqlaydi, har bir to‘lovdan oldin esa Bajar uning maqomini tekshiradi. Har smenadan keyin kompaniya sharh qoldiradi va uni boshqa buyurtmachilar ko‘radi.",
      },
      {
        q: "Ijrochi pulni qanday oladi?",
        a: "Kompaniya ishni tasdiqlaydi, dalolatnoma o‘zi tuziladi va pul Uzcard yoki Humo kartasiga ketadi. Odatda bu bir necha daqiqa oladi.",
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
