export type Good = {
  id: string;
  name: string;
  short: string;
  price: number;
  photo: string;
  left?: number;
};

export type Session = {
  date: string;
  name: string;
  time: string;
  price: number;
  seats: number;
  taken: number;
};

export const drop: Good[] = [
  {
    id: "cups",
    name: "Cups, set of four",
    short: "Cups",
    price: 120,
    photo: "/concept/product-cups.webp",
    left: 2,
  },
  {
    id: "bowl",
    name: "Serving bowl",
    short: "Bowl",
    price: 160,
    photo: "/concept/product-bowl.webp",
    left: 0,
  },
  {
    id: "jug",
    name: "Milk jug",
    short: "Jug",
    price: 45,
    photo: "/concept/product-jug.webp",
  },
  {
    id: "linen",
    name: "Linen cloth",
    short: "Linen",
    price: 32,
    photo: "/concept/product-linen.webp",
  },
];

export const goods: Record<string, Good> = Object.fromEntries(
  drop.map(good => [good.id, good]),
);

export const sessions: Session[] = [
  {
    date: "Sat 3 Oct",
    name: "Beginners' wheel",
    time: "10am to 1pm",
    price: 85,
    seats: 8,
    taken: 6,
  },
  {
    date: "Sat 17 Oct",
    name: "Glazing day",
    time: "2pm to 5pm",
    price: 65,
    seats: 8,
    taken: 2,
  },
  {
    date: "Sat 31 Oct",
    name: "Beginners' wheel",
    time: "10am to 1pm",
    price: 85,
    seats: 8,
    taken: 0,
  },
];

/* What the tile says about stock, or nothing when there is plenty. */
export const stock = (good: Good) =>
  good.left === 0 ? "SOLD OUT" : good.left ? `${good.left} LEFT` : null;
