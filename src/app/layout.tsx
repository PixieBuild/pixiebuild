import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans, Geist, Inter, Manrope, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const robotoHeading = Roboto({ subsets: ["latin"], variable: "--font-heading" });

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "PixieBuild — Web design and development studio",
  description:
    "A web studio for startups and businesses. We design and build fast, exceptionally crafted websites and web applications.",
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
