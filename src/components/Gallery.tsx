"use client";

import { getGalleryImages } from "@/lib/galleryImages";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import SectionHeading from "./SectionHeading";

const galleryItems = getGalleryImages();

export default function Gallery() {
  const galleryPages = chunkItems(galleryItems, 6);
  const carouselPages =
    galleryPages.length > 1 ? [...galleryPages, ...galleryPages] : galleryPages;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const swipeStartX = useRef<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((index) =>
      index === null
        ? null
        : (index - 1 + galleryItems.length) % galleryItems.length,
    );
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % galleryItems.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  return (
    <section
      id="gallery"
      className="paw-pattern overflow-hidden border-t border-[#E8DCCB] bg-[#FFF8EF] px-4 py-14 md:px-5 md:py-24"
    >
      <SectionHeading
        eyebrow="Gallery"
        title="Happy guests at We Care Pets"
        text="A glimpse of the dogs, cages, care spaces, and happy stays at We Care Pets."
      />

      <div className="mx-auto mt-8 max-w-6xl" data-reveal>
        <div className="gallery-carousel-shell" aria-label="We Care Pets photos">
          <div
            className={`gallery-carousel-track ${
              galleryPages.length > 1 ? "gallery-carousel-track-animated" : ""
            }`}
          >
            {carouselPages.map((page, pageIndex) => (
              <div
                key={`gallery-page-${pageIndex}`}
                className="gallery-carousel-page"
                data-item-count={page.length}
                aria-hidden={pageIndex >= galleryPages.length}
              >
                {page.map((item, itemIndex) => {
                  const imageIndex =
                    (pageIndex * 6 + itemIndex) % galleryItems.length;

                  return (
                    <button
                      key={`${item.src}-${pageIndex}`}
                      type="button"
                      tabIndex={pageIndex >= galleryPages.length ? -1 : 0}
                      className="gallery-motion-tile group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-xl border border-white/80 bg-white text-left shadow-[0_14px_30px_rgba(31,61,54,0.08)] transition duration-300 active:scale-[0.985] focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#D9903D]"
                      aria-label={`Open image ${imageIndex + 1} of ${galleryItems.length}: ${item.alt}`}
                      onClick={(event) => {
                        triggerRef.current = event.currentTarget;
                        setActiveIndex(imageIndex);
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={900}
                        height={720}
                        sizes="(max-width: 767px) 50vw, 33vw"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035]"
                        priority={pageIndex === 0 && itemIndex < 6}
                      />
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F3D36]/25 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                      <span className="pointer-events-none absolute bottom-2.5 right-2.5 grid h-8 w-8 place-items-center rounded-full border border-white/70 bg-[#1F3D36]/72 text-white opacity-0 shadow-lg backdrop-blur-sm transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                        <ExpandIcon />
                      </span>
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null &&
        createPortal(
          <div
            className="gallery-lightbox-backdrop"
            role="presentation"
            onClick={closeLightbox}
          >
            <div
              className="gallery-lightbox-card"
              role="dialog"
              aria-modal="true"
              aria-label={`Gallery image ${activeIndex + 1} of ${galleryItems.length}`}
            >
              <div className="gallery-lightbox-topbar">
                <span className="gallery-lightbox-count">
                  {String(activeIndex + 1).padStart(2, "0")} / {galleryItems.length}
                </span>
                <button
                  type="button"
                  className="gallery-lightbox-close"
                  onClick={(event) => {
                    event.stopPropagation();
                    closeLightbox();
                  }}
                  aria-label="Close image viewer"
                  autoFocus
                >
                  <CloseIcon />
                </button>
              </div>

              <button
                type="button"
                className="gallery-lightbox-arrow gallery-lightbox-arrow-left"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous image"
              >
                <ChevronIcon direction="left" />
              </button>

              <div
                className="gallery-lightbox-image-wrap"
                onClick={(event) => event.stopPropagation()}
                onPointerDown={(event) => {
                  swipeStartX.current = event.clientX;
                  event.currentTarget.setPointerCapture(event.pointerId);
                }}
                onPointerUp={(event) => {
                  if (swipeStartX.current === null) return;

                  const distance = event.clientX - swipeStartX.current;
                  swipeStartX.current = null;

                  if (Math.abs(distance) < 45) return;
                  if (distance > 0) showPrevious();
                  else showNext();
                }}
                onPointerCancel={() => {
                  swipeStartX.current = null;
                }}
              >
                <Image
                  key={galleryItems[activeIndex].src}
                  src={galleryItems[activeIndex].src}
                  alt={galleryItems[activeIndex].alt}
                  fill
                  sizes="(max-width: 640px) 88vw, 680px"
                  className="gallery-lightbox-image object-contain"
                  priority
                />
              </div>

              <button
                type="button"
                className="gallery-lightbox-arrow gallery-lightbox-arrow-right"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
              >
                <ChevronIcon direction="right" />
              </button>

              <div className="gallery-lightbox-caption">
                <p>{galleryItems[activeIndex].alt}</p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
}

function ExpandIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" aria-hidden="true">
      <path d="M9 4H4v5M15 20h5v-5M4 4l6 6m10 10-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 6 6 6-6 6"} stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function chunkItems<T>(items: T[], pageSize: number) {
  const pages: T[][] = [];

  for (let index = 0; index < items.length; index += pageSize) {
    pages.push(items.slice(index, index + pageSize));
  }

  return pages;
}
