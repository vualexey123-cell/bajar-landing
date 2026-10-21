import type { GetPaidDict } from "@/lib/content/getpaid/ru";

export const getPaidUz: GetPaidDict = {
  meta: {
    title: "Bajar’da to‘lovlarni olish: buyurtmachidan kartaga to‘lov",
    description:
      "Agar buyurtmachi Bajar orqali ishlasa, shartnoma, dalolatnomalar va to‘lovlar ilovaga keladi. Hujjatlarni telefonda imzolang va pulni Uzcard yoki Humo kartasiga oling.",
    ogTitle: "Bajar’da to‘lovlarni olish: buyurtmachidan kartaga to‘lov",
    ogDescription: "Buyurtmachidan shartnoma, dalolatnomalar va to‘lovlar bitta ilovada. Pul Uzcard yoki Humo kartasiga keladi.",
  },

  hero: {
    title: "Buyurtmachidan kartaga to‘lov, hujjatlar telefonda",
    text: "Agar kompaniya Bajar orqali ishlasa, shartnoma, dalolatnomalar va to‘lovlar ilovaga keladi. Hujjatlarni telefonda imzolaysiz, pul esa Uzcard yoki Humo kartasiga tushadi.",
    chips: ["Dalolatnoma imzolangach to‘lov", "Uzcard va Humo", "Daromad haqida ma’lumotnomalar", "O‘z qo‘llab-quvvatlash xizmati"],
    primary: "Qanday boshlash",
    soft: "Qo‘shimcha ish topish",
    photos: [
      { src: "/img/media.webp", alt: "Kamera ushlagan videograf" },
      { src: "/img/it.webp", alt: "Noutbuk ushlagan dasturchi" },
      { src: "/img/other.webp", alt: "Telefoniga qarayotgan ijrochi ayol" },
      { src: "/img/tutor.webp", alt: "Daftarlar ushlagan o‘qituvchi" },
    ],
    phoneAlt: "Bajar ijrochi ilovasi: oylik daromad, imzolash uchun dalolatnoma va to‘lovlar tarixi",
  },

  benefits: {
    title: "To‘lovlaringiz haqida hammasi bitta ilovada",
    history: {
      title: "To‘lovlar tarixi",
      text: "Har bir to‘lov bo‘yicha kim, nima uchun, qancha va qachon to‘laganini ko‘rasiz.",
      statuses: { paid: "Olindi", pending: "Dalolatnoma imzosini kutmoqda" },
      items: [
        { from: "Bilim Academy", what: "Kurs uchun slaydlar", amount: "+2 200 000", status: "pending" },
        { from: "Navo Logistics", what: "24 ta buyurtma yetkazish", amount: "+360 000", status: "paid" },
        { from: "Chaqmoq Studio", what: "4 ta rolik suratga olish", amount: "+1 600 000", status: "paid" },
        { from: "Navo Logistics", what: "18 ta buyurtma yetkazish", amount: "+270 000", status: "paid" },
      ],
    },
    act: {
      title: "Dalolatnoma telefonda imzolanadi",
      text: "Shartnoma va dalolatnomalar ilovaga keladi. Ofisga borish yoki kuryer kutish shart emas.",
      doc: "Dalolatnoma № 128",
      company: "Bilim Academy",
      sum: "2 200 000",
      sign: "Imzolash",
    },
    status: {
      title: "O‘zini o‘zi band qilgan maqomi nazoratda",
      text: "Bajar har bir to‘lovdan oldin maqomni tekshiradi va biror narsani yangilash kerak bo‘lsa, eslatadi.",
      check: "Maqom bugun tekshirildi",
    },
    docs: {
      title: "Daromad haqida ma’lumotnomalar",
      text: "Bank yoki viza uchun ma’lumotnomani o‘zingiz yuklab olasiz, buyurtmachi buxgalteriyasiga murojaatsiz.",
      file: "2026 yil uchun daromad haqida ma’lumotnoma",
      download: "PDF yuklab olish",
    },
    support: {
      title: "O‘z qo‘llab-quvvatlash xizmati",
      text: "To‘lovlar va hujjatlar bo‘yicha savollarni buyurtmachi buxgalteriyasi emas, ilova va Telegram’dagi Bajar qo‘llab-quvvatlash xizmati hal qiladi.",
      chat: [
        { from: "you", text: "128-dalolatnoma uchun pul qachon keladi?" },
        { from: "support", text: "Dalolatnomani imzolashingiz bilan to‘lov Humo •• 4417 kartasiga ketadi." },
      ],
    },
  },

  steps: {
    title: "Birinchi to‘lovni qanday olish mumkin",
    items: [
      {
        title: "Taklifnoma oling",
        text: "Kompaniya havola yuboradi. Telefon raqami orqali ro‘yxatdan o‘tish bir necha daqiqa oladi.",
      },
      {
        title: "Ma’lumotlarni tasdiqlang",
        text: "Pasport, maqom va Uzcard yoki Humo kartasi. Agar o‘zini o‘zi band qilgan maqomi bo‘lmasa, ilova uni qanday rasmiylashtirishni ko‘rsatadi.",
      },
      {
        title: "Shartnomani imzolang",
        text: "Buyurtmachi bilan shartnoma ilovaga keladi va telefonda imzolanadi.",
      },
      {
        title: "To‘lovlarni oling",
        text: "Har bir imzolangan dalolatnomadan keyin pul kartaga tushadi.",
      },
    ],
  },

  band: {
    title: "Ko‘proq buyurtma xohlaysizmi?",
    text: "Bajar Qo‘shimcha ish’da uyga yaqin smena va bir martalik topshiriqlarni toping. To‘lovlar o‘sha ilovaga keladi.",
    cta: "Bajar Qo‘shimcha ish",
  },

  faq: {
    title: "Ko‘p beriladigan savollar",
    items: [
      {
        q: "Bajar orqali to‘lovlarni olishni qanday boshlash mumkin?",
        a: "Buyurtmachidan sizni Bajar’ga ulashni so‘rang yoki kompaniyadan taklifnoma kuting. Havola orqali ro‘yxatdan o‘tasiz, shartnomani imzolaysiz va to‘lovlar uchun kartani ko‘rsatasiz.",
      },
      {
        q: "O‘zini o‘zi band qilgan maqomi kerakmi?",
        a: "Bajar o‘zini o‘zi band qilganlar, YaTT va jismoniy shaxslar bilan ishlaydi. Qaysi maqom kerakligi buyurtmachi bilan shartnomaga bog‘liq, ilova esa o‘zini o‘zi band qilganlikni onlayn rasmiylashtirishni ko‘rsatadi.",
      },
      {
        q: "Pul qachon keladi?",
        a: "Dalolatnomani imzolaganingizdan keyin. Odatda to‘lov Uzcard yoki Humo kartasiga bir necha daqiqada tushadi.",
      },
      {
        q: "To‘lov kelmasa nima qilish kerak?",
        a: "Ilova yoki Telegram’dagi Bajar qo‘llab-quvvatlash xizmatiga yozing. To‘lov holatini tekshiramiz va nima qilish kerakligini aytamiz.",
      },
    ],
  },
};
