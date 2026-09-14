/* Business and place caption the frame; kind is the one line about what it
   is. Nothing else is written about a project — the frame does the talking. */
export type Project = {
  id: string;
  business: string;
  place: string;
  kind: string;
  poster: string;
  video?: string;
};

export type Review = {
  id: string;
  client: string;
  role: string;
  quote: string;
};

export const projects: Project[] = [
  {
    id: "tarnbeck",
    business: "Tarnbeck",
    place: "Cumbria",
    kind: "Product site",
    poster: "/record/tarnbeck.webp",
  },
  {
    id: "skerry",
    business: "Skerry",
    place: "Leith",
    kind: "Studio site",
    poster: "/record/skerry.webp",
  },
  {
    id: "ottoline",
    business: "Ottoline",
    place: "Grasse",
    kind: "Brand site",
    poster: "/record/ottoline.webp",
  },
  {
    id: "saltmarsh",
    business: "Saltmarsh",
    place: "Suffolk",
    kind: "Launch site",
    poster: "/record/saltmarsh.webp",
  },
];

/* Short and long reviews alternate so the wall keeps a rhythm at every
   column count. */
export const reviews: Review[] = [
  {
    id: "coffee",
    client: "Daniel",
    role: "Founder at Coffee house",
    quote: "Bookings started the week it went live.",
  },
  {
    id: "grooming",
    client: "Marcus",
    role: "Owner at Grooming lounge",
    quote:
      "Communicated every step and delivered ahead of the date. Our walk-ins turned into appointments.",
  },
  {
    id: "clinic",
    client: "Priya",
    role: "Director at Physiotherapy clinic",
    quote: "Fast, clear and easy to work with.",
  },
  {
    id: "saas",
    client: "Tom",
    role: "Head of Product at Software startup",
    quote:
      "Strong eye for detail and genuinely good motion work. We scoped a few pages, it went well enough that we expanded the engagement, and we got compliments on the site from investors.",
  },
  {
    id: "barber",
    client: "Luis",
    role: "Owner at Barber shop",
    quote: "Quick to respond and shipped in a week.",
  },
  {
    id: "florist",
    client: "Ana",
    role: "Owner at Florist",
    quote:
      "Patient with a lot of changes from my side. The shop is easy to update myself, which was the whole point.",
  },
];
