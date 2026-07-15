import { business } from "@/lib/siteData";
import { businessConfig, fullAddress } from "@/lib/business";
import Image from "next/image";
import SmoothAnchor from "./SmoothAnchor";
import SectionHeading from "./SectionHeading";

type ContactIconName = "phone" | "whatsapp" | "email" | "instagram" | "clock";

const mapSearchQuery = [
  businessConfig.businessName,
  businessConfig.address.line1,
  businessConfig.address.line2,
  businessConfig.address.locality,
  businessConfig.address.region,
  businessConfig.address.postalCode,
].join(", ");

const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
  mapSearchQuery,
)}&z=17&output=embed`;

export default function Contact() {
  const contactItems = [
    {
      label: "Phone",
      value: business.phone || "Coming soon",
      icon: "phone" as const,
      href: businessConfig.phoneNumbers[0]
        ? `tel:${businessConfig.phoneNumbers[0]}`
        : undefined,
    },
    {
      label: "WhatsApp",
      value: business.whatsappDisplayNumber || "Coming soon",
      icon: "whatsapp" as const,
      href: businessConfig.whatsappNumber
        ? `https://wa.me/${businessConfig.whatsappNumber}`
        : undefined,
    },
    {
      label: "Email",
      value: business.email || "Coming soon",
      icon: "email" as const,
      href: business.email ? `mailto:${business.email}` : undefined,
    },
    {
      label: "Instagram",
      value: businessConfig.instagramHandle,
      icon: "instagram" as const,
      href: businessConfig.instagramUrl,
    },
    {
      label: "Hours",
      value: business.hours,
      icon: "clock" as const,
    },
  ];

  return (
    <section
      id="contact"
      className="paw-pattern overflow-hidden bg-white px-4 py-14 md:px-5 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14" data-reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Visit or contact We Care Pets"
            text="Everything you need for direct enquiries, directions, and booking follow-ups in Eraviperoor, Kerala."
          />
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5" data-reveal>
            <div className="rounded-[2rem] border border-[#E8DCCB] bg-[#FFF8EF] p-5 shadow-[0_22px_56px_rgba(31,61,54,0.10)] md:p-7">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D9903D]">
                Quick Contact
              </p>
              <h3 className="mt-3 text-2xl font-black text-[#1F3D36]">
                {business.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#1C1C1A]/68">
                Reach out before visiting so boarding slots, cage preference,
                dates, and care notes can be confirmed clearly.
              </p>

              <div className="mt-6 grid gap-3">
                {contactItems.map((item) => (
                  <ContactCard key={item.label} {...item} />
                ))}
              </div>
            </div>

          </div>

          <div
            className="overflow-hidden rounded-[2rem] border border-[#E8DCCB] bg-white shadow-[0_24px_60px_rgba(31,61,54,0.12)]"
            data-reveal
          >
            <iframe
              src={mapEmbedUrl}
              title="Google Map showing We Care Pets in Eraviperoor, Kerala"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 md:h-[430px]"
              allowFullScreen
            />
            <div className="grid gap-5 border-t border-[#E8DCCB] bg-[#FFF8EF] p-5 md:grid-cols-[1fr_auto] md:p-6">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#D9903D]">
                  Location
                </p>
                <h3 className="mt-2 text-2xl font-black text-[#1F3D36]">
                  Eraviperoor, Kerala
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#1C1C1A]/70">
                  {fullAddress}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col md:justify-center">
                {businessConfig.googleMapsUrl ? (
                  <a
                    href={businessConfig.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex justify-center rounded-full bg-[#1F3D36] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5"
                  >
                    Directions
                  </a>
                ) : (
                  <span className="inline-flex justify-center rounded-full bg-[#1F3D36]/65 px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white">
                    Directions
                  </span>
                )}
                {businessConfig.whatsappNumber ? (
                  <SmoothAnchor
                    href="#booking"
                    className="inline-flex justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-[0_12px_24px_rgba(37,211,102,0.18)] transition hover:-translate-y-0.5"
                  >
                    Book
                  </SmoothAnchor>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  label,
  value,
  icon,
  href,
}: {
  label: string;
  value: string;
  icon: ContactIconName;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <ContactIcon icon={icon} />
      <div>
        <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D9903D]">
          {label}
        </p>
        <p className="mt-1 break-words text-base font-black leading-6 text-[#1F3D36]">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="block rounded-2xl border border-[#E8DCCB] bg-white p-4 transition hover:-translate-y-0.5 hover:border-[#CDE0D2] hover:shadow-[0_14px_28px_rgba(31,61,54,0.08)]"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-[#E8DCCB] bg-white p-4">
      {content}
    </div>
  );
}

function ContactIcon({ icon }: { icon: ContactIconName }) {
  const iconClassName = "h-5 w-5";

  return (
    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FFF8EF] text-[#1F3D36] ring-1 ring-[#E8DCCB]">
      {icon === "whatsapp" ? (
        <Image
          src="/images/we-care-pets/whatsapp-icon.png"
          alt=""
          aria-hidden
          width={64}
          height={64}
          className="h-5 w-5"
        />
      ) : null}
      {icon === "phone" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.77.59 2.61a2 2 0 0 1-.45 2.11L8 9.69a16 16 0 0 0 6.31 6.31l1.25-1.25a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.61.59A2 2 0 0 1 22 16.92Z" />
        </svg>
      ) : null}
      {icon === "email" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      ) : null}
      {icon === "instagram" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      ) : null}
      {icon === "clock" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={iconClassName}
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ) : null}
    </span>
  );
}
