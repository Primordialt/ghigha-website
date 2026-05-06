export type ServiceItem = {
  title: string;
  description: string;
};

export type StepItem = {
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
  variant?: "default" | "premium";
  paymentLink?: string;
};

export const calendlyLink = "https://calendly.com/elliott-primordialt/30min";

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services: ServiceItem[] = [
  {
    title: "Virtual Assistants",
    description:
      "Skilled assistants for admin, customer support, and daily operations.",
  },
  {
    title: "Business Consulting",
    description: "We help you structure your operations and scale with confidence.",
  },
  {
    title: "Marketing & Branding",
    description:
      "We position your brand to attract the right customers and convert more leads.",
  },
  {
    title: "Web & App Development",
    description: "We build modern tools and systems that support your growth.",
  },
];

export const steps: StepItem[] = [
  {
    title: "Tell us what you need",
    description:
      "We understand your business and identify the tasks you want to delegate.",
  },
  {
    title: "We match you with a VA",
    description: "We assign a trained assistant that fits your exact needs.",
  },
  {
    title: "Start working in days",
    description: "You begin working with your assistant quickly and efficiently.",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Starter Plan",
    price: "$1,500/month",
    description:
      "For founders and small businesses needing reliable operational support.",
    features: [
      "Dedicated Virtual Assistant",
      "Email and calendar management",
      "Customer support assistance",
      "Administrative support",
      "Weekly reporting",
      "Slack communication support",
    ],
    cta: "Get Started",
    featured: false,
    paymentLink: "https://buy.stripe.com/bJe9AU2KC1TQenAeQD5Vu08",
  },
  {
    name: "Growth Plan",
    price: "$3,500/month",
    description:
      "For growing businesses that require stronger operational support and workflow management.",
    features: [
      "2 Dedicated Virtual Assistants",
      "CRM management",
      "Lead follow-up",
      "Customer support",
      "Operations coordination",
      "Priority support",
      "Weekly operations review",
    ],
    cta: "Get Started",
    featured: true,
    badge: "Most Popular",
    paymentLink: "https://buy.stripe.com/28E8wQdpgfKG4N05g35Vu09",
  },
  {
    name: "Titan Suite",
    price: "$10,000/month",
    description:
      "For businesses seeking a fully managed remote operations and support team.",
    features: [
      "4–6 Dedicated Virtual Assistants",
      "Operations management oversight",
      "Workflow and operational systems management",
      "Executive assistance",
      "Daily operational support",
      "Workflow optimization",
      "Weekly strategy calls",
      "Priority onboarding and support",
    ],
    cta: "Speak With Our Team",
    featured: false,
    variant: "premium",
    paymentLink: calendlyLink,
  },
];

export const reasons = [
  "Fast onboarding",
  "Reliable operational execution",
  "Managed remote teams you can trust",
  "Easy replacement if needed",
  "Business support systems that scale",
];
