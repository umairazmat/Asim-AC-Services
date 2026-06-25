import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeScript } from "@/components/theme/ThemeScript";
import { defaultLocale } from "@/lib/i18n/config";
import { getMetadataBase, getSiteUrl } from "@/lib/site-url";
import "./globals.css";
const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Asim AC Services | خدمة المكيفات عاصم",
    template: "%s | Asim AC Services",
  },
  description:
    "Professional AC cleaning, maintenance, repair, and installation in Riyadh, Saudi Arabia (KSA). Book on WhatsApp.",
  alternates: {
    canonical: `/${defaultLocale}`,
    languages: {
      ar: "/ar",
      en: "/en",
      "x-default": "/ar",
    },
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
  manifest: "/manifest.webmanifest",
  other: {
    "ai-content-index": "/llms.txt",
    "full-ai-content-index": "/llms-full.txt",
  },
  openGraph: {
    type: "website",
    siteName: "Asim AC Services",
    url: getSiteUrl(),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-theme="light"
      suppressHydrationWarning
      className={`${tajawal.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden overflow-y-auto">
        <ThemeScript />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
