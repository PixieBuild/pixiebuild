import { readFile } from "node:fs/promises";
import path from "node:path";

import { cacheLife } from "next/cache";

export type Token = {
  name: string;
  light: string;
  dark: string;
};

const declaration = /(--[a-z0-9-]+):\s*([^;]+);/gi;

function collect(css: string, selector: string) {
  const tokens = new Map<string, string>();

  for (const match of css.matchAll(new RegExp(`${selector}\\s*\\{`, "g"))) {
    const start = match.index + match[0].length;
    const end = css.indexOf("\n}", start);
    for (const [, name, value] of css.slice(start, end).matchAll(declaration)) {
      tokens.set(name, value.trim());
    }
  }

  return tokens;
}

/* Read at build time so a token added to globals.css appears here without
   anyone writing its name a second time. */
export async function readTokens() {
  "use cache";
  cacheLife("max");

  const css = await readFile(
    path.join(process.cwd(), "src/app/globals.css"),
    "utf8"
  );

  const root = new Map([
    ...collect(css, ":root"),
    ...collect(css, "@theme inline"),
    ...collect(css, "@theme"),
  ]);
  const dark = collect(css, "\\.dark");

  const list = (predicate: (name: string, value: string) => boolean): Token[] =>
    [...root]
      .filter(([name, value]) => predicate(name, value))
      .map(([name, value]) => ({
        name,
        light: value,
        dark: dark.get(name) ?? value,
      }));

  const base = Number.parseFloat(root.get("--radius") ?? "0") * 16;

  return {
    /* --color-* are aliases pointing at these with var(), so a colour literal
       is what marks the real token. */
    colours: list(
      (name, value) =>
        !name.startsWith("--color-") && /^(oklch|hsl|rgb|#)/i.test(value)
    ),
    /* Only the ones that map to a utility: --elevation-* and --edge are what
       these are built from. */
    shadows: list((name) => name.startsWith("--shadow-")),
    motion: list((name) => /^--(ease|animate)/.test(name)),
    /* calc(var(--radius) * n) never resolves through getComputedStyle, so the
       multiplier is applied here instead. */
    radii: [...root]
      .filter(([name]) => name.startsWith("--radius"))
      .map(([name, value]) => {
        const multiplier = Number.parseFloat(
          value.match(/\*\s*([\d.]+)/)?.[1] ?? "1"
        );
        return {
          name,
          utility: name.replace("--radius", "rounded"),
          px: `${Math.round(base * multiplier * 100) / 100}px`,
        };
      }),
  };
}
