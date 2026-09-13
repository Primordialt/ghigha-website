export type ServiceItem = {
  title: string;
  description: string;
  highlights?: string[];
};

export type StepItem = {
  title: string;
  description: string;
};

export type PricingTier = {
  name: string;
  subtitle?: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  featured: boolean;
  badge?: string;
  variant?: "default" | "premium";
  paymentLink?: string;
};

export type DifferenceItem = {
  title: string;
  description: string;
};

export const calendlyLink = "https://calendly.com/elliott-primordialt/30min";

export const navLinks = [
  { href: "/services", label: "Solutions" },
  { href: "/#how-ghigha-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const services: ServiceItem[] = [
  {
    title: "Executive & Administrative Operations",
    description:
      "We take recurring coordination work off your team's plate so leadership can stay focused on decisions, clients, and growth.",
    highlights: [
      "Calendar and scheduling coordination",
      "Inbox and communication management",
      "Documentation and research",
      "Meeting coordination",
      "Administrative workflows",
      "Executive assistance",
    ],
  },
  {
    title: "Customer Communication",
    description:
      "We help businesses maintain responsive, consistent customer communication without forcing leadership to manage every interaction.",
    highlights: [
      "Customer inquiries",
      "Email communication",
      "Follow-ups",
      "Appointment coordination",
      "Customer support workflows",
      "CRM updates",
    ],
  },
  {
    title: "Workflow & Process Coordination",
    description:
      "We keep recurring business processes moving so opportunities and handoffs don't stall in operational gaps.",
    highlights: [
      "Task coordination",
      "Process execution",
      "Workflow management",
      "CRM administration",
      "Reporting",
      "Follow-up systems",
      "Internal coordination",
    ],
  },
  {
    title: "Growth Operations Support",
    description:
      "We provide operational capacity around revenue-generating work so your team can pursue growth without losing execution quality.",
    highlights: [
      "Lead follow-up",
      "Pipeline administration",
      "Client onboarding coordination",
      "Appointment scheduling",
      "Sales administration",
      "Reporting and tracking",
    ],
  },
];

export const steps: StepItem[] = [
  {
    title: "Assess",
    description:
      "Understand where your business is losing operational capacity. We learn how your team works, identify recurring bottlenecks, and determine where additional support can create the greatest impact.",
  },
  {
    title: "Build",
    description:
      "Design the right support structure around your workflows. We identify the responsibilities, processes, and support resources required for your business.",
  },
  {
    title: "Operate",
    description:
      "We take ownership of the agreed operational responsibilities. Your Ghigha support team executes recurring workflows while maintaining communication, structure, and accountability.",
  },
  {
    title: "Improve",
    description:
      "Your support structure evolves as your business grows. We continuously identify opportunities to improve workflows, reduce friction, and increase operational efficiency.",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "Operational Support",
    price: "$1,500/month",
    description:
      "For businesses that need dependable operational capacity without adding another full-time hire.",
    features: [
      "Administrative coordination",
      "Executive support",
      "Scheduling",
      "Customer communication",
      "CRM and workflow support",
      "Recurring operational tasks",
      "Weekly reporting",
    ],
    cta: "Explore Starter",
    featured: false,
    paymentLink: "https://buy.stripe.com/bJe9AU2KC1TQenAeQD5Vu08",
  },
  {
    name: "Growth",
    subtitle: "Growth Operations",
    price: "$3,500/month",
    description:
      "For growing businesses managing increasing operational complexity.",
    features: [
      "Multi-function operational support",
      "Workflow coordination",
      "Customer communication",
      "CRM and pipeline administration",
      "Lead follow-up",
      "Client onboarding support",
      "Operational reporting",
    ],
    cta: "Explore Growth",
    featured: true,
    badge: "Most Suitable for Growing Teams",
    paymentLink: "https://buy.stripe.com/28E8wQdpgfKG4N05g35Vu09",
  },
  {
    name: "Titan",
    subtitle: "Managed Operations",
    price: "$10,000/month",
    description:
      "For businesses that need a broader operational support infrastructure.",
    features: [
      "Dedicated operational team",
      "Operations coordination",
      "Executive assistance",
      "Workflow management",
      "Customer communication",
      "Process execution",
      "Daily operational support",
      "Management oversight",
    ],
    cta: "Discuss Your Operations",
    featured: false,
    variant: "premium",
    paymentLink: calendlyLink,
  },
];

export const differenceItems: DifferenceItem[] = [
  {
    title: "Reliability",
    description:
      "Consistent execution with clear responsibilities and accountability.",
  },
  {
    title: "Structure",
    description:
      "Defined workflows and processes instead of ad-hoc task delegation.",
  },
  {
    title: "Responsiveness",
    description:
      "Keep customers, teams, and business processes moving without unnecessary delays.",
  },
  {
    title: "Scalability",
    description:
      "Expand operational capacity as your business grows without rebuilding your entire internal team.",
  },
];

/** @deprecated Prefer differenceItems for the new positioning. */
export const reasons = differenceItems.map(
  (item) => `${item.title}: ${item.description}`,
);
