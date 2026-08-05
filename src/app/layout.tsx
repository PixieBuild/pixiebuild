import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";
import {
  Archivo,
  Bricolage_Grotesque,
  Chivo,
  DM_Sans,
  Epilogue,
  Familjen_Grotesk,
  Figtree,
  Fraunces,
  Geist,
  Instrument_Sans,
  Instrument_Serif,
  Inter,
  Lora,
  Manrope,
  Newsreader,
  Onest,
  Outfit,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Schibsted_Grotesk,
  Sora,
  Space_Grotesk,
  Syne,
  Unbounded,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

/* Candidates for the hero, switchable from the dock while the display face
   is being chosen. Each loader has to be its own module-scope const — Next
   reads these at build time and will not follow them into an array. None
   are preloaded, so only the one in use is fetched and the rest cost a
   font-face rule each. Delete the losers once it is settled. */
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  preload: false,
  variable: "--font-instrument-sans",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  preload: false,
  variable: "--font-bricolage",
});

const familjen = Familjen_Grotesk({
  subsets: ["latin"],
  preload: false,
  variable: "--font-familjen",
});

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  preload: false,
  variable: "--font-schibsted",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  preload: false,
  variable: "--font-space-grotesk",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  preload: false,
  variable: "--font-fraunces",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  preload: false,
  variable: "--font-newsreader",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  preload: false,
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  preload: false,
  variable: "--font-lora",
});

const sora = Sora({
  subsets: ["latin"],
  preload: false,
  variable: "--font-sora",
});

const outfit = Outfit({
  subsets: ["latin"],
  preload: false,
  variable: "--font-outfit",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  preload: false,
  variable: "--font-jakarta",
});

const figtree = Figtree({
  subsets: ["latin"],
  preload: false,
  variable: "--font-figtree",
});

const onest = Onest({
  subsets: ["latin"],
  preload: false,
  variable: "--font-onest",
});

const syne = Syne({
  subsets: ["latin"],
  preload: false,
  variable: "--font-syne",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  preload: false,
  variable: "--font-unbounded",
});

const archivo = Archivo({
  subsets: ["latin"],
  preload: false,
  variable: "--font-archivo",
});

const epilogue = Epilogue({
  subsets: ["latin"],
  preload: false,
  variable: "--font-epilogue",
});

const chivo = Chivo({
  subsets: ["latin"],
  preload: false,
  variable: "--font-chivo",
});

const candidates = [
  instrumentSans,
  bricolage,
  familjen,
  schibsted,
  spaceGrotesk,
  fraunces,
  newsreader,
  playfair,
  lora,
  sora,
  outfit,
  jakarta,
  figtree,
  onest,
  syne,
  unbounded,
  archivo,
  epilogue,
  chivo,
];

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
      style={
        {
          "--font-sans": "var(--font-inter)",
          "--font-display": "var(--font-instrument-serif)",
        } as React.CSSProperties
      }
      className={cn(
        "h-full font-sans antialiased motion-safe:scroll-smooth",
        inter.variable,
        geist.variable,
        manrope.variable,
        dmSans.variable,
        instrumentSerif.variable,
        ...candidates.map(font => font.variable)
      )}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              logo: `${site.url}/pb-logo.png`,
              description: site.description,
              email: site.email,
            }),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
