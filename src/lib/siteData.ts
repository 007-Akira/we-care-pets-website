import { businessConfig, fullAddress } from "./business";

export const business = {
  name: businessConfig.businessName,
  location: `${businessConfig.address.locality}, ${businessConfig.address.region}`,
  phone: businessConfig.phone,
  whatsappNumber: businessConfig.whatsappNumber,
  whatsappDisplayNumber: businessConfig.whatsappDisplayNumber,
  email: businessConfig.email,
  address: fullAddress,
  hours: businessConfig.openingHours,
};

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#booking", label: "Booking" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export const trustItems = [
  "Established 2021",
  "25+ years of pet care experience",
  "Trusted by 500+ regular customers",
  "Indoor & outdoor cage facilities",
  "Day care, short-term & long-term stays",
  "Open 24 hours",
];

export const stats = [
  { value: "2021", label: "established as a trusted sanctuary" },
  { value: "25+", label: "years of hands-on pet care experience" },
  { value: "500+", label: "satisfied regular customers" },
];

export const facilities = [
  {
    title: "Restful Boarding Suites",
    text: "Premium indoor cage facilities give dogs and puppies a secure, clean, and restful place to settle during short-term and long-term stays.",
    image: "/images/we-care-pets/facilities1.webp",
  },
  {
    title: "Secure Play Yard",
    text: "Outdoor cage facilities and open-air care spaces support fresh air, movement, and supervised engagement throughout the stay.",
    image: "/images/we-care-pets/facilities2.webp",
  },
  {
    title: "Calm Care Corners",
    text: "Personalized affection, steady routines, and attentive handling help puppies, seniors, and first-time boarders feel safe.",
    image: "/images/we-care-pets/facilities3.webp",
  },
];

export const careFeatures = [
  "Indoor cage boarding",
  "Outdoor cage boarding",
  "Day care plans",
  "Short-term stays",
  "Long-term stays",
  "Puppy care",
  "Personalized affection",
  "Open 24 hours",
];

export const reviews = businessConfig.reviewSnippets;

export const faqs = [
  {
    question: "What vaccinations are required?",
    answer:
      "Please keep rabies, DHPP, and Bordetella up to date. We will confirm exact requirements before booking.",
  },
  {
    question: "Can I bring my dog's own food?",
    answer:
      "Yes. Bringing familiar food helps prevent stomach upset, and we follow your feeding notes closely.",
  },
  {
    question: "Do you accept first-time boarders?",
    answer:
      "Yes. We recommend a short meet-and-greet or trial day for dogs who are new to boarding.",
  },
  {
    question: "How will I receive updates?",
    answer:
      "Care updates are coordinated directly with We Care Pets during booking confirmation. WhatsApp enquiries are available through the verified number on this site.",
  },
  {
    question: "Can you handle medication?",
    answer:
      "We can support many medication routines when instructions are clear. Please mention all needs in the enquiry.",
  },
];
