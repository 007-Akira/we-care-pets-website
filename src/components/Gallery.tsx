import { getGalleryImages } from "@/lib/galleryImages";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const galleryItems = getGalleryImages();
  const galleryPages = chunkItems(galleryItems, 6);
  const carouselPages =
    galleryPages.length > 1 ? [...galleryPages, ...galleryPages] : galleryPages;

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
        <div
          className="gallery-carousel-shell"
          aria-label="We Care Pets photos"
        >
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
                {page.map((item, itemIndex) => (
                  <figure
                    key={`${item.src}-${pageIndex}`}
                    className="gallery-motion-tile group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/80 bg-white shadow-[0_14px_30px_rgba(31,61,54,0.08)] transition duration-300 active:scale-[0.985]"
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
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1F3D36]/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function chunkItems<T>(items: T[], pageSize: number) {
  const pages: T[][] = [];

  for (let index = 0; index < items.length; index += pageSize) {
    pages.push(items.slice(index, index + pageSize));
  }

  return pages;
}
