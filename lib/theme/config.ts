export const THEME_STORAGE_KEY = "asim-ac-theme";

export const themes = ["light", "dark", "system"] as const;

export type Theme = (typeof themes)[number];

export const defaultTheme: Theme = "light";

export function isTheme(value: string): value is Theme {
  return themes.includes(value as Theme);
}

export function resolveTheme(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    if (typeof window === "undefined") {
      return "light";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  return theme;
}
