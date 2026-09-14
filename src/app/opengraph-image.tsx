import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { site } from "@/lib/site";

export const alt =
  "PixieBuild — Leave Boring Behind. A web design and development studio; a browser frame shows a concept build for Tarnbeck, a watchmaker.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const ink = "#090b0c";
const muted = "#67787c";
const line = "#e3e7e8";
const primary = "#0077b6";

const asset = (path: string) => readFile(join(process.cwd(), path));

/* The mark is drawn with CSS variables the renderer cannot resolve, so the
   two colours are written in before it is embedded. */
const mark = async () => {
  const svg = (await asset("src/assets/pb-logo.svg"))
    .toString()
    .replace("currentColor", ink)
    .replace("var(--color-primary)", primary);

  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
};

/* The renderer reads jpeg and png, not webp, so the poster has its own copy. */
const poster = async () =>
  `data:image/jpeg;base64,${(await asset("src/assets/og-tarnbeck.jpg")).toString("base64")}`;

const font = async (weight: 400 | 600 | 700, file: string) => {
  const data = await asset(`src/assets/fonts/${file}`);

  return {
    name: "General Sans",
    data: data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength),
    weight,
    style: "normal" as const,
  };
};

const headline = ["Leave", "Boring", "Behind."];

export default async function OpengraphImage() {
  const [logo, shot, regular, semibold, bold] = await Promise.all([
    mark(),
    poster(),
    font(400, "GeneralSans-Regular.ttf"),
    font(600, "GeneralSans-Semibold.ttf"),
    font(700, "GeneralSans-Bold.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          color: ink,
          fontFamily: "General Sans",
          background:
            "linear-gradient(135deg, #ffffff 0%, #f4f6f6 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 520,
            top: -120,
            width: 900,
            height: 900,
            display: "flex",
            background:
              "radial-gradient(circle at 50% 50%, rgba(0,119,182,0.16) 0%, rgba(0,119,182,0) 58%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 640,
            height: "100%",
            padding: "56px 0 52px 64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <img src={logo} width={44} height={44} alt="" />
              <span style={{ fontSize: 30, fontWeight: 600, letterSpacing: -0.6 }}>
                {site.name}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontSize: 13,
                letterSpacing: 2.6,
                color: muted,
              }}
            >
              <span
                style={{
                  display: "flex",
                  width: 8,
                  height: 8,
                  background: primary,
                }}
              />
              WEB DESIGN &amp; DEVELOPMENT STUDIO
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 104,
              fontWeight: 700,
              lineHeight: 0.94,
              letterSpacing: 1,
            }}
          >
            {headline.map(word => (
              <span key={word}>{word}</span>
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                display: "flex",
                maxWidth: 520,
                fontSize: 22,
                lineHeight: 1.4,
                color: muted,
              }}
            >
              Websites and web apps, designed and built to ship in weeks, not
              quarters.
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 14,
                letterSpacing: 2.4,
                color: muted,
              }}
            >
              PIXIEBUILD.COM
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 704,
            top: 64,
            width: 560,
            height: 350,
            display: "flex",
            transform: "rotate(-9deg)",
            background: "#ffffff",
            border: `1px solid ${line}`,
            borderRadius: 18,
            opacity: 0.55,
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 688,
            top: 106,
            width: 560,
            height: 350,
            display: "flex",
            transform: "rotate(-6deg)",
            background: "#ffffff",
            border: `1px solid ${line}`,
            borderRadius: 18,
            opacity: 0.8,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 672,
            top: 150,
            width: 600,
            height: 412,
            display: "flex",
            flexDirection: "column",
            transform: "rotate(-3deg)",
            background: "#ffffff",
            border: `1px solid ${line}`,
            borderRadius: 18,
            overflow: "hidden",
            boxShadow: "0 30px 60px -20px rgba(9,11,12,0.28)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              height: 40,
              padding: "0 16px",
              borderBottom: `1px solid ${line}`,
              background: "#fafbfb",
            }}
          >
            {[0, 1, 2].map(dot => (
              <span
                key={dot}
                style={{
                  display: "flex",
                  width: 9,
                  height: 9,
                  borderRadius: 9,
                  background: line,
                }}
              />
            ))}
            <span
              style={{
                display: "flex",
                marginLeft: 12,
                padding: "5px 14px",
                borderRadius: 999,
                border: `1px solid ${line}`,
                background: "#ffffff",
                fontSize: 12,
                letterSpacing: 1.4,
                color: muted,
              }}
            >
              tarnbeck.com
            </span>
          </div>
          <img
            src={shot}
            width={600}
            height={372}
            alt=""
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
      </div>
    ),
    { ...size, fonts: [regular, semibold, bold] },
  );
}
