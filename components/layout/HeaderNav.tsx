"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { BOOK_SERVICE_SECTION } from "@/lib/constants/book-service-content";
import {
  getNavChildLabel,
  getNavHref,
  isNavActive,
  isNavEntryActive,
  NAV_BOOK_ITEM,
  NAV_ENTRIES,
  type NavEntry,
  type NavGroupEntry,
} from "@/lib/constants/navigation";
import { scrollToBookService } from "@/lib/scroll-to-book-service";
import type { Locale } from "@/lib/i18n/config";

type HeaderNavProps = {
  locale: Locale;
  onNavigate?: () => void;
  className?: string;
  showBookLink?: boolean;
};

export function HeaderNav({
  locale,
  onNavigate,
  className = "",
  showBookLink = false,
}: HeaderNavProps) {
  const pathname = usePathname();
  const bookCopy = BOOK_SERVICE_SECTION.navCta;
  const isMobile = className.includes("mobile");
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  const closeGroups = useCallback(() => {
    setOpenGroupId(null);
  }, []);

  const openGroup = useCallback((groupId: string) => {
    setOpenGroupId(groupId);
  }, []);

  const toggleGroup = useCallback((groupId: string) => {
    setOpenGroupId((current) => (current === groupId ? null : groupId));
  }, []);

  useEffect(() => {
    closeGroups();
  }, [pathname, closeGroups]);

  function handleBookClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    scrollToBookService();
    onNavigate?.();
  }

  function handleNavigate() {
    closeGroups();
    onNavigate?.();
  }

  return (
    <nav
      className={`header-nav ${className}`.trim()}
      aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
    >
      <ul className="header-nav__list">
        {NAV_ENTRIES.map((entry) =>
          entry.type === "page" ? (
            <li key={entry.id}>
              <NavPageLink
                locale={locale}
                entry={entry}
                pathname={pathname}
                onNavigate={handleNavigate}
              />
            </li>
          ) : isMobile ? (
            <li key={entry.id} className="header-nav__item--group">
              <NavMobileGroup
                locale={locale}
                entry={entry}
                pathname={pathname}
                isOpen={openGroupId === entry.id}
                onToggle={() => toggleGroup(entry.id)}
                onNavigate={handleNavigate}
              />
            </li>
          ) : (
            <li key={entry.id} className="header-nav__item--group">
              <NavDesktopGroup
                locale={locale}
                entry={entry}
                pathname={pathname}
                isOpen={openGroupId === entry.id}
                onOpen={() => openGroup(entry.id)}
                onClose={closeGroups}
                onToggle={() => toggleGroup(entry.id)}
                onNavigate={handleNavigate}
              />
            </li>
          ),
        )}

        {showBookLink ? (
          <li>
            <a
              href={NAV_BOOK_ITEM.hash}
              className="header-nav__link header-nav__link--book"
              onClick={handleBookClick}
            >
              {bookCopy.navLabel[locale]}
            </a>
          </li>
        ) : null}
      </ul>
    </nav>
  );
}

type NavPageLinkProps = {
  locale: Locale;
  entry: Extract<NavEntry, { type: "page" }>;
  pathname: string;
  onNavigate?: () => void;
  className?: string;
};

function NavPageLink({ locale, entry, pathname, onNavigate, className = "" }: NavPageLinkProps) {
  const href = getNavHref(locale, entry.pageId);
  const active = isNavActive(pathname, locale, entry.pageId);

  return (
    <Link
      href={href}
      className={`header-nav__link ${active ? "header-nav__link--active" : ""} ${className}`.trim()}
      aria-current={active ? "page" : undefined}
      onClick={onNavigate}
    >
      {entry.label[locale]}
    </Link>
  );
}

type NavDesktopGroupProps = {
  locale: Locale;
  entry: NavGroupEntry;
  pathname: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  onNavigate?: () => void;
};

