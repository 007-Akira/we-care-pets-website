import type { Metadata } from "next";
import { businessConfig, siteUrl, streetAddress } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "We Care Pets | Dog Boarding in Eraviperoor, Kerala",
    template: "%s | We Care Pets",
  },
  description:
    "We Care Pets provides safe dog boarding, day care, and short-term and long-term pet boarding in Eraviperoor, Kerala. Established in 2021 with over 25 years of pet care experience.",
  keywords: [
    "We Care Pets",
    "dog boarding in Eraviperoor",
    "pet boarding in Eraviperoor",
    "dog day care Eraviperoor",
    "dog boarding near Nellimala",
    "pet boarding Kerala",
    "dog cage boarding Kerala",
    "short term dog boarding",
    "long term dog boarding",
  ],
  applicationName: "We Care Pets",
  authors: [{ name: "We Care Pets" }],
  creator: "We Care Pets",
  publisher: "We Care Pets",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "We Care Pets",
    title: "We Care Pets | Dog Boarding in Eraviperoor, Kerala",
    description:
      "Safe dog boarding, day care, and short-term and long-term pet stays with indoor and outdoor cage facilities in Eraviperoor, Kerala.",
  },
  twitter: {
    card: "summary_large_image",
    title: "We Care Pets | Dog Boarding in Eraviperoor, Kerala",
    description:
      "Safe dog boarding, day care, and short-term and long-term pet boarding in Eraviperoor, Kerala.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: businessConfig.businessName,
    description: businessConfig.description,
    url: siteUrl,
    logo: `${siteUrl}/icon.png`,
    image: `${siteUrl}/images/we-care-pets/heropage1.webp`,
    email: businessConfig.email,
    foundingDate: String(businessConfig.establishedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: businessConfig.address.locality,
      addressRegion: businessConfig.address.region,
      postalCode: businessConfig.address.postalCode,
      addressCountry: businessConfig.address.country,
    },
    openingHours: "Mo-Su 00:00-23:59",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: `${businessConfig.address.locality}, ${businessConfig.address.region}`,
    hasMap: businessConfig.googleMapsUrl,
    telephone: businessConfig.phoneNumbers.map((number) => `+91${number}`),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: `+91${businessConfig.phoneNumbers[0]}`,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Malayalam"],
      },
      {
        "@type": "ContactPoint",
        email: businessConfig.email,
        contactType: "customer service",
      },
    ],
    sameAs: [
      businessConfig.instagramUrl,
      businessConfig.googleBusinessProfileUrl,
    ],
    makesOffer: businessConfig.services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  return (
    <html lang="en" className="scroll-smooth antialiased">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </body>
    </html>
  );
}
