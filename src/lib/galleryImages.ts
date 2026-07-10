import { galleryFiles } from "./galleryData";

export type GalleryImage = {
  src: string;
  alt: string;
};

const galleryPublicPath = "/images/we-care-pets/gallery";
// Change this value whenever existing gallery files are replaced in place so
// Next.js and the production CDN request a fresh optimized image.
const galleryVersion = "2026-07-10-4";

export function getGalleryImages(): GalleryImage[] {
  return galleryFiles.map((filename) => ({
    src: `${galleryPublicPath}/${filename}?v=${galleryVersion}`,
    alt: `We Care Pets boarding gallery photo ${formatPhotoLabel(filename)}`,
  }));
}

function formatPhotoLabel(filename: string) {
  const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
  const photoNumber = nameWithoutExtension.match(/\d+/)?.[0];

  return photoNumber ?? nameWithoutExtension.replace(/[-_]+/g, " ");
}
