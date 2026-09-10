export type Job = {
  id: string;
  client: string;
  business: string;
  place: string;
  built: string;
  days: number;
  rating: number;
  review?: string;
  image?: string;
};

export const figures = [
  { value: "12", name: "Projects delivered" },
  { value: "5.0", name: "Average rating" },
  { value: "14", name: "Days, on average" },
  { value: "100%", name: "Delivered on time" },
];

export const jobs: Job[] = [
  {
    id: "coffee",
    client: "Daniel",
    business: "Coffee house",
    place: "Portland",
    built: "Landing page, menu and booking",
    days: 12,
    rating: 5,
    review:
      "Quick to understand what the place is about, and the site feels like the room does. Bookings started the week it went live.",
    image: "/record/sample.webp",
  },
  {
    id: "grooming",
    client: "Marcus",
    business: "Grooming lounge",
    place: "Chicago",
    built: "Company site with online booking",
    days: 19,
    rating: 5,
    review:
      "Communicated every step, delivered ahead of the date, and the booking flow just works. Our walk-ins turned into appointments.",
  },
  {
    id: "florist",
    client: "Ana",
    business: "Florist",
    place: "Austin",
    built: "Shop with same-day delivery slots",
    days: 24,
    rating: 5,
    review:
      "Patient with a lot of changes from my side. The shop is easy to update myself, which was the whole point.",
    image: "/record/sample.webp",
  },
  {
    id: "clinic",
    client: "Priya",
    business: "Physiotherapy clinic",
    place: "Toronto",
    built: "Site refresh, faster and on phones",
    days: 9,
    rating: 5,
  },
  {
    id: "saas",
    client: "Tom",
    business: "Software startup",
    place: "Berlin",
    built: "Marketing site and docs",
    days: 21,
    rating: 5,
    review:
      "Strong eye for detail and genuinely good motion work. We got compliments on the site from investors.",
  },
  {
    id: "bakery",
    client: "Sofia",
    business: "Bakery",
    place: "Lisbon",
    built: "Landing page with pre-orders",
    days: 8,
    rating: 5,
  },
];
