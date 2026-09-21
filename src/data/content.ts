export type ServiceTag = "Training" | "Consultancy" | "Engineering";

export interface Service {
  tag: ServiceTag;
  code: string;
  title: string;
  text: string;
  image: string;
  bullets: string[];
}

export interface Capability {
  icon: string; 
  title: string;
  text: string;
  code: string;
}

export interface CaseStudy {
  sector: string;
  title: string;
  result: string;
  tags: string[];
}

export interface Stat {
  target: number;
  suffix: string;
  label: string;
  sub: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export const aboutHighlights = [
  { title: "Registered Company", sub: "CAC, Nigeria" },
  { title: "Multi-Disciplinary", sub: "Engineering · Science · Technology" },
  { title: "Research-Driven", sub: "Innovation, IP & tech transfer" },
  { title: "Sustainability-First", sub: "Climate, ESG & circular economy" },
];

export const services: Service[] = [
  {
    tag: "Training",
    code: "TR-01",
    title: "Professional Training & Certification",
    text: "Accredited certification programmes, immersive workshops and enterprise capacity building across engineering, science and technology disciplines.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "ISO 9001 / 14001 / 45001 pathways",
      "HSE, NEBOSH, and competency mapping",
      "Custom in-plant curricula & LMS",
    ],
  },
  {
    tag: "Consultancy",
    code: "MG-02",
    title: "Management & Leadership",
    text: "Board-ready advisory across strategy, regulatory compliance, quality systems and operational excellence for public and private sector clients.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Corporate governance frameworks",
      "Regulatory & compliance assurance",
      "ESG, quality & process optimisation",
    ],
  },
  {
    tag: "Engineering",
    code: "RS-03",
    title: "Risk & Safety Engineering",
    text: "Quantitative risk, HAZID/HAZOP, safety case development, and full lifecycle accident prevention engineering.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    bullets: [
      "Bow-tie, LOPA, FMEA & QRA",
      "Process safety management",
      "Emergency response planning",
    ],
  },
];

export const capabilities: Capability[] = [
  { icon: "gear", title: "EIA & Audits", text: "Environmental impact, compliance & closure studies", code: "EX-01" },
  { icon: "lightbulb", title: "Innovation Tech", text: "R&D pilots, tech transfer, IP monetisation", code: "EX-02" },
  { icon: "layers", title: "Strategic Alliances", text: "Partnership design, JV facilitation, consortiums", code: "EX-03" },
  { icon: "display", title: "Digital Solutions", text: "Data ops, digital twins, asset telemetry", code: "EX-04" },
  { icon: "lightning-charge", title: "Equipment Supply", text: "Industrial, lab & safety instrumentation", code: "EX-05" },
  { icon: "people", title: "Workforce Growth", text: "Executive search, graduate pipelines, skilling", code: "EX-06" },
  { icon: "bag", title: "Project Services", text: "Design, procurement, construction, PMC", code: "EX-07" },
  { icon: "book", title: "Research Driven", text: "Evidence studies, publications, policy papers", code: "EX-08" },
];

export const industries = [
  "Upstream, Midstream, Downstream",
  "Power & Utilities",
  "Manufacturing & FMCG",
  "Infrastructure & EPC",
  "Public Sector",
  "Mining & Heavy Industry",
  "Healthcare & Life-Sciences",
  "Financial Assurance",
];

export const cases: CaseStudy[] = [
  {
    sector: "Energy / Offshore",
    title: "Safety case rebuild for 3 producing assets",
    result: "41% reduction in LTI exposure, regulatory sign-off in 11 weeks",
    tags: ["HAZOP × 9", "Bow-tie 142 barriers", "12 SIMOPS interfaces"],
  },
  {
    sector: "Manufacturing",
    title: "ISO 45001 + 14001 integrated rollout",
    result: "Zero non-conformances at stage 2. 1.2M safe man-hours.",
    tags: ["6 plants", "1,840 staff trained", "19 procedures authored"],
  },
  {
    sector: "Public Sector",
    title: "National skills standard for process technicians",
    result: "Adopted across 4 agencies. 2,300 certified Y1.",
    tags: ["NOS mapping", "8 modules", "Digital credentialing"],
  },
];

export const stats: Stat[] = [
  { target: 127, suffix: "+", label: "Clients Served", sub: "Organisations trained & consulted" },
  { target: 10, suffix: "", label: "Service Areas", sub: "Training, risk, audit, projects & more" },
  { target: 7, suffix: "+", label: "Industries", sub: "Energy, manufacturing, public & private" },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Apex enabled us to achieve triple certification and scale plant capability in one calendar year. Precise, pragmatic.",
    name: "Dr. Y. Okoro",
    role: "Operations Director, Energy Firm",
  },
  {
    quote:
      "Outstanding consultancy on HSE and regulatory compliance; disciplined, documentation-first, board-ready.",
    name: "A. Adebayo",
    role: "Plant Manager, Manufacturing",
  },
  {
    quote:
      "Research-driven insights that shaped our sustainability strategy and ESG reporting. Clean, rigorous work.",
    name: "P. Okafor",
    role: "Head of Sustainability",
  },
];

export const contactRows = [
  { icon: "envelope", label: "Email", value: "contact@apextrainingconsults.com" },
  { icon: "telephone", label: "Phone", value: "+234 (0) 800-APEX-NG" },
  { icon: "geo-alt", label: "Location", value: "Lagos · Abuja · Port Harcourt, Nigeria" },
];

export const serviceOptions = [
  "Professional Training & Certification",
  "Management & Leadership Consultancy",
  "Risk & Safety Engineering",
  "EIA & Audits",
  "Innovation & Technology",
  "Equipment Supply",
  "Project Services",
  "Research Partnership",
];

export const footerColumns = [
  { title: "Company", links: ["About Us", "Leadership", "Recognition", "Careers"] },
  { title: "Services", links: ["Professional Training", "Engineering & Projects", "Sustainability", "Consultancy"] },
  { title: "Expertise", links: ["Risk Management", "Technology", "Consultancy", "Research"] },
  { title: "Contact", links: ["Email", "Phone", "Nigeria Map", "Support"] },
  { title: "Legal", links: ["CAC Registered", "Terms", "Privacy", "Disclaimer"] },
];

export const socials = [
  { icon: "twitter-x", label: "X" },
  { icon: "linkedin", label: "LinkedIn" },
  { icon: "facebook", label: "Facebook" },
];