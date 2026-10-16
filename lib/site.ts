// Brand and contact settings. Replace the placeholders before going live.
export const site = {
  name: "Bajar",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bajar.uz",
  email: "hello@bajar.uz",
  telegram: "https://t.me/bajar_uz",
  telegramHandle: "@bajar_uz",
  city: "Ташкент",
  // POST endpoint that receives lead-form submissions as JSON.
  // Leave empty to run the form in demo mode (nothing is sent).
  leadEndpoint: process.env.NEXT_PUBLIC_LEAD_ENDPOINT ?? "",
  // Shown in the "who is behind Bajar" card once filled in; the card stays hidden while empty.
  company: {
    legalName: "",
    stir: "",
    address: "",
    bank: "",
    founder: "",
    founderRole: "",
  },
} as const;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Prefixes a file from /public with the base path, so images keep working
// when the site is served from a subfolder (GitHub Pages project sites).
export const asset = (path: string) => `${basePath}${path}`;
