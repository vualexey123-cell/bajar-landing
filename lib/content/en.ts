import type { Dict } from "./ru";

// English dictionary. Same shape as ru.ts.
export const en: Dict = {
  meta: {
    title: "Bajar: payouts to sole traders, self-employed and individuals in Uzbekistan",
    description:
      "Tasks, contracts, acts and payouts to Uzcard and Humo cards in one dashboard. For companies that work with sole traders, self-employed people and individuals.",
    ogTitle: "Bajar: simple, fast and legal payouts to contractors",
    ogDescription: "Tasks, contracts, acts and payouts to Uzcard and Humo cards in one dashboard.",
    ogLocale: "en_US",
  },
  ui: {
    home: "Bajar, home",
    mainNav: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Site language",
    heroImageAlt: "Company dashboard in Bajar: balance, payouts by day, documents to sign and recent payouts",
    currency: "UZS",
    mln: "M",
    bln: "B",
    country: "Uzbekistan",
    city: "Tashkent",
  },
  products: {
    business: {
      label: "For business",
      items: {
        home: { name: "Bajar Payouts", text: "A platform that automates payouts and work with freelance staff" },
        hire: { name: "Bajar Hire", text: "A platform for finding and hiring temporary staff" },
      },
    },
    workers: {
      label: "For contractors",
      items: {
        jobs: { name: "Bajar Gigs", text: "A platform for finding temporary tasks" },
        getpaid: { name: "Get paid", text: "A platform for receiving payouts from clients" },
      },
    },
  },

  cta: {
    primary: "Book a demo",
    soft: "Calculate savings",
  },

  hero: {
    title: "Simple, fast and legal payouts to sole traders, self-employed and individuals",
    text: "Contracts, acts and payouts to Uzcard and Humo cards are handled for you. Accounting only approves the registry.",
  },

  alternatives: {
    title: "Bajar automates tasks, paperwork and payments",
    text: "",
    columns: ["Manual transfers", "Bajar"],
    rows: [
      {
        topic: "Tasks",
        cells: [
          { text: "In messengers and spreadsheets, accepted verbally", ok: false },
          { text: "Assign tasks, review the result and approve it in the dashboard", ok: true },
        ],
      },
      {
        topic: "Contract",
        cells: [
          { text: "Paper, signatures, scans", ok: false },
          { text: "From a template, signed by phone or via E-IMZO", ok: true },
        ],
      },
      {
        topic: "Act of acceptance",
        cells: [
          { text: "Collected from each contractor", ok: false },
          { text: "Generated once a task is approved and signed online", ok: true },
        ],
      },
      {
        topic: "Money transfer",
        cells: [
          { text: "100 transfers, one by one", ok: false },
          { text: "One registry to Uzcard and Humo cards", ok: true },
        ],
      },
      {
        topic: "Status check",
        cells: [
          { text: "Manual", ok: false },
          { text: "Before every payout", ok: true },
        ],
      },
      {
        topic: "Time for 100 payouts",
        cells: [
          { text: "about 58 hours", ok: false },
          { text: "under an hour", ok: true },
        ],
      },
    ],
    note: "Time is an estimate: about 35 minutes of manual work per payout.",
  },

  features: {
    title: "One dashboard instead of Excel, the bank and messengers",
    text: "Everything you need to pay contractors every week without collecting documents by hand.",
    payouts: {
      title: "Mass payouts",
      text: "Upload a registry from Excel or select approved acts. A hundred payouts go out in one action, and you can see the status of each one.",
      rows: [
        { name: "Aziz Rakhimov", card: "Uzcard •• 0912", amount: "360,000" },
        { name: "Dilnoza Karimova", card: "Humo •• 2281", amount: "1,440,000" },
        { name: "Shakhzod Tursunov", card: "Uzcard •• 7730", amount: "168,000" },
        { name: "Madina Akhmedova", card: "Humo •• 5054", amount: "1,600,000" },
        { name: "Kamila Yusupova", card: "Humo •• 4417", amount: "1,500,000" },
        { name: "Jasur Khasanov", card: "Uzcard •• 3368", amount: "2,700,000" },
      ],
      pending: "Processing",
      done: "Paid",
      registry: "Registry no. 128",
      sent: "Sent {count} of {total}",
    },
    tasks: {
      title: "Task management",
      text: "Assign tasks to contractors, accept the result and pay right in the dashboard. The act is generated once you accept the work.",
      flow: ["Assign", "Accept", "Pay"],
      accept: "Accept",
      statuses: { review: "In review", accepted: "Accepted", paid: "Paid" },
      items: [
        { title: "Design of 6 banners", who: "Kamila Yusupova", amount: "1,500,000", status: "review" },
        { title: "Delivery of 24 orders", who: "Aziz Rakhimov", amount: "360,000", status: "accepted" },
        { title: "4 short videos", who: "Madina Akhmedova", amount: "1,600,000", status: "paid" },
      ],
    },
    docs: {
      title: "Electronic documents",
      text: "Contracts, tasks and acts are generated from templates. Contractors sign by phone, the company via E-IMZO.",
      items: ["Contract", "Task", "Act"],
    },
    onboarding: {
      title: "Onboarding by link",
      text: "Send a contractor a link. They sign up from their phone, and we verify their passport and status.",
      joined: "38 contractors joined via the link",
    },
    manager: {
      title: "Dedicated manager",
      text: "Your manager sets up the company, helps you invite contractors and stays in touch on Telegram.",
      image: "/img/manager.webp",
      alt: "Bajar dedicated manager",
      role: "Your manager",
      status: "Available on Telegram",
    },
    api: {
      title: "API and 1C export",
      text: "Acts and registries go to 1C, and the REST API lets you trigger payouts right from your own system.",
    },
  },

  steps: {
    title: "From contract to payout in four steps",
    items: [
      {
        title: "Connect your company",
        text: "Sign the offer via E-IMZO and top up the balance by bank transfer.",
      },
      {
        title: "Invite contractors",
        text: "Send a link. The contractor signs up, and we verify their passport and status.",
      },
      {
        title: "Create a task",
        text: "Manually, by registry or via API. The contract and task are generated from templates.",
      },
      {
        title: "Approve and pay",
        text: "Once the act is signed, the money goes to the card and the documents are saved in the dashboard.",
      },
    ],
  },

  contractors: {
    title: "A new level of convenience for contractors",
    text: "Fast payouts and clear documents make it easier to hire and keep people. Every contractor gets the Bajar app.",
    image: {
      src: "/img/contractor-app.webp",
      alt: "Bajar contractor app: monthly earnings, an act to sign and payout history",
    },
    points: [
      {
        icon: "signature",
        title: "Signing by phone",
        text: "Contractors sign contracts and acts themselves, with no office visits or couriers.",
      },
      {
        icon: "card",
        title: "Money to the card",
        text: "The payout reaches the Uzcard or Humo card right after the act is signed. Fewer “when do I get paid” questions.",
      },
      {
        icon: "support",
        title: "Their own support",
        text: "Contractors have their own support team in the app and on Telegram. Their questions never reach your accounting.",
      },
      {
        icon: "document",
        title: "Income statements",
        text: "Contractors download statements for banks or visas themselves, without asking your accounting team.",
      },
    ],
  },

  demoCta: {
    title: "See Bajar on your own payouts",
    text: "We will look at how you pay contractors today, walk you through the dashboard on your own case and estimate how much time your accounting team gets back.",
  },

  industries: {
    taskLabel: "Example task",
    items: [
      {
        id: "delivery",
        name: "Delivery and logistics",
        image: "/img/courier.webp",
        alt: "Courier with an insulated bag looking at his phone",
        text: "Couriers, drivers and movers on piece rates. Payouts after every shift or once a week.",
        task: { title: "Order delivery", qty: "24 orders", rate: "15,000 UZS each", total: "360,000 UZS" },
      },
      {
        id: "retail",
        name: "Retail and warehouses",
        image: "/img/retail.webp",
        alt: "Merchandiser holding a box of products",
        text: "Merchandisers, promoters and order pickers for peak seasons without growing your headcount.",
        task: { title: "Shelf stocking", qty: "140 items", rate: "1,200 UZS each", total: "168,000 UZS" },
      },
      {
        id: "it",
        name: "IT and design",
        image: "/img/it.webp",
        alt: "Developer holding an open laptop",
        text: "Developers, designers and copywriters on project work. A contract and an act for every stage.",
        task: { title: "Banner design", qty: "6 banners", rate: "250,000 UZS each", total: "1,500,000 UZS" },
      },
      {
        id: "education",
        name: "Education",
        image: "/img/tutor.webp",
        alt: "Tutor holding notebooks and a book",
        text: "Tutors, course teachers and methodologists. Paid for the lessons actually taught.",
        task: { title: "English lessons", qty: "12 lessons", rate: "120,000 UZS each", total: "1,440,000 UZS" },
      },
      {
        id: "repair",
        name: "Repair and construction",
        image: "/img/builder.webp",
        alt: "Repair specialist with a cordless drill",
        text: "Specialists and crews on site. An act for every stage and a payout right after acceptance.",
        task: { title: "Electrical installation", qty: "3 rooms", rate: "900,000 UZS each", total: "2,700,000 UZS" },
      },
      {
        id: "media",
        name: "Media and content",
        image: "/img/media.webp",
        alt: "Videographer with a camera on a gimbal",
        text: "Videographers, editors and social media specialists. Paid per video or per post.",
        task: { title: "Short video shoots", qty: "4 videos", rate: "400,000 UZS each", total: "1,600,000 UZS" },
      },
      {
        id: "other",
        name: "Other",
        image: "/img/other.webp",
        alt: "Contractor in a light sweater looking at her phone",
        text: "Freelancers, translators, consultants, promo staff and other contractors. A contract, an act and a payout for every task.",
        task: { title: "Document translation", qty: "20 pages", rate: "60,000 UZS each", total: "1,200,000 UZS" },
      },
    ],
  },

  pricing: {
    title: "A commission on payouts. No subscription fee",
    text: "Onboarding, the dashboard and support are free, and the rate goes down as your volume grows. Pick your industry or set your own numbers.",
    industryLabel: "Industry",
    sliderLabel: "Monthly payouts to contractors",
    stops: [5, 10, 20, 30, 50, 75, 100, 150, 200, 300, 500, 750, 1000, 1500, 2000],
    defaultStop: 6,
    tiers: [
      { upTo: 100, rate: 2.5, label: "up to 100M" },
      { upTo: 500, rate: 2, label: "100-500M" },
      { upTo: 1000, rate: 1.5, label: "500M - 1B" },
    ],
    customLabel: "over 1B",
    customNote: "For volumes over UZS 1 billion a month, we will set the rate individually.",
    feeLabel: "Bajar commission",
    totalLabel: "Total top-up",
    cta: "Book a demo",
    tiersLabel: "Rates by volume",
    customShort: "Custom",
    payoutsUnit: "payouts",
    volumeMln: "{n}M UZS",
    volumeBln: "{n}B UZS",
    hoursLine: "about {n} {unit} a month",
    hourOne: "hour",
    hourMany: "hours",
    payoutsLabel: "Payouts to contractors per month",
    payoutStops: [10, 25, 50, 100, 200, 300, 500, 750, 1000, 1500, 2000],
    defaultPayoutStop: 6,
    bankLabel: "Your bank's transfer fee today",
    bankStops: [0, 0.25, 0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3],
    defaultBankStop: 4,
    minutesPerPayout: 35,
    timeLabel: "Time freed up for accounting",
    timeNote: "One full-time accountant handles about {n} payouts a month at 35 minutes each: transfer, contract and act.",
    accountantHours: 168,
    accountantSalary: 12_000_000,
    savingsLabel: "You save per month",
    staffExtra: "plus the working time of {n} {unit}",
    accountantForms: { one: "accountant", few: "accountants", many: "accountants", other: "accountants" },
    nowBankLabel: "Bank fees",
    nowWorkLabel: "Accountant salary",
    lowSavingsNote: "With few large payouts, the main gain is accounting time and orderly paperwork. We will set a custom rate for this volume.",
    moneyNote: "Based on the average Tashkent salary of about UZS 12 million a month.",
  },

  security: {
    title: "Money, data and documents, protected",
    titleWithCompany: "Who is behind Bajar and how your money is protected",
    companyLabel: "Company",
    companyFields: { stir: "Tax ID (STIR)", address: "Address", bank: "Partner bank", founder: "Founder" },
    text: "Bajar checks every contractor's status before a payout and keeps a full set of documents for each one.",
    items: [
      {
        icon: "server",
        title: "Servers in Uzbekistan",
        text: "Contractors' personal data is stored in the country, as the law requires.",
      },
      {
        icon: "bank",
        title: "Funds at a bank",
        text: "Company funds are held in an account at a partner bank until payout.",
      },
      {
        icon: "signature",
        title: "Legally binding signatures",
        text: "Documents are signed via E-IMZO and carry the same weight as paper ones.",
      },
      {
        icon: "lock",
        title: "Audit log and roles",
        text: "Every action in the dashboard is logged, and access is role-based.",
      },
    ],
  },

  faq: {
    title: "FAQ",
    items: [
      {
        q: "Why is this better than card-to-card transfers?",
        a: "A transfer only covers the payment. Bajar also manages tasks, prepares the contract and act and checks the contractor's status, so accounting has a complete set of documents for every payout.",
      },
      {
        q: "What does a company need to get started?",
        a: "Company details and the director's digital signature to sign the offer via E-IMZO. Your manager will help set up the dashboard and invite your first contractors.",
      },
      {
        q: "How fast do contractors get paid?",
        a: "Usually within minutes of the act being signed. Payouts to Uzcard and Humo cards run around the clock, including weekends.",
      },
      {
        q: "Who can I work with through Bajar?",
        a: "Self-employed people, sole traders and individuals. Bajar prepares the right contract for each type of contractor, and your manager will tell you which documents you need.",
      },
      {
        q: "What happens to the money on the balance?",
        a: "Company funds are held at a partner bank and are used only for payouts to your contractors. Any unused balance can be returned to your company account.",
      },
      {
        q: "Does the company pay taxes for the contractor?",
        a: "It depends on the contractor's status. Companies usually do not withhold taxes on payouts to self-employed people, while different rules apply to individuals. Bajar checks the status before every payout, and our lawyer can advise on your setup.",
      },
      {
        q: "Which documents does the platform generate?",
        a: "Service contracts, tasks, acts of acceptance and payout registries. All documents are stored in the dashboard and export to 1C.",
      },
    ],
  },

  lead: {
    title: "See Bajar on your own company",
    text: "Leave your contacts, and a manager will walk you through the dashboard with your contractors. Prefer to chat? Message us on Telegram.",
    benefits: [
      "Tasks, contracts, acts and payouts in one dashboard",
      "Hundreds of payouts to Uzcard and Humo in a single registry",
      "Contractor status checked before every payout",
      "Documents signed by phone or via E-IMZO",
      "Free onboarding and a personal manager on Telegram",
    ],
    fields: {
      name: "Your name",
      company: "Company",
      phone: "Phone",
      size: "How many contractors do you work with",
    },
    sizes: ["Up to 10", "10-50", "50-200", "Over 200"],
    submit: "Send request",
    submitting: "Sending",
    consent: "By clicking the button, you agree to our personal data policy.",
    errors: {
      name: "Please tell us your name",
      company: "Please enter your company name",
      phone: "Use the format +998 90 123 45 67",
      network: "We could not send your request. Please try again or message us on Telegram.",
    },
    success: {
      title: "Request sent",
      text: "A manager will call you within one business day. You can also message us on Telegram.",
      again: "Send another one",
    },
  },

  footer: {
    tagline: "A platform for working with contractors in Uzbekistan: payouts, temporary staffing and side jobs.",
    columns: [
      {
        title: "Legal",
        links: [
          { label: "Privacy policy", href: "#" },
          { label: "Public offer", href: "#" },
        ],
      },
    ],
    contacts: "Contacts",
  },
};
