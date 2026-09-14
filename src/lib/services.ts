export type Service = {
  id: string;
  title: string;
  meta: string;
  blurb: string;
  includes: string[];
};

export const services: Service[] = [
  {
    id: "site",
    title: "A site that brings you customers",
    meta: "Fixed price",
    blurb:
      "Designed and built by the same two people, live in weeks. One page with one job, or a whole site with room to grow.",
    includes: ["Custom design", "Every phone", "Edit your own pages"],
  },
  {
    id: "refresh",
    title: "Fix the site you already have",
    meta: "Quoted",
    blurb:
      "Faster, current and working on phones, without losing your address, your content or your place on Google.",
    includes: ["Speed", "Mobile", "A fresh look", "Same address"],
  },
  {
    id: "found",
    title: "Be found when people look",
    meta: "Included",
    blurb:
      "Show up on Google, on Maps, and in the answers people get when they ask an assistant.",
    includes: ["Google", "Maps", "Assistants", "Who found you"],
  },
  {
    id: "care",
    title: "We keep it running",
    meta: "Monthly",
    blurb:
      "Deploys, updates and backups handled on hosting in your name, a short note each month, and a person who replies.",
    includes: ["Your own hosting", "Updates", "Backups", "A monthly note"],
  },
];
