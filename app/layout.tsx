import type { Metadata } from "next";
import { Inter, Tajawal } from "next/font/google";
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
    "Professional AC cleaning, maintenance, and repair in Riyadh. Coming soon — contact us on WhatsApp.",
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
    },
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
      className={`${tajawal.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full overflow-x-hidden overflow-y-auto">{children}</body>
    </html>
  );
}
