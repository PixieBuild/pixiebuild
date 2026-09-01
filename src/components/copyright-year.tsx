import { cacheLife } from "next/cache";

/* Cached rather than prerendered, so the year is not pinned to the build. */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}
