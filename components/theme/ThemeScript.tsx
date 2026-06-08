import Script from "next/script";
import { defaultTheme, THEME_STORAGE_KEY } from "@/lib/theme/config";

const themeInitScript = `
(function () {
  try {
    var storageKey = ${JSON.stringify(THEME_STORAGE_KEY)};
    var defaultTheme = ${JSON.stringify(defaultTheme)};
    var stored = localStorage.getItem(storageKey) || defaultTheme;
    var resolved = stored === "dark"
      ? "dark"
      : stored === "light"
        ? "light"
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    document.documentElement.setAttribute("data-theme", resolved);
  } catch (e) {}
})();
`;

export function ThemeScript() {
  return (
    <Script id="asim-ac-theme-init" strategy="beforeInteractive">
      {themeInitScript}
    </Script>
  );
}
