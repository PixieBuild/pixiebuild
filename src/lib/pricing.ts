export type Currency = "USD" | "INR";

type Money = Record<Currency, string>;

export const money: Record<
  Currency,
  { symbol: string; locale: string }
> = {
  USD: { symbol: "$", locale: "en-GB" },
  INR: { symbol: "₹", locale: "en-IN" },
};

const extra: Money = { USD: "$299", INR: "₹14,999" };

export const projects = [
  {
    name: "Landing Pages",
    who: "For a business that needs a strong online presence.",
    price: { USD: "499", INR: "24,999" } as Money,
    meta: "Starts at · live in 1–2 weeks",
    action: "Start your landing page",
    includes: [
      "One page, built for a single goal",
      "Custom design — no template, no page builder",
      "SEO & hosting set up for you",
      "A live link to follow the build",
      "You own the code and all accounts",
      "Extra pages at {extra} each",
      "Two rounds of revisions",
    ],
  },
  {
    name: "Company Websites",
    who: "For a business that needs pages and room to grow.",
    price: { USD: "1,499", INR: "74,999" } as Money,
    meta: "Starts at · live in 3–4 weeks",
    action: "Start your site",
    featured: true,
    includes: [
      "Everything in Landing Page",
      "3–5 custom pages",
      "A CMS to edit your own content",
      "Built so you can add pages later",
      "Extra pages at {extra} each",
      "Three rounds of revisions",
    ],
  },
  {
    name: "Custom Applications",
    who: "For software with accounts, data and logic.",
    quote: "Quoted",
    meta: "Priced after a discovery call",
    action: "Book a discovery call",
    includes: [
      "We scope it with you before quoting",
      "Review working builds as we go",
      "The same team from start to finish",
    ],
  },
];

export const priced = (line: string, currency: Currency) =>
  line.replace("{extra}", extra[currency]);
