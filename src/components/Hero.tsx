"use client";

import Image from "next/image";
import SmoothAnchor from "./SmoothAnchor";

export default function Hero() {
  return (
    <section
      id="home"
      className="paw-pattern relative isolate flex min-h-screen items-center overflow-hidden px-4 pb-14 pt-32 md:px-5 md:pb-20 md:pt-40"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(217,144,61,0.12),transparent_30%),radial-gradient(circle_at_88%_18%,rgba(107,143,113,0.17),transparent_34%)]" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="min-w-0 space-y-7" data-reveal>
          <h1 className="max-w-4xl text-5xl font-black leading-[1.02] text-[#1F3D36] md:text-7xl">
            Dog Boarding at We Care Pets in Eraviperoor, Kerala
          </h1>
          <p className="max-w-xl text-base leading-7 text-[#1C1C1A]/74 md:text-lg md:leading-8">
            Experience peace of mind with supervised care, spacious indoor and
            outdoor boarding areas, and steady updates while your dog stays with
            us.
          </p>
          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <SmoothAnchor
              href="#booking"
              className="rounded-full bg-[#1F3D36] px-7 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_16px_30px_rgba(31,61,54,0.20)] transition hover:-translate-y-0.5"
            >
              Check Availability
            </SmoothAnchor>
            <SmoothAnchor
              href="#facilities"
              className="rounded-full border border-[#1F3D36] bg-transparent px-7 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#1F3D36] transition hover:bg-[#1F3D36]/5"
            >
              Explore Facilities
            </SmoothAnchor>
          </div>
        </div>

        <div
          className="hero-image-stage relative mx-auto h-[280px] w-full max-w-md sm:h-[340px] lg:h-[470px] lg:max-w-lg"
          data-reveal
        >
          <div className="hero-image-card hero-image-card-front hero-organic-shadow absolute right-[-8%] top-0 h-[70%] w-[70%] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/we-care-pets/gallery-06.webp?v=2026-07-10"
              alt="Dog guest at We Care Pets"
              width={1100}
              height={900}
              priority
              className="hero-image-zoom h-full w-full object-cover"
            />
          </div>
          <div className="hero-image-card hero-image-card-back hero-organic-shadow absolute bottom-[-8%] left-[-8%] h-[70%] w-[70%] overflow-hidden rounded-[2rem] border-4 border-[#FFF8EF]/80">
            <Image
              src="/images/we-care-pets/naadan_patti.webp?v=2026-07-10-2"
              alt="Naadan dog guest at We Care Pets"
              width={1000}
              height={820}
              className="hero-image-zoom h-full w-full object-cover object-[50%_25%] sm:object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
