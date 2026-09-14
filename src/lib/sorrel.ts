export type Dish = {
  name: string;
  price: number;
};

export type Sitting = {
  date: string;
  name: string;
  time: string;
  price: number;
  seats: number;
  taken: number;
};

export const dishes: Dish[] = [
  { name: "Burrata, roasted grapes, hazelnut", price: 18 },
  { name: "Hand-cut tagliatelle, brown butter, sage", price: 26 },
  { name: "Roast chicken for two, bread sauce", price: 64 },
  { name: "Brown sugar tart, crème fraîche", price: 12 },
];

export const sittings: Sitting[] = [
  {
    date: "Thu 9 Oct",
    name: "Wine night",
    time: "7pm",
    price: 55,
    seats: 12,
    taken: 9,
  },
  {
    date: "Sun 12 Oct",
    name: "Sunday lunch",
    time: "1pm",
    price: 48,
    seats: 20,
    taken: 20,
  },
];

export const slots = ["5:30", "6:15", "7:00", "7:45", "8:30", "9:15"];

/* Times already taken tonight. */
export const gone = ["6:15", "7:00"];
