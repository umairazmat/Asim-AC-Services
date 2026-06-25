/** Smooth-scroll to the global #book-service section (below main content). */
export function scrollToBookService(options?: { focus?: boolean }): boolean {
  const section = document.getElementById("book-service");
  if (!section) return false;

  const headerOffset = Number.parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue("--site-header-offset"),
  );
  const top = section.getBoundingClientRect().top + window.scrollY - headerOffset - 12;

  window.scrollTo({ top, behavior: "smooth" });

  if (options?.focus !== false) {
    window.setTimeout(() => {
      section.querySelector<HTMLElement>("[data-book-service-focus]")?.focus({ preventScroll: true });
    }, 450);
  }

  return true;
}
