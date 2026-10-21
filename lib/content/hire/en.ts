import type { HireDict } from "@/lib/content/hire/ru";

export const hireEn: HireDict = {
  meta: {
    title: "Bajar Hire: temporary staff for shifts and tasks",
    description:
      "Find contractors for shifts, tasks and seasonal peaks without hiring. Applicants with ratings, contracts, acts and payouts in one Bajar dashboard.",
    ogTitle: "Bajar Hire: temporary staff without hiring",
    ogDescription: "Contractors for shifts and tasks near your site. The contract, act and payout are handled for you.",
  },

  cta: { primary: "Post a gig", soft: "How it works" },

  hero: {
    title: "Temporary staff for shifts and tasks, without hiring",
    text: "Post a shift, pick contractors near your site by rating and reviews, and pay for the work from your dashboard. Contracts and acts are handled for you.",
    board: {
      title: "Shifts this week",
      tabs: ["Active", "Completed"],
      add: "New shift",
      filled: "{n} of {total}",
      statuses: { open: "Recruiting", full: "Fully staffed" },
      items: [
        { title: "Order pickers", place: "Warehouse, Sergeli", when: "Fri, 18:00–23:00", filled: 6, total: 6 },
        { title: "Promoters", place: "Shopping mall, Chilanzar", when: "Sat, 10:00–16:00", filled: 3, total: 4 },
        { title: "Banquet waiters", place: "Restaurant, Mirabad", when: "Sat, 17:00–23:00", filled: 8, total: 8 },
        { title: "Unloading goods", place: "Warehouse, Yashnabad", when: "Sun, 07:00–12:00", filled: 2, total: 5 },
      ],
    },
  },

  steps: {
    title: "From posting to payout in four steps",
    items: [
      {
        title: "Post a shift",
        text: "Task, address, time, pay and how many people you need. There are templates for shifts and one-off tasks.",
      },
      {
        title: "Pick contractors",
        text: "Applications come from people nearby, with ratings, company reviews and the number of shifts worked.",
      },
      {
        title: "Accept the work",
        text: "Contractors check in and out of the shift in the app, and you confirm the result.",
      },
      {
        title: "Pay in one registry",
        text: "Acts are generated automatically, and everyone is paid from your Bajar dashboard.",
      },
    ],
  },

  features: {
    title: "Matching, documents and payouts in one dashboard",
    post: {
      title: "Post a shift in a couple of minutes",
      text: "Describe the task, address, time and pay. Contractors nearby see it right away.",
      fields: [
        { label: "Task", value: "Order picker" },
        { label: "Address", value: "Warehouse, Sergeli" },
        { label: "When", value: "Fri, 18:00–23:00" },
        { label: "Pay", value: "180,000 UZS per shift" },
        { label: "People needed", value: "6" },
      ],
      publish: "Publish",
    },
    applicants: {
      title: "Applicants with ratings",
      text: "See each person's rating, company reviews and number of shifts.",
      accept: "Accept",
      accepted: "On shift",
      items: [
        { name: "Aziz Rakhimov", meta: "4.9 · 32 shifts", accepted: true },
        { name: "Dilnoza Karimova", meta: "4.8 · 18 shifts", accepted: true },
        { name: "Shakhzod Tursunov", meta: "New", accepted: false },
      ],
    },
    pool: {
      title: "Your own pool",
      text: "Save the people you liked working with and invite them to shifts first.",
      invite: "Invite 12 people from your pool",
    },
    docs: {
      title: "Documents and payouts",
      text: "After the shift the acts are generated automatically, and the payout goes as a single registry from your Bajar dashboard.",
      registry: "Friday shift",
      rows: [
        { label: "Contractors", value: "6" },
        { label: "Acts signed", value: "6 of 6" },
        { label: "To pay", value: "1,080,000 UZS" },
      ],
      pay: "Pay",
    },
  },

  roles: {
    title: "Who you can find",
    items: [
      { label: "Couriers and drivers", image: "/img/driver.webp", alt: "Driver holding car keys" },
      { label: "Order pickers and movers", image: "/img/warehouse.webp", alt: "Order picker with a scanner and a box" },
      { label: "Waiters and hosts", image: "/img/waiter.webp", alt: "Waitress holding a tray" },
      { label: "Call center operators", image: "/img/callcenter.webp", alt: "Operator wearing a headset" },
    ],
    tagsLabel: "And also",
    tags: ["merchandisers", "promoters", "cleaning", "craftsmen", "tutors", "online tasks"],
  },

  band: {
    title: "Already have contractors?",
    text: "Connect Bajar Payouts: contracts, acts and payouts for your regular contractors with no manual work.",
    cta: "Bajar Payouts",
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How is Bajar Hire different from Bajar Payouts?",
        a: "Payouts are for contractors you already have. Hire helps you find new ones: you post a shift, and the contract, act and payout work just like in the payouts dashboard.",
      },
      {
        q: "Who applies for shifts?",
        a: "Self-employed people, sole traders and individuals from Bajar Gigs. Everyone confirms their identity when they sign up, and Bajar checks their status before each payout.",
      },
      {
        q: "How fast can I find people?",
        a: "Contractors near your site see the shift right away. How fast it fills depends on the district, time and pay, and a manager can suggest how to make the shift more attractive.",
      },
      {
        q: "How is the work paid for?",
        a: "You top up your balance by bank transfer from your company account. Once the work is accepted, acts are generated automatically and the payout goes to Uzcard and Humo cards in a single registry.",
      },
      {
        q: "How much does posting cost?",
        a: "It depends on how many shifts and tasks you post a month. A manager will work out the price for your volume during the demo.",
      },
    ],
  },

  lead: {
    title: "Post your first gig",
    text: "Leave your contacts, and a manager will help you describe the task and start matching contractors.",
    benefits: [
      "Contractors near your site",
      "Ratings and reviews for every contractor",
      "Contract, act and card payout without your accounting team",
      "Your own pool of vetted people for the next shifts",
    ],
    size: "How many people you need a month",
  },
};
