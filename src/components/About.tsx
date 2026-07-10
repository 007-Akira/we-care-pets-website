import SectionHeading from "./SectionHeading";
import { stats } from "@/lib/siteData";
import { businessConfig } from "@/lib/business";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="paw-pattern overflow-hidden px-4 py-14 md:px-5 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-7 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div
          className="overflow-hidden rounded-[1.4rem] border border-[#E8DCCB] bg-white shadow-[0_18px_42px_rgba(31,61,54,0.08)]"
          data-reveal
        >
          <Image
            src="/images/we-care-pets/about-page.webp?v=2026-07-10-2"
            alt="Labrador receiving personal care from We Care Pets"
            width={1000}
            height={900}
            className="h-64 w-full object-cover object-[50%_32%] md:h-[380px]"
          />
        </div>
        <div>
          <SectionHeading
            align="left"
            eyebrow="About We Care Pets"
            title={`${businessConfig.businessName} - ${businessConfig.tagline}`}
            text="Established in 2021, We Care Pets is a trusted sanctuary for dogs and puppies in Eraviperoor. With over 25 years of hands-on pet care experience, pets are cared for with safety, affection, and calm routines."
          />
          <div className="mt-6 grid grid-cols-3 gap-3" data-reveal>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#E8DCCB] bg-white p-4"
              >
                <p className="text-2xl font-black text-[#D9903D] md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-bold leading-5 text-[#1F3D36] md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
