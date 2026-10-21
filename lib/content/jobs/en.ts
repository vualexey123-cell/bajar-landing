import type { JobsDict } from "@/lib/content/jobs/ru";

export const jobsEn: JobsDict = {
  meta: {
    title: "Bajar Gigs: shifts and tasks near home",
    description:
      "Side jobs near home, paid to your Uzcard or Humo card. Companies find contractors for shifts and tasks, with the contract, act and payout handled for them.",
    ogTitle: "Bajar Gigs: shifts near home, paid to your card",
    ogDescription: "Contractors find side jobs near home, companies find people for their shifts.",
  },

  hero: {
    title: "Side jobs near home, paid to your card",
    text: "Shifts and one-off tasks from companies in your district. You pick the time, and the contract, act and payout are handled in the app.",
    chips: ["Up to 260,000 UZS a shift", "No experience needed", "Shifts from 4 hours", "Paid to Uzcard and Humo"],
    primary: "See gigs",
    soft: "I'm hiring",
    photos: [
      { src: "/img/warehouse.webp", alt: "Order picker with a scanner and a box" },
      { src: "/img/waiter.webp", alt: "Waitress holding a tray" },
      { src: "/img/cleaner.webp", alt: "Cleaner holding a spray bottle" },
      { src: "/img/driver.webp", alt: "Driver holding car keys" },
    ],
    phone: {
      title: "Gigs nearby",
      location: "Chilanzar",
      filters: ["Today", "Evening", "No experience"],
      perShift: "per shift",
      items: [
        { title: "Order picker", meta: "Warehouse, Sergeli · 18:00–23:00", pay: "180,000" },
        { title: "Promoter", meta: "Shopping mall · 10:00–16:00", pay: "150,000" },
        { title: "Banquet waiter", meta: "Restaurant, Mirabad · 17:00–23:00", pay: "250,000" },
        { title: "Office cleaning", meta: "Business center · 19:00–23:00", pay: "130,000" },
      ],
    },
  },

  teaser: {
    title: "Looking for people for your shifts?",
    text: "Post a gig and contractors near your site will see it. The contract, act and payout are handled for you.",
    cta: "Go to Bajar Hire",
  },

  benefits: {
    title: "Gigs, documents and payouts in one app",
    map: {
      title: "Gigs near home",
      text: "Filter by district, day and type of work. Pay, address and length are visible before you apply.",
      pins: ["180,000", "150,000", "250,000", "130,000", "220,000"],
    },
    payout: {
      title: "Paid to your card",
      text: "The company accepts the work, the act is generated automatically and the money goes to your Uzcard or Humo card.",
      items: [
        { amount: "+180,000", card: "Humo •• 4417", from: "Warehouse, Sergeli" },
        { amount: "+150,000", card: "Uzcard •• 0912", from: "Promo, Chilanzar" },
      ],
    },
    docs: {
      title: "Documents on your phone",
      text: "The contract and act are signed in the app, with no trips to an office.",
      act: "Act No. 214",
      sum: "180,000",
      sign: "Sign",
    },
    status: {
      title: "Help with self-employed status",
      text: "If you are not registered yet, the app shows how to do it online.",
      steps: ["Passport", "Self-employed status", "Card for payouts"],
    },
    rating: {
      title: "Your rating unlocks the best shifts",
      text: "The more shifts you complete without cancelling, the earlier you see new gigs.",
      score: "4.9",
      stats: ["32 shifts", "no cancellations"],
    },
  },

  board: {
    title: "Pick any day and time",
    text: "This is how gigs look in the app. These are examples; real shifts appear once we launch in your district.",
    daysLabel: "Day",
    days: ["Today", "Tomorrow", "In two days", "Weekend"],
    categoriesLabel: "Type of work",
    categories: {
      all: "All",
      warehouse: "Warehouses",
      delivery: "Delivery",
      retail: "Retail and promo",
      events: "Events",
      cleaning: "Cleaning",
    },
    shifts: { day: "Day", evening: "Evening", night: "Night" },
    perShift: "per shift",
    hours: "h",
    empty: "No gigs of this type on that day. Try another day or type of work.",
    cta: "Follow new gigs on Telegram",
    gigs: [
      { day: 0, cat: "warehouse", title: "Order picker", place: "Warehouse, Sergeli", time: "18:00–23:00", shift: "evening", pay: 180_000, hours: 5 },
      { day: 0, cat: "delivery", title: "Bike courier", place: "Food delivery, Yunusabad", time: "11:00–19:00", shift: "day", pay: 220_000, hours: 8 },
      { day: 0, cat: "retail", title: "Merchandiser", place: "Supermarket, Chilanzar", time: "08:00–14:00", shift: "day", pay: 140_000, hours: 6 },
      { day: 1, cat: "warehouse", title: "Unloading goods", place: "Warehouse, Yashnabad", time: "07:00–12:00", shift: "day", pay: 160_000, hours: 5 },
      { day: 1, cat: "events", title: "Banquet waiter", place: "Restaurant, Mirabad", time: "17:00–23:00", shift: "evening", pay: 250_000, hours: 6 },
      { day: 1, cat: "cleaning", title: "Office cleaning", place: "Business center, Mirzo Ulugbek", time: "19:00–23:00", shift: "evening", pay: 130_000, hours: 4 },
      { day: 2, cat: "retail", title: "Promoter", place: "Shopping mall, Chilanzar", time: "10:00–16:00", shift: "day", pay: 150_000, hours: 6 },
      { day: 2, cat: "warehouse", title: "Stocktaking", place: "Electronics store, Shaykhantakhur", time: "22:00–06:00", shift: "night", pay: 240_000, hours: 8 },
      { day: 2, cat: "delivery", title: "Courier with own car", place: "Parcel delivery, Sergeli", time: "09:00–18:00", shift: "day", pay: 260_000, hours: 9 },
      { day: 3, cat: "events", title: "Exhibition host", place: "Exhibition center, Yunusabad", time: "09:00–17:00", shift: "day", pay: 200_000, hours: 8 },
      { day: 3, cat: "cleaning", title: "Post-renovation cleaning", place: "Apartment, Yakkasaray", time: "10:00–16:00", shift: "day", pay: 180_000, hours: 6 },
      { day: 3, cat: "warehouse", title: "Order picker", place: "Dark store, Mirabad", time: "08:00–16:00", shift: "day", pay: 190_000, hours: 8 },
    ],
  },

  steps: {
    title: "How to get your first shift",
    items: [
      {
        title: "Sign up",
        text: "With your phone number. You will need a passport and an Uzcard or Humo card for payouts.",
      },
      {
        title: "Register as self-employed",
        text: "If you are not registered yet, the app shows how to do it online.",
      },
      {
        title: "Pick a gig",
        text: "By district, day and type of work. Apply in a couple of taps, with no interviews.",
      },
      {
        title: "Get paid",
        text: "The company accepts the work, you sign the act on your phone, and the money lands on your card.",
      },
    ],
  },

  audiences: {
    title: "Side jobs that fit your schedule",
    items: [
      { label: "For students", image: "/img/student.webp", alt: "Student with a backpack and a phone" },
      { label: "After your main job", image: "/img/office.webp", alt: "Man in a shirt with a jacket over his shoulder" },
      { label: "For handy people", image: "/img/builder.webp", alt: "Handyman holding a power drill" },
      { label: "On weekends", image: "/img/hostess.webp", alt: "Host holding a tablet" },
    ],
    tagsLabel: "Also gigs that are",
    tags: ["no experience", "near home", "4 hours long", "one-off", "on weekends", "in the evening", "at night"],
  },

  band: {
    title: "Already working with a company?",
    text: "If your client pays through Bajar, the contract, acts and payouts come to the same app.",
    cta: "Get paid",
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Who can take gigs?",
        a: "Self-employed people, sole traders and individuals. If you are not registered as self-employed yet, the app shows how to do it online.",
      },
      {
        q: "When do I get paid?",
        a: "Once the company accepts the work and you sign the act in the app. The money usually reaches your Uzcard or Humo card within minutes.",
      },
      {
        q: "Do I need experience?",
        a: "Not for many gigs. Each gig card says what skills are needed and which documents to bring.",
      },
      {
        q: "Can I take gigs from different companies?",
        a: "Yes. You choose gigs from any company on Bajar Gigs and work when it suits you.",
      },
    ],
  },
};
