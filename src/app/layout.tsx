import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Geist, Inter, Manrope, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const robotoHeading = Roboto({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

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
      style={{ "--font-sans": "var(--font-inter)" } as React.CSSProperties}
      className={cn(
        "h-full font-sans antialiased motion-safe:scroll-smooth",
        inter.variable,
        geist.variable,
        manrope.variable,
        dmSans.variable,
        robotoHeading.variable
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
      </body>
    </html>
  );
}
