import { business, navItems } from "@/lib/siteData";
import { businessConfig } from "@/lib/business";
import Image from "next/image";
import SmoothAnchor from "./SmoothAnchor";

const policyLinks = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms-and-conditions", label: "Terms" },
  { href: "/boarding-policy", label: "Boarding" },
  { href: "/cancellation-policy", label: "Cancellation" },
];

const developers = [
  { name: "Adithya Kiran", href: "https://www.linkedin.com/in/adithya-kiran-08291827b/" },
  { name: "Godly K Mathews", href: "https://godly.is-a.dev/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1F3D36] px-4 py-6 text-white sm:px-5 md:py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4 border-b border-white/12 pb-4">
          <div className="flex min-w-0 items-center gap-3">
            <Image
              src="/images/we-care-pets/we-care-pets-logo-mark-clean.png"
              alt="We Care Pets logo"
              width={82}
              height={96}
              className="h-9 w-auto shrink-0 brightness-0 invert"
            />
            <div className="min-w-0">
              <h2 className="truncate text-xl font-black leading-tight">
                We Care Pets
              </h2>
              <p className="truncate text-xs font-bold text-white/58 sm:text-sm">
                {business.location}
              </p>
            </div>
          </div>
          <p className="shrink-0 rounded-full border border-white/12 px-3 py-1 text-xs font-black text-[#F5B35F]">
            {business.hours}
          </p>
        </div>

        <div className="grid gap-5 py-5 md:grid-cols-[1fr_1fr_1.1fr]">
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[#F5B35F]">
              Quick Links
            </h3>
            <nav className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-white/72">
              {navItems.map((item) => (
                <SmoothAnchor
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-white"
                >
                  {item.label}
                </SmoothAnchor>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[#F5B35F]">
              Contact
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-white/72">
              <a
                href={`tel:${businessConfig.phoneNumbers[0]}`}
                className="transition hover:text-white"
              >
                {business.phone || "Call"}
              </a>
              <a
                href={`https://wa.me/${businessConfig.whatsappNumber}`}
                className="transition hover:text-white"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${business.email}`}
                className="break-all transition hover:text-white"
              >
                {business.email || "Email"}
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <h3 className="text-xs font-black uppercase tracking-[0.14em] text-[#F5B35F]">
              Visit
            </h3>
            <address className="mt-3 max-w-xl not-italic text-sm font-bold leading-6 text-white/72">
              {business.address}
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/12 pt-4 pr-20 text-xs font-bold text-white/54 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:pr-0">
          <p>© 2026 We Care Pets. All rights reserved.</p>
          <p>
            Developed by{" "}
            {developers.map((developer, index) => (
              <span key={developer.href}>
                {index > 0 && " & "}
                <a
                  href={developer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/72 transition hover:text-white text-sm"
                >
                  {developer.name}
                </a>
              </span>
            ))}
          </p>
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {policyLinks.map((item) => (
              <SmoothAnchor
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </SmoothAnchor>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
