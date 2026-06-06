import Link from "next/link";
import { defaultLocale } from "@/lib/i18n/config";

export default function NotFound() {
  return (
    <main className="coming-soon-bg flex min-h-dvh items-center justify-center px-6 text-center text-white">
      <div>
        <h1 className="mb-2 text-2xl font-bold">404</h1>
        <p className="mb-6 text-white/80">Page not found</p>
        <Link
          href={`/${defaultLocale}`}
          className="lang-pill inline-flex rounded-full px-5 py-2.5 text-sm font-bold"
        >
          {defaultLocale === "ar" ? "العودة للرئيسية" : "Back to home"}
        </Link>
      </div>
    </main>
  );
}
