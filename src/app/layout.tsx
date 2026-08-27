import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import {
  Archivo,
  DM_Sans,
  Geist,
  IBM_Plex_Mono,
  Instrument_Serif,
  Inter,
  Manrope,
} from "next/font/google";
import localFont from "next/font/local";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ThemeProvider } from "@/components/theme-provider";
import { siteSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const generalSans = localFont({
  src: [
    { path: "../assets/fonts/GeneralSans-Light.woff2", weight: "300" },
    { path: "../assets/fonts/GeneralSans-Regular.woff2", weight: "400" },
    { path: "../assets/fonts/GeneralSans-Medium.woff2", weight: "500" },
    { path: "../assets/fonts/GeneralSans-Semibold.woff2", weight: "600" },
    { path: "../assets/fonts/GeneralSans-Bold.woff2", weight: "700" },
  ],
  display: "swap",
  variable: "--font-heading",
});

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      style={{ "--font-sans": "var(--font-geist)" } as React.CSSProperties}
      className={cn(
        "h-full font-sans antialiased",
        inter.variable,
        geist.variable,
        manrope.variable,
        dmSans.variable,
        instrumentSerif.variable,
        generalSans.variable,
        archivo.variable,
        plexMono.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema()) }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <SmoothScroll />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
