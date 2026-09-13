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
      "We handle the recurring coordination work that pulls leadership into the weeds, so your team can stay focused on decisions, clients, and growth.",
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
      "We keep customer conversations moving with clear responses, follow-ups, and updates, so your team can stay focused on higher-priority work.",
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
      "We keep recurring processes on track so handoffs, follow-ups, and updates stay organized.",
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
      "We support the day-to-day work around sales and client delivery so revenue activity keeps moving as volume increases.",
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
      "We learn how your team works today, where time gets lost, and which recurring responsibilities would create the most relief if handled well.",
  },
  {
    title: "Build",
    description:
      "We map the responsibilities, workflows, and support coverage that fit your business, then set clear ownership before work begins.",
  },
  {
    title: "Operate",
    description:
      "Your Ghigha team runs the agreed work with clear communication, documented processes, and steady follow-through.",
  },
  {
    title: "Improve",
    description:
      "As your workload changes, we refine workflows and coverage so support stays useful and efficient over time.",
  },
];

export const pricing: PricingTier[] = [
  {
    name: "Starter",
    subtitle: "Operational Support",
    price: "$1,500/month",
    description:
      "Steady coverage for founders and small teams that need reliable help with day-to-day operations.",
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
      "Broader coverage for teams managing more customers, follow-ups, and moving parts each week.",
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
    badge: "Best fit for expanding teams",
    paymentLink: "https://buy.stripe.com/28E8wQdpgfKG4N05g35Vu09",
  },
  {
    name: "Titan",
    subtitle: "Managed Operations",
    price: "$10,000/month",
    description:
      "A dedicated operations team for companies that need wider coverage and closer day-to-day coordination.",
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
      "Clear ownership and consistent follow-through on the work we take on.",
  },
  {
    title: "Structure",
    description:
      "Documented workflows and shared expectations, so support stays organized as volume grows.",
  },
  {
    title: "Responsiveness",
    description:
      "Customer and internal requests keep moving, even when your team is busy.",
  },
  {
    title: "Scalability",
    description:
      "Coverage can expand with your workload as your business adds clients and complexity.",
  },
];

/** @deprecated Prefer differenceItems for the new positioning. */
export const reasons = differenceItems.map(
  (item) => `${item.title}: ${item.description}`,
);
