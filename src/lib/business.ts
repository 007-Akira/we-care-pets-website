export const businessConfig = {
  businessName: "We Care Pets",
  tagline: "Your pet's second home.",
  description:
    "We Care Pets - Your pet's second home. Established in 2021, We Care Pets is a trusted sanctuary for dogs and puppies. Backed by over 25 years of hands-on pet care experience, we provide a safe and engaging space where pets are treated like family. We offer premium indoor and outdoor cage facilities, alongside flexible day care, short-term, and long-term boarding plans. Trusted by over 500 satisfied regular customers, our mission is to deliver personalized affection to your pets while giving you total peace of mind while you are away.",
  establishedYear: 2021,
  experienceYears: "25+",
  customerTrustText: "Trusted by over 500 satisfied regular customers",
  address: {
    line1: "RR Villa Maruthuparambil House",
    line2: "Nellimala PO",
    locality: "Eraviperoor",
    region: "Kerala",
    postalCode: "689542",
    country: "IN",
  },
  openingHours: "Open 24 hours",
  phone: "9446669982 / 8590384044",
  phoneNumbers: ["9446669982", "8590384044"],
  whatsappNumber: "919446669982",
  whatsappDisplayNumber: "9446669982",
  email: "wecarepets09@gmail.com",
  websiteUrl: "",
  googleMapsUrl: "https://maps.app.goo.gl/sJcuAPyHqPJ3786f8",
  googleBusinessProfileUrl: "https://maps.app.goo.gl/sJcuAPyHqPJ3786f8",
  instagramHandle: "@we_care_pet_boarding_2021",
  instagramUrl: "https://www.instagram.com/we_care_pet_boarding_2021/",
  services: [
    "Dog Boarding",
    "Dog Day Care",
    "Short-Term Boarding",
    "Long-Term Boarding",
    "Indoor Cage Facilities",
    "Outdoor Cage Facilities",
  ],
  reviewSnippets: [
    {
      name: "Suby George",
      quote:
        "One thing that really impressed us is the variety of dog cage sizes available.",
    },
    {
      name: "Sunil Agrawal",
      quote: "Dog's cage area very clean, no bad smell.",
    },
    {
      name: "reena benny",
      quote:
        "Shadows well cared for, happy, and clearly treated with love and attention.",
    },
  ],
};

export const fullAddress = [
  businessConfig.address.line1,
  businessConfig.address.line2,
  businessConfig.address.locality,
  businessConfig.address.region,
  businessConfig.address.postalCode,
].join(", ");

export const streetAddress = [
  businessConfig.address.line1,
  businessConfig.address.line2,
].join(", ");

const configuredSiteUrl =
  businessConfig.websiteUrl ||
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "http://localhost:3000";

export const siteUrl = configuredSiteUrl.replace(/\/$/, "");
