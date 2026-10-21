import type { GetPaidDict } from "@/lib/content/getpaid/ru";

export const getPaidEn: GetPaidDict = {
  meta: {
    title: "Get paid with Bajar: payouts from your client to your card",
    description:
      "If your client works through Bajar, the contract, acts and payouts come to the app. Sign documents on your phone and get paid to your Uzcard or Humo card.",
    ogTitle: "Get paid with Bajar: payouts from your client to your card",
    ogDescription: "Contract, acts and payouts from your client in one app. The money goes to your Uzcard or Humo card.",
  },

  hero: {
    title: "Payouts from your client to your card, documents on your phone",
    text: "If a company works through Bajar, the contract, acts and payouts come to the app. You sign documents on your phone, and the money goes to your Uzcard or Humo card.",
    chips: ["Paid once the act is signed", "Uzcard and Humo", "Income statements", "Your own support"],
    primary: "How to start",
    soft: "Find a side job",
    photos: [
      { src: "/img/media.webp", alt: "Videographer holding a camera" },
      { src: "/img/it.webp", alt: "Developer holding a laptop" },
      { src: "/img/other.webp", alt: "Contractor looking at her phone" },
      { src: "/img/translator.webp", alt: "Translator holding a document folder" },
    ],
    phoneAlt: "Bajar contractor app: monthly earnings, an act to sign and payout history",
  },

  benefits: {
    title: "Everything about your payouts in one app",
    history: {
      title: "Payout history",
      text: "For every payout you see who paid, what for, how much and when.",
      statuses: { paid: "Received", pending: "Waiting for your signature" },
      items: [
        { from: "Bilim Academy", what: "Course slides", amount: "+2,200,000", status: "pending" },
        { from: "Navo Logistics", what: "Delivery of 24 orders", amount: "+360,000", status: "paid" },
        { from: "Chaqmoq Studio", what: "Shooting 4 videos", amount: "+1,600,000", status: "paid" },
        { from: "Navo Logistics", what: "Delivery of 18 orders", amount: "+270,000", status: "paid" },
      ],
    },
    act: {
      title: "Sign the act on your phone",
      text: "The contract and acts come to the app. No trips to the office and no waiting for a courier.",
      doc: "Act No. 128",
      company: "Bilim Academy",
      sum: "2,200,000",
      sign: "Sign",
    },
    status: {
      title: "Self-employed status in check",
      text: "Bajar checks your status before every payout and reminds you if something needs updating.",
      check: "Status checked today",
    },
    docs: {
      title: "Income statements",
      text: "Download a statement for a bank or a visa yourself, without asking your client's accounting team.",
      file: "Income statement for 2026",
      download: "Download PDF",
    },
    support: {
      title: "Your own support",
      text: "Questions about payouts and documents go to Bajar support in the app and on Telegram, not to your client's accounting team.",
      chat: [
        { from: "you", text: "When will I be paid for act No. 128?" },
        { from: "support", text: "As soon as you sign the act, the payout goes to your Humo •• 4417 card." },
      ],
    },
  },

  steps: {
    title: "How to get your first payout",
    items: [
      {
        title: "Get an invitation",
        text: "The company sends you a link. Signing up with your phone number takes a couple of minutes.",
      },
      {
        title: "Confirm your details",
        text: "Passport, status and an Uzcard or Humo card. If you are not registered as self-employed, the app shows how to do it.",
      },
      {
        title: "Sign the contract",
        text: "The contract with your client comes to the app and is signed on your phone.",
      },
      {
        title: "Get paid",
        text: "After every signed act, the money goes to your card.",
      },
    ],
  },

  band: {
    title: "Want more work?",
    text: "Find shifts and one-off tasks near home in Bajar Gigs. Payouts come to the same app.",
    cta: "Bajar Gigs",
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "How do I start getting paid through Bajar?",
        a: "Ask your client to connect you to Bajar or wait for an invitation from the company. With the link you sign up, sign the contract and add a card for payouts.",
      },
      {
        q: "Do I need self-employed status?",
        a: "Bajar works with self-employed people, sole traders and individuals. Which status you need depends on your contract with the client, and the app shows how to register as self-employed online.",
      },
      {
        q: "When does the money arrive?",
        a: "Once you sign the act. The payout usually reaches your Uzcard or Humo card within minutes.",
      },
      {
        q: "What if a payout has not arrived?",
        a: "Message Bajar support in the app or on Telegram. We will check the payout status and tell you what to do.",
      },
    ],
  },
};
