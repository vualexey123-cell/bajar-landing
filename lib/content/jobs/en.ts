import type { JobsDict } from "@/lib/content/jobs/ru";

export const jobsEn: JobsDict = {
  meta: {
    title: "Bajar Gigs: contractors for shifts and tasks in Uzbekistan",
    description:
      "A temporary work marketplace: companies find vetted contractors for shifts, tasks and seasonal peaks, and people find side jobs near home, paid to their card.",
    ogTitle: "Bajar Gigs: shifts and tasks paid to your card",
    ogDescription: "Companies find contractors for shifts and tasks, people find side jobs near home.",
  },

  nav: [
    { label: "How it works", href: "#how" },
    { label: "For companies", href: "#business" },
    { label: "For contractors", href: "#workers" },
    { label: "FAQ", href: "#faq" },
  ],

  cta: {
    primary: "Post a gig",
    soft: "I'm looking for work",
  },

  hero: {
    title: "Contractors for a shift, a task or a season",
    text: "Post a gig and vetted contractors near your site will see it. The contract, the act and the card payout are handled for you.",
    imageAlt: "Contractor holding a box of products",
    feedLabel: "Gigs nearby",
    apply: "Apply",
    perShift: "per shift",
    items: [
      { title: "Order picker", place: "Warehouse, Sergeli", time: "Today, 18:00–23:00", pay: "180,000" },
      { title: "Promoter at a mall", place: "Chilanzar", time: "Sat, 10:00–16:00", pay: "150,000" },
      { title: "Banquet waiter", place: "Mirabad", time: "Fri, 17:00–23:00", pay: "250,000" },
    ],
    toast: "Shift accepted, 180,000 UZS on the card",
  },

  steps: {
    title: "From posting to payout in one place",
    items: [
      {
        title: "Describe the task",
        text: "What to do, where, when and how much you pay. There are templates for shifts, one-off tasks and seasonal projects.",
      },
      {
        title: "Pick contractors",
        text: "Applications come from people nearby, with ratings, reviews and the number of shifts worked.",
      },
      {
        title: "Accept the work",
        text: "The contractor checks in and out of the shift in the app, and you confirm the result in the dashboard.",
      },
      {
        title: "Act and payout, automatically",
        text: "Once you accept, Bajar generates the act and sends the money to an Uzcard or Humo card.",
      },
    ],
  },

  business: {
    title: "For companies: cover shifts without hiring",
    text: "For peak days, seasonal projects and tasks that do not need a full-time employee.",
    points: [
      { icon: "lightning", title: "Fast matching", text: "Contractors near your site see the gig as soon as it is posted." },
      {
        icon: "star",
        title: "Ratings and reviews",
        text: "See every contractor's reviews from other companies and their history of shifts.",
      },
      {
        icon: "users",
        title: "Your own pool",
        text: "Save the people you liked working with and offer them new shifts first.",
      },
      {
        icon: "files",
        title: "Documents and payouts",
        text: "Contracts, acts and payouts in the same Bajar dashboard, with no extra work for accounting.",
      },
    ],
  },

  workers: {
    title: "For contractors: side jobs near home",
    text: "Shifts and one-off tasks from companies. You decide when and how much to work.",
    points: [
      "Gigs near home at times that suit you",
      "Paid to your Uzcard or Humo card once the work is accepted",
      "Contract and act signed on your phone",
      "Help with registering as self-employed",
      "A good rating unlocks more offers",
    ],
    cta: "Gigs on our Telegram",
    imageAlt: "Bajar contractor app: monthly earnings, an act to sign and payout history",
  },

  categories: {
    title: "Gigs you can post",
    items: [
      { icon: "truck", name: "Delivery", text: "Couriers, drivers, forwarders" },
      { icon: "package", name: "Warehouses", text: "Order picking, unloading, stocktaking" },
      { icon: "storefront", name: "Retail and promo", text: "Merchandisers, promoters, sales assistants" },
      { icon: "event", name: "Events", text: "Waiters, hosts, venue setup" },
      { icon: "cleaning", name: "Cleaning", text: "Offices, warehouses, after renovation" },
      { icon: "repair", name: "Repairs and installation", text: "Craftsmen, handymen, furniture assembly" },
      { icon: "calls", name: "Call center", text: "Outbound calls, support, surveys" },
      { icon: "online", name: "Online tasks", text: "Design, copywriting, data labeling" },
    ],
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How is the marketplace different from Bajar payouts?",
        a: "Payouts are for contractors you already have. The marketplace helps you find new ones: you post a shift or a task, and the contract, act and payout then work just like in the main dashboard.",
      },
      {
        q: "Who can apply for gigs?",
        a: "Self-employed people, sole traders and individuals. If someone is not registered as self-employed yet, the app shows how to do it.",
      },
      {
        q: "How are contractors vetted?",
        a: "Contractors confirm their identity when they sign up, and Bajar checks their status before every payout. After each shift the company leaves a review that other clients can see.",
      },
      {
        q: "How do contractors get paid?",
        a: "The company confirms the work, the act is generated automatically and the money goes to an Uzcard or Humo card, usually within minutes.",
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
