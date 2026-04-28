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
};

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
    name: "Starter",
    price: "$499/mo",
    description: "Great for solo founders and small teams.",
    features: ["Part-time VA support", "Email and calendar help", "Weekly check-ins"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "$999/mo",
    description: "Best for growing businesses with daily operations.",
    features: [
      "Dedicated VA support",
      "Customer support tasks",
      "Research and reporting",
      "Priority communication",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Scale+",
    price: "Custom",
    description: "For teams that need advanced growth support.",
    features: [
      "Multiple team members",
      "Consulting and process design",
      "Marketing, branding, and tech support",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

export const reasons = [
  "Fast onboarding",
  "Affordable pricing",
  "Skilled and reliable assistants",
  "Easy replacement if needed",
  "Built for growing businesses",
];
