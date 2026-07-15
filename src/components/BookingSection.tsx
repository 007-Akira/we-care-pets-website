import BookingForm from "./BookingForm";
import { business } from "@/lib/siteData";

export default function BookingSection() {
  const nextSteps = [
    {
      marker: "01",
      title: "Send details on WhatsApp",
      text: "Your form data opens as a clean pre-filled WhatsApp message.",
    },
    {
      marker: "02",
      title: "We confirm availability",
      text: "We Care Pets replies with available slots, pricing, and confirmation.",
    },
    {
      marker: "03",
      title: "Drop off your dog safely",
      text: "Bring your pet to the facility for a calm, supervised stay.",
    },
  ];

  return (
    <section
      id="booking"
      className="paw-pattern relative overflow-hidden bg-[#F8EFE3] px-4 py-14 md:px-5 md:py-24"
    >
      <div className="pointer-events-none absolute -left-16 top-16 h-48 w-48 rounded-full bg-[#D9903D]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-[#6B8F71]/12 blur-3xl" />

      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14" data-reveal>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-[#D9903D]">
            Boarding Enquiry
          </p>
          <h2 className="text-3xl font-black leading-tight text-[#1F3D36] md:text-5xl">
            Check availability in under a minute
          </h2>
          <p className="mt-4 text-base leading-7 text-[#1C1C1A]/72 md:text-lg md:leading-8">
            Share your dog&apos;s basic details and We Care Pets will confirm
            availability and pricing directly on WhatsApp.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div
            className="paw-pattern overflow-hidden rounded-[2rem] border border-[#E8DCCB] bg-[#FFF8EF] p-5 shadow-[0_24px_60px_rgba(31,61,54,0.12)] md:p-8 lg:p-10"
            data-reveal
          >
            <div className="mb-8 inline-flex rounded-full border border-[#CDE0D2] bg-[#6B8F71]/10 px-4 py-2 text-sm font-black text-[#1F3D36]">
              Quick Enquiry
            </div>
            <BookingForm />
          </div>

          <aside className="space-y-6" data-reveal>
            <div>
              <h3 className="text-2xl font-black text-[#1F3D36]">
                What happens next?
              </h3>
              <div className="mt-5 space-y-4">
                {nextSteps.map((step) => (
                  <div
                    key={step.title}
                    className="flex gap-4 rounded-2xl border border-[#CDE0D2] bg-[#6B8F71]/7 p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#6B8F71]/18 text-sm font-black text-[#1F3D36]">
                      {step.marker}
                    </div>
                    <div>
                      <h4 className="font-black text-[#1F3D36]">
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-[#1C1C1A]/68">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-[#1F3D36] p-6 text-white shadow-[0_20px_44px_rgba(31,61,54,0.18)] md:p-8">
              <div className="space-y-5">
                {[
                  ["Open 24 hours", business.hours],
                  ["Located in", business.location],
                  ["WhatsApp", business.whatsappDisplayNumber],
                  ["Confirmation", "Direct availability and pricing reply"],
                ].map(([title, text]) => (
                  <div key={title} className="flex gap-4">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#D9903D]" />
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#D9903D]">
                        {title}
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-white/88">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
