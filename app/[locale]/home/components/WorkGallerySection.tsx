"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { HOME_CONTENT } from "@/app/[locale]/home/content";
import styles from "@/app/[locale]/home/components/WorkGallerySection.module.css";
import { SnowflakeIcon } from "@/components/ui/SnowflakeIcon";
import { getWhatsAppUrl } from "@/lib/constants/contact";
import {
  filterGalleryItems,
  GALLERY_CATEGORIES,
  pickFeaturedItem,
  pickTeaserGalleryItems,
  type GalleryCategory,
  type WorkGalleryItem,
} from "@/lib/constants/home-work-gallery";
import { getPageHref } from "@/lib/i18n/pages";
import type { PageId } from "@/lib/i18n/pages";
import type { Locale } from "@/lib/i18n/config";

type WorkGallerySectionProps = {
  locale: Locale;
  variant?: "teaser" | "full";
  sectionId?: string;
  headingId?: string;
};

export function WorkGallerySection({
  locale,
  variant = "teaser",
  sectionId = "work-gallery",
  headingId: headingIdProp,
}: WorkGallerySectionProps) {
  const generatedHeadingId = useId();
  const headingId = headingIdProp ?? generatedHeadingId;
  const videoTitleId = useId();
  const { workGallery } = HOME_CONTENT;
  const isTeaser = variant === "teaser";
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [activeVideo, setActiveVideo] = useState<WorkGalleryItem | null>(null);

  const filteredItems = useMemo(
    () => (isTeaser ? pickTeaserGalleryItems() : filterGalleryItems(activeCategory)),
    [activeCategory, isTeaser],
  );

  const featuredItem = useMemo(
    () => (isTeaser ? undefined : pickFeaturedItem(filteredItems)),
    [filteredItems, isTeaser],
  );

  const gridItems = useMemo(() => {
    if (isTeaser) return filteredItems;
    return featuredItem ? filteredItems.filter((item) => item.id !== featuredItem.id) : [];
  }, [featuredItem, filteredItems, isTeaser]);

  const closeVideo = useCallback(() => setActiveVideo(null), []);
  const galleryHref = `${getPageHref(locale, "about" satisfies PageId)}#${sectionId}`;

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeVideo();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeVideo, closeVideo]);

  if (gridItems.length === 0 && !featuredItem) return null;

  return (
    <>
      <section
        className={styles.section}
        aria-labelledby={headingId}
        lang={locale}
        id={isTeaser ? undefined : sectionId}
      >
        <div className={styles.shell}>
          <header className={`${styles.header} fade-up`}>
            <p className={styles.eyebrow}>
              <SnowflakeIcon className={styles.eyebrowIcon} />
              <span>{workGallery.eyebrow[locale]}</span>
            </p>

            <h2 id={headingId} className={styles.title}>
              {workGallery.heading[locale]}
            </h2>

            <p className={styles.subline}>{workGallery.subline[locale]}</p>
          </header>

          {!isTeaser ? (
            <div className={styles.filters} role="tablist" aria-label={workGallery.heading[locale]}>
              {GALLERY_CATEGORIES.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeCategory === category}
                  className={`${styles.filterChip} ${activeCategory === category ? styles.filterChipActive : ""}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {workGallery.filters[category][locale]}
                </button>
              ))}
            </div>
          ) : null}

          <div className={`${styles.gallery} ${isTeaser ? styles.galleryTeaser : ""}`}>
            {!isTeaser && featuredItem ? (
              <GalleryCard
                item={featuredItem}
                locale={locale}
                featured
                playLabel={workGallery.playVideo[locale]}
                categoryLabel={workGallery.filters[featuredItem.category][locale]}
                mediaTypeLabel={
                  featuredItem.type === "video"
                    ? workGallery.mediaBadges.video[locale]
                    : workGallery.mediaBadges.photo[locale]
                }
                onPlayVideo={setActiveVideo}
                compactCopy={isTeaser}
              />
            ) : null}

            {gridItems.map((item) => (
              <GalleryCard
                key={item.id}
                item={item}
                locale={locale}
                playLabel={workGallery.playVideo[locale]}
                categoryLabel={workGallery.filters[item.category][locale]}
                mediaTypeLabel={
                  item.type === "video"
                    ? workGallery.mediaBadges.video[locale]
                    : workGallery.mediaBadges.photo[locale]
                }
                onPlayVideo={setActiveVideo}
                compactCopy={isTeaser}
              />
            ))}
          </div>

          <aside className={`${styles.cta} fade-up fade-up--delay-2`}>
            {isTeaser ? (
              <Link href={galleryHref} className={styles.viewAllLink}>
                <span>{workGallery.viewAllCta[locale]}</span>
                <ArrowIcon className={styles.viewAllArrow} />
              </Link>
            ) : (
              <>
                <h3 className={styles.ctaTitle}>{workGallery.cta.title[locale]}</h3>
                <a
                  href={getWhatsAppUrl(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaButton}
                >
                  <WhatsAppIcon />
                  <span>{workGallery.cta.button[locale]}</span>
                </a>
              </>
            )}
          </aside>
        </div>
      </section>

      {activeVideo ? (
        <div className={styles.modal} role="presentation">
          <button
            type="button"
            className={styles.modalBackdrop}
            aria-label={workGallery.closeVideo[locale]}
            onClick={closeVideo}
          />
          <div
            className={styles.modalPanel}
            role="dialog"
            aria-modal="true"
            aria-labelledby={videoTitleId}
          >
            <button
              type="button"
              className={styles.modalClose}
              aria-label={workGallery.closeVideo[locale]}
              onClick={closeVideo}
            >
              ×
            </button>
            <h3 id={videoTitleId} className={styles.modalTitle}>
              {activeVideo.title[locale]}
            </h3>
            <p className={styles.modalCaption}>{activeVideo.caption[locale]}</p>
            <video
              className={styles.modalVideo}
              src={activeVideo.src}
              poster={activeVideo.poster}
              controls
              playsInline
              muted
              autoPlay
              preload="none"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}

type GalleryCardProps = {
  item: WorkGalleryItem;
  locale: Locale;
  featured?: boolean;
  playLabel: string;
  categoryLabel: string;
  mediaTypeLabel: string;
  onPlayVideo: (item: WorkGalleryItem) => void;
  compactCopy?: boolean;
};

function GalleryCard({
  item,
  locale,
  featured = false,
  playLabel,
  categoryLabel,
  mediaTypeLabel,
  onPlayVideo,
  compactCopy = false,
}: GalleryCardProps) {
  const isVideo = item.type === "video";

  return (
    <article
      className={`${styles.card} ${featured ? styles.cardFeatured : ""} ${isVideo ? styles.cardVideo : ""} ${compactCopy ? styles.cardCompact : ""}`}
    >
      <div className={styles.mediaWrap}>
        {isVideo ? (
          <button
            type="button"
            className={styles.videoTrigger}
            aria-label={`${playLabel}: ${item.title[locale]}`}
            onClick={() => onPlayVideo(item)}
          >
            <Image
              src={item.poster ?? item.src}
              alt={item.alt[locale]}
              fill
              sizes={featured ? "(max-width: 63.99rem) 100vw, 50vw" : "(max-width: 63.99rem) 50vw, 25vw"}
              className={styles.media}
              style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
              loading="lazy"
            />
            <span className={styles.playBadge} aria-hidden="true">
              <PlayIcon />
            </span>
          </button>
        ) : (
          <Image
            src={item.src}
            alt={item.alt[locale]}
            fill
            sizes={featured ? "(max-width: 63.99rem) 100vw, 50vw" : "(max-width: 63.99rem) 50vw, 25vw"}
            className={styles.media}
            style={item.objectPosition ? { objectPosition: item.objectPosition } : undefined}
            loading="lazy"
          />
        )}

        <GalleryMediaBadges
          categoryLabel={categoryLabel}
          mediaTypeLabel={mediaTypeLabel}
          isVideo={isVideo}
        />

        {compactCopy ? (
          <div className={styles.mediaHoverOverlay} aria-hidden="true">
            <p className={styles.mediaHoverTitle}>{item.title[locale]}</p>
            <p className={styles.mediaHoverCaption}>{item.caption[locale]}</p>
          </div>
        ) : null}
      </div>

      {!compactCopy ? (
        <div className={styles.cardCopy}>
          <h3 className={styles.cardTitle}>{item.title[locale]}</h3>
          <p className={styles.cardCaption}>{item.caption[locale]}</p>
        </div>
      ) : null}
    </article>
  );
}

type GalleryMediaBadgesProps = {
  categoryLabel: string;
  mediaTypeLabel: string;
  isVideo: boolean;
};

function GalleryMediaBadges({ categoryLabel, mediaTypeLabel, isVideo }: GalleryMediaBadgesProps) {
  return (
    <div className={styles.mediaBadges}>
      <span className={styles.categoryBadge}>{categoryLabel}</span>
      <span
        className={`${styles.typeBadge} ${isVideo ? styles.typeBadgeVideo : styles.typeBadgePhoto}`}
      >
        {isVideo ? <VideoIcon className={styles.typeBadgeIcon} /> : <PhotoIcon className={styles.typeBadgeIcon} />}
        <span>{mediaTypeLabel}</span>
      </span>
    </div>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M8 6.5v11l9-5.5-9-5.5Z" />
    </svg>
  );
}

function PhotoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="9" cy="11" r="1.75" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 16l4.5-4.5 3 3L14 10l6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VideoIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="6.5" width="13" height="11" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M16.5 10.5 21 8v8l-4.5-2.5v-3Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