function NavDesktopGroup({
  locale,
  entry,
  pathname,
  isOpen,
  onOpen,
  onClose,
  onToggle,
  onNavigate,
}: NavDesktopGroupProps) {
  const menuId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const active = isNavEntryActive(pathname, locale, entry);
  const hubHref = getNavHref(locale, entry.pageId);

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={rootRef}
      className={`header-nav__dropdown ${isOpen ? "header-nav__dropdown--open" : ""}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        type="button"
        className={`header-nav__trigger ${active ? "header-nav__trigger--active" : ""}`}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={onToggle}
      >
        <span>{entry.label[locale]}</span>
        <ChevronIcon className="header-nav__chevron" open={isOpen} />
      </button>

      <div className="header-nav__submenu-wrap">
        <ul
          id={menuId}
          className={`header-nav__submenu ${entry.wideMenu ? "header-nav__submenu--wide" : ""}`}
          role="menu"
          aria-label={entry.label[locale]}
        >
          <li role="none">
            <Link
              href={hubHref}
              role="menuitem"
              className={`header-nav__sublink header-nav__sublink--hub ${
                isNavActive(pathname, locale, entry.pageId) ? "header-nav__sublink--active" : ""
              }`}
              onClick={onNavigate}
            >
              {entry.hubLabel[locale]}
            </Link>
          </li>
          {entry.children
            .filter((child) => child.pageId !== entry.pageId)
            .map((child) => {
              const href = getNavHref(locale, child.pageId);
              const childActive = isNavActive(pathname, locale, child.pageId);

              return (
                <li key={child.pageId} role="none">
                  <Link
                    href={href}
                    role="menuitem"
                    className={`header-nav__sublink ${childActive ? "header-nav__sublink--active" : ""}`}
                    onClick={onNavigate}
                  >
                    {getNavChildLabel(locale, child)}
                  </Link>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

type NavMobileGroupProps = {
  locale: Locale;
  entry: NavGroupEntry;
  pathname: string;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
};

function NavMobileGroup({ locale, entry, pathname, isOpen, onToggle, onNavigate }: NavMobileGroupProps) {
  const panelId = useId();
  const active = isNavEntryActive(pathname, locale, entry);

  return (
    <div className={`header-nav__mobile-group ${isOpen ? "header-nav__mobile-group--open" : ""}`}>
      <div className="header-nav__mobile-group-head">
        <Link
          href={getNavHref(locale, entry.pageId)}
          className={`header-nav__link header-nav__mobile-parent ${
            active ? "header-nav__link--active" : ""
          }`}
          onClick={onNavigate}
        >
          {entry.label[locale]}
        </Link>
        <button
          type="button"
          className="header-nav__mobile-toggle"
          aria-expanded={isOpen}
          aria-controls={panelId}
          aria-label={
            locale === "ar"
              ? `${isOpen ? "إخفاء" : "عرض"} قائمة ${entry.label.ar}`
              : `${isOpen ? "Hide" : "Show"} ${entry.label.en} menu`
          }
          onClick={onToggle}
        >
          <ChevronIcon className="header-nav__chevron" open={isOpen} />
        </button>
      </div>

      <ul
        id={panelId}
        className="header-nav__mobile-submenu"
        hidden={!isOpen}
        aria-label={entry.label[locale]}
      >
        {entry.children.map((child) => {
          const href = getNavHref(locale, child.pageId);
          const childActive = isNavActive(pathname, locale, child.pageId);

          return (
            <li key={child.pageId}>
              <Link
                href={href}
                className={`header-nav__sublink header-nav__sublink--mobile ${
                  childActive ? "header-nav__sublink--active" : ""
                }`}
                onClick={onNavigate}
              >
                {getNavChildLabel(locale, child)}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ChevronIcon({ className, open }: { className?: string; open?: boolean }) {
  return (
    <svg
      className={`${className ?? ""} ${open ? "header-nav__chevron--open" : ""}`.trim()}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
