import exp2 from '../images/seeta.png'
import educ1 from '../images/muk.png'
import muk from '../images/muk2.jpeg'
import kasasaPhoto from '../images/kasasa.jpeg'
import airqo from '../images/airqo.png'
import rental from '../images/rental.png'
import car from '../images/car.jpeg'
import travel from '../images/travel.jpeg'
import app from '../images/app.png'
import pham from '../images/pham.jpeg'
import quickDuukaImg from '../images/quickduuka.png'
import footballImg from '../images/football.png'
import ecommerceImg from '../images/ecommerce.png'
import schoolbookImg from '../images/schoolbook.png'
import seetaleagueImg from '../images/seetaleague.png'
import airqoBeaconImg from '../images/airqo-beacon.png'
import aibosImg from '../images/aibos.png'
// aliases so existing experience/project entries continue to work
const aibos = kasasaPhoto;
const port = kasasaPhoto;

export const Bio = {
  name: "Kasasa Livingstone Trevor",
  roles: [
    "Full Stack Software Engineer",
    "System Builder for Hire",
    "Web & Mobile App Developer",
    "AI & Data Engineer",
  ],
  tagline:
    "I build reliable web systems, mobile apps and AI platforms for businesses, teams and governments.",
  description:
    "Full-stack software engineer with 4+ years of experience building enterprise web platforms, multi-tenant SaaS products, mobile apps and AI-driven systems. Currently a Full Stack Engineer at HoneyComb Technologies working on a large-scale enterprise Vue.js + Laravel platform. Previously built AI agents, multimodal fact-verification pipelines and GCP-native services at AIBOS-UG. I ship production systems used by real merchants, schools, governments and IoT networks — not demos.",
  github: "https://github.com/kasasa22",
  resume:
    "https://docs.google.com/document/d/1dgizH7IhFR4ikEgj7OTETcu-RmAC9rcO/edit?usp=sharing&ouid=104262005523127815803&rtpof=true&sd=true",
  linkedin: "https://linkedin.com/in/KasasaTrevor",
  twitter: "https://twitter.com/KasasaLivingstone",
  insta: "https://www.instagram.com/kasasatrevor/",
  facebook: "https://www.facebook.com/trevor/",
  email: "kasasatrevor25@gmail.com",
  phone: "+256704967769",
  location: "Kampala, Uganda",
};

export const stats = [
  { value: "4+", label: "Years shipping production software" },
  { value: "15+", label: "Live systems built end-to-end" },
  { value: "700+", label: "IoT sensors monitored in real time" },
  { value: "10k+", label: "Daily API requests served" },
];

export const services = [
  {
    id: 0,
    title: "Custom Web Systems",
    description:
      "Enterprise dashboards, admin panels, multi-tenant SaaS and internal tools built with Vue.js, React, Next.js on Laravel or FastAPI — role-based access, audit trails, reporting.",
    tech: ["Vue.js", "React", "Next.js", "Laravel", "FastAPI"],
  },
  {
    id: 1,
    title: "Mobile Apps (iOS + Android)",
    description:
      "Cross-platform React Native + Expo apps with offline-first sync, secure auth, push notifications and a shared design system across dozens of screens.",
    tech: ["React Native", "Expo", "TypeScript", "PWA"],
  },
  {
    id: 2,
    title: "APIs & Backend Systems",
    description:
      "REST APIs with clean architecture, RBAC, queued jobs, event pipelines and rate limiting. Modeled schemas, indexed queries, and battle-tested deployments.",
    tech: ["Laravel", "FastAPI", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "AI & Data Pipelines",
    description:
      "LLM agents (Ollama, Dify, Gemini), Neo4j graph analysis, ETL with Apache Airflow, and multimodal fact-verification systems deployed on GCP with Terraform.",
    tech: ["Python", "Ollama", "Neo4j", "Airflow", "GCP"],
  },
];

// Icon sources: cdn.simpleicons.org is a very reliable universal source that returns
// full-color SVGs by slug. Devicon jsdelivr CDN is the fallback for icons that
// simpleicons renders poorly on dark backgrounds.
const si = (slug, color) => `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;
const dev = (name, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-${variant}.svg`;

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "Python", image: dev("python") },
      { name: "TypeScript", image: dev("typescript") },
      { name: "JavaScript", image: dev("javascript") },
      { name: "PHP", image: dev("php") },
      { name: "SQL", image: dev("mysql") },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "Vue.js", image: dev("vuejs") },
      { name: "React", image: dev("react") },
      { name: "Next.js", image: si("nextdotjs", "ffffff") },
      { name: "React Native", image: dev("react") },
      { name: "Tailwind CSS", image: si("tailwindcss") },
      { name: "D3.js / Three.js", image: si("d3dotjs", "F9A03C") },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Laravel", image: si("laravel", "FF2D20") },
      { name: "FastAPI", image: si("fastapi", "009688") },
      { name: "Node.js", image: dev("nodejs") },
      { name: "Express.js", image: si("express", "ffffff") },
      { name: "Flask", image: si("flask", "ffffff") },
    ],
  },
  {
    title: "Databases & Data",
    skills: [
      { name: "PostgreSQL", image: dev("postgresql") },
      { name: "Neo4j", image: si("neo4j", "4581C3") },
      { name: "Supabase", image: si("supabase", "3ECF8E") },
      { name: "Firestore", image: si("firebase", "FFCA28") },
      { name: "Apache Airflow", image: si("apacheairflow", "017CEE") },
    ],
  },
  {
    title: "AI / LLM",
    skills: [
      { name: "Ollama", image: si("ollama", "ffffff") },
      { name: "Google Gemini", image: si("googlegemini", "8E75B2") },
      { name: "PyTorch", image: si("pytorch", "EE4C2C") },
      { name: "Dify", image: si("openai", "10A37F") },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "GCP (Cloud Run, Pub/Sub)", image: si("googlecloud", "4285F4") },
      { name: "Docker", image: dev("docker") },
      { name: "Terraform", image: si("terraform", "7B42BC") },
      { name: "Nginx", image: si("nginx", "009639") },
      { name: "Git / GitHub", image: dev("git") },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: aibos,
    role: "Full Stack Software Engineer",
    company: "HoneyComb Technologies Ltd",
    date: "Aug 2025 - Present",
    desc: "Full-stack engineer on a large-scale government enterprise web platform built with Vue.js on the frontend and Laravel (PHP) on the backend, inside a modular, role-driven, multi-module architecture. Designed RESTful APIs in Laravel using MVC and service-repository patterns, Eloquent ORM, form-request validation, API resource transformers, and policy-based authorization. Implemented role-based access control, middleware-driven request handling, queued jobs, and event/listener pipelines; modeled schemas with migrations, seeders, eager loading and indexing. Built responsive Vue.js dashboards and dynamic forms consuming REST APIs with Axios, client-side validation, token-based auth, composables, and reusable single-file components. Authored professional end-user manuals and developer-facing code-reference documentation across multiple platform modules.",
    skills: [
      "Vue.js",
      "Laravel",
      "PHP",
      "REST APIs",
      "RBAC",
      "Eloquent ORM",
      "Enterprise Architecture",
    ],
    doc: "",
  },
  {
    id: 1,
    img: aibos,
    role: "Software Engineer",
    company: "AIBOS-UG",
    date: "Dec 2024 - March 2026",
    desc: "Deployed AI agents with Dify + Ollama and built multimodal (text, image, audio, video) fact-verification systems using Google Gemini API and PyTorch. Developed FastAPI microservices with Clean Architecture and DDD; engineered ingestion pipelines processing 1,000+ social media URLs weekly with rate limiting and dead-letter queues. Built Neo4j network-analysis pipelines mapping misinformation propagation (influencer and bot detection, cluster analysis), contributing to a 40% reduction in misinformation reach. Created a React Native (Expo, TypeScript) app and interactive dashboards with Next.js, React 18, D3.js and Three.js for network-graph visualization. Deployed services on GCP (Cloud Run, Pub/Sub, Firestore, Cloud Tasks) with infrastructure managed in Terraform across staging and production.",
    skills: [
      "Python",
      "FastAPI",
      "React Native",
      "Next.js",
      "Neo4j",
      "Google Cloud",
      "Terraform",
      "Gemini API",
    ],
    doc: "https://aibos.co.jp/ja",
  },
  {
    id: 2,
    img: airqo,
    role: "Software Engineer (Volunteer)",
    company: "AirQo",
    date: "Jan 2025 - July 2025",
    desc: "Built an IoT device-monitoring system from scratch with Python, Apache Airflow and PostgreSQL, achieving 99.5% real-time visibility across 700+ sensors. Engineered fault-tolerant ETL pipelines and optimized PostgreSQL with indexing and partitioning, reducing query latency by 60%. Built proactive alerting with automated root-cause diagnosis, cutting troubleshooting from 3 hours to 15 minutes and raising first-visit fix rate from 40% to 85%.",
    skills: [
      "Python",
      "Apache Airflow",
      "PostgreSQL",
      "ETL Pipelines",
      "IoT Monitoring",
    ],
    doc: "https://airqo.net/home",
  },
  {
    id: 3,
    img: muk,
    role: "Software Engineering Intern",
    company: "Directorate for ICT Support (DICTS), Makerere University",
    date: "May 2024 - Sept 2024",
    desc: "Helped re-develop the Makerere University Single Sign-On (MAK-SSO), refactoring backend APIs to handle 10,000+ daily authentication requests with improved reliability. Redesigned webmail creation, student validation and recovery APIs with stricter validation and error handling; achieved 80% faster page loads and simplified authentication from 6 clicks to 2.",
    skills: [
      "PHP",
      "Laravel",
      "API Development",
      "MySQL",
      "Performance Optimization",
    ],
    doc: "https://dicts.mak.ac.ug",
  },
];

export const education = [
  {
    id: 0,
    img: educ1,
    school: "Makerere University",
    date: "Jan 2021 - May 2025",
    grade: "Graduated May 2025",
    desc: "Bachelor of Science in Software Engineering at Makerere University — gained deep expertise in software development, computer science fundamentals, distributed systems and problem-solving through coursework and industry projects.",
    degree: "Bachelor of Science in Software Engineering",
  },
  {
    id: 1,
    img: exp2,
    school: "Seeta High School",
    date: "Feb 2015 - Nov 2020",
    grade: "16 points (UACE)",
    desc: "Completed both UCE and UACE, excelling in Mathematics, Physics and Computer Studies — the foundation for a career in software.",
    degree: "UCE and UACE Certificate",
  },
];

// Architecture diagrams (Mermaid syntax) rendered inside project detail pages.
export const architectureDiagrams = {
  quickDuuka: `graph TD
    U["👤 Merchant (Mobile / PWA)"] -->|HTTPS + JWT| N[Nginx Reverse Proxy]
    N --> V["Vue.js PWA (Offline-first)"]
    N --> R["React Native + Expo App"]
    N --> API["FastAPI REST API (25+ endpoints)"]
    API -->|Row-level tenant isolation| PG[(PostgreSQL 16)]
    API --> Q[Queued Jobs]
    subgraph Infrastructure
      N
      Cert[Certbot / Lets Encrypt]
      Cert --> N
    end`,
  aibos: `graph LR
    S["Social Sources (1000+ URLs/week)"] --> Ing[FastAPI Ingestion]
    Ing --> DLQ[Dead-letter Queue]
    Ing --> PS[Pub/Sub]
    PS --> W1[Workers on Cloud Run]
    W1 --> G["Google Gemini API (multimodal)"]
    W1 --> Neo[(Neo4j Graph DB)]
    Neo --> Dash["Next.js Dashboard (D3.js / Three.js)"]
    W1 --> FS[(Firestore)]
    Dash --> User["👤 Analyst"]`,
  airqo: `graph TD
    Sensors["700+ IoT Sensors"] -->|readings| ETL["Airflow ETL DAGs"]
    ETL --> PG[(PostgreSQL indexed + partitioned)]
    PG --> API[Monitoring REST API]
    API --> Dash[Ops Dashboard]
    ETL --> Alert["Alerting + RCA Engine"]
    Alert -->|SMS / Email| Ops["👷 Field Engineer"]`,
};

export const projects = [
  {
    id: 0,
    title: "Quick Duuka",
    subtitle: "Multi-Tenant SaaS Platform for Merchants",
    date: "2024 - Present",
    description:
      "A production multi-tenant SaaS platform for African merchants — mobile app, marketplace, PWA and 25+ endpoint backend, all live and serving real shops.",
    fullDescription: `Quick Duuka is a full-featured multi-tenant SaaS platform designed to help small businesses in Uganda manage their operations efficiently. It provides comprehensive tools for inventory management, sales tracking, expense monitoring and financial reporting.

The system was built from the ground up with scalability and multi-tenancy in mind, allowing multiple shop owners to run their businesses independently while sharing the same infrastructure.`,
    image: quickDuukaImg,
    tags: ["Vue.js", "FastAPI", "React Native", "PostgreSQL", "Docker", "Nginx"],
    category: "saas",
    github: "https://github.com/kasasa22",
    webapp: "https://app.quickduuka.com/login",
    liveLinks: [
      { label: "Merchant App", url: "https://app.quickduuka.com/login" },
      { label: "Marketplace", url: "https://shop.quickduuka.com/marketplace" },
      { label: "Landing", url: "https://www.quickduuka.com/" },
    ],
    diagramKey: "quickDuuka",
    features: [
      { title: "Mobile Application (React Native/Expo)", description: "Full-featured cross-platform merchant management mobile app in React Native + Expo + TypeScript — secure multi-tenant auth, real-time inventory and financial tracking, multi-period reporting, 30+ reusable components across 31 screens." },
      { title: "Web Platform & Backend", description: "Offline-first PWA with service workers and auto-update. FastAPI REST API with 25+ endpoints covering products, sales, expenses, banking and multi-shop management with strict shop-level data isolation." },
      { title: "Deployment & Infrastructure", description: "Containerized multi-service architecture behind Nginx, SSL via Certbot (Let’s Encrypt) with 6-hour auto-renewal, PostgreSQL 16 with health checks, persistent volumes and connection pooling." },
      { title: "Security & DevOps", description: "Network isolation across proxy and backend networks, non-root containers, and webhook-driven deployment automation." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["Vue.js 3", "Pinia", "Tailwind CSS", "PWA"] },
      { category: "Mobile", technologies: ["React Native 0.79", "Expo SDK 53", "TypeScript"] },
      { category: "Backend", technologies: ["FastAPI", "Python", "SQLAlchemy"] },
      { category: "Database", technologies: ["PostgreSQL 16"] },
      { category: "DevOps", technologies: ["Docker", "Nginx", "Certbot"] },
    ],
    challenges: [
      "Secure multi-tenant data isolation without hurting performance",
      "Offline-first PWA sync that survives flaky connectivity",
      "Managing 30+ reusable components across 31 mobile screens",
    ],
    outcomes: [
      "Live in production serving real merchants across Uganda",
      "Offline-first mobile app with reliable data sync",
      "Automated deployment pipeline with zero-downtime releases",
    ],
  },
  {
    id: 1,
    title: "SchoolBooks",
    subtitle: "School Management Platform (Multi-Tenant)",
    date: "2024 - Present",
    description:
      "A multi-tenant school management platform used by real institutions in Uganda — subdomains per school, student records, fees, attendance and reporting.",
    fullDescription: `SchoolBooks is a production school-management SaaS with a per-school tenant model (each school gets its own subdomain, e.g. uecd.schoolbooks.app) covering student and staff records, fee tracking, attendance and academic reporting for administrators, teachers and parents.`,
    image: schoolbookImg,
    tags: ["Vue.js", "Laravel", "PostgreSQL", "Multi-tenant", "SaaS"],
    category: "saas",
    github: "https://github.com/kasasa22",
    webapp: "https://schoolbooks.app/",
    liveLinks: [
      { label: "Main App", url: "https://schoolbooks.app/" },
      { label: "UECD Tenant", url: "https://uecd.schoolbooks.app/" },
    ],
    features: [
      { title: "Per-school Tenancy", description: "Each institution runs on its own subdomain with isolated data, branding and user base." },
      { title: "Role-based Access", description: "Distinct portals and permissions for admins, teachers, students and parents." },
      { title: "Fees, Attendance & Reports", description: "End-to-end tracking of finances, attendance and academic performance with printable reports." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["Vue.js", "Tailwind CSS"] },
      { category: "Backend", technologies: ["Laravel", "PHP", "REST APIs"] },
      { category: "Database", technologies: ["PostgreSQL / MySQL", "Multi-tenant schema"] },
    ],
    challenges: [
      "Isolating tenant data cleanly across subdomains",
      "Designing role-driven UI that works for admins, teachers and parents",
    ],
    outcomes: [
      "Adopted by real schools in Uganda — live on schoolbooks.app",
      "Per-school subdomains active in production",
    ],
  },
  {
    id: 2,
    title: "Seeta Old Students League",
    subtitle: "Community Portal & Events Platform",
    date: "2025",
    description:
      "The official platform for the Seeta Old Students League — alumni directory, news, events and community engagement in one place.",
    fullDescription: `A community and events portal built for the Seeta Old Students League. Focused on alumni engagement — clean, responsive presentation and admin-managed content for news, events and members.`,
    image: seetaleagueImg,
    tags: ["Vue.js", "Laravel", "MySQL", "REST APIs"],
    category: "web app",
    github: "https://github.com/kasasa22",
    webapp: "https://www.seetaleague.org/",
    liveLinks: [{ label: "Live Site", url: "https://www.seetaleague.org/" }],
    features: [
      { title: "Alumni Directory", description: "Searchable directory with profile management for verified alumni." },
      { title: "News & Events", description: "Admin-managed content pipeline for news posts, upcoming events and registrations." },
      { title: "Responsive UX", description: "Mobile-first responsive design optimised for casual community browsing." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["Vue.js", "Tailwind CSS"] },
      { category: "Backend", technologies: ["Laravel", "PHP"] },
    ],
    challenges: ["Balancing admin flexibility with a simple public-facing UX"],
    outcomes: ["Live and serving the Seeta Old Students community"],
  },
  {
    id: 3,
    title: "Abasajja Group of Companies",
    subtitle: "Corporate Website & CMS",
    date: "2025",
    description:
      "Corporate website for Abasajja Group of Companies — multi-service business showcase with a content management backend.",
    fullDescription: `A corporate website built for Abasajja Group of Companies, presenting their subsidiaries, services and contact channels with a lightweight CMS for the team to update content without redeployment.`,
    image: port,
    tags: ["Vue.js", "Laravel", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/kasasa22",
    webapp: "https://www.abasajjagroupofcompanies.com/",
    liveLinks: [{ label: "Live Site", url: "https://www.abasajjagroupofcompanies.com/" }],
    features: [
      { title: "Company Showcase", description: "Presents multiple subsidiaries and services with clear structure and brand tone." },
      { title: "Lightweight CMS", description: "Admin-managed content sections so non-developers can keep the site fresh." },
      { title: "Contact & Lead Capture", description: "Contact forms wired to internal notifications for new inquiries." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["Vue.js", "Tailwind CSS"] },
      { category: "Backend", technologies: ["Laravel", "PHP"] },
    ],
    challenges: ["Presenting multiple business units without cluttering the top-level UX"],
    outcomes: ["Live corporate presence at abasajjagroupofcompanies.com"],
  },
  {
    id: 4,
    title: "AirQo Beacon — IoT Device Monitoring",
    subtitle: "Real-time Monitoring for 700+ Air Quality Sensors",
    date: "Jan 2025 - Jul 2025",
    description:
      "Ground-up IoT device monitoring platform for AirQo achieving 99.5% real-time visibility across 700+ sensors, with automated ETL and root-cause alerting.",
    fullDescription: `Built from scratch for AirQo (a leading African air-quality network), this system provides real-time visibility, automated ETL and proactive alerting for a fleet of 700+ deployed sensors. Cut troubleshooting time from 3 hours to 15 minutes and lifted first-visit fix rate from 40% to 85%.`,
    image: airqoBeaconImg,
    tags: ["Python", "Apache Airflow", "PostgreSQL", "IoT", "ETL"],
    category: "data",
    github: "https://github.com/kasasa22",
    webapp: "https://airqo.net/products/beacon",
    liveLinks: [{ label: "AirQo Beacon Product", url: "https://airqo.net/products/beacon" }],
    diagramKey: "airqo",
    features: [
      { title: "Real-time Visibility", description: "99.5% real-time visibility across 700+ IoT sensors deployed in the field." },
      { title: "Airflow ETL", description: "Fault-tolerant ETL DAGs with retry and dead-letter handling for reliable ingestion at scale." },
      { title: "Optimized PostgreSQL", description: "Indexing and partitioning reduced query latency by 60%, powering the ops dashboard." },
      { title: "Root-cause Alerting", description: "Proactive alerts with automated diagnosis cut troubleshooting from 3h to 15m and raised first-visit fix rate 40% → 85%." },
    ],
    techStack: [
      { category: "Data", technologies: ["Python", "Apache Airflow"] },
      { category: "Database", technologies: ["PostgreSQL"] },
      { category: "API", technologies: ["REST APIs"] },
    ],
    challenges: [
      "Handling noisy real-world sensor data at scale",
      "Building alerting that surfaces root cause, not just symptoms",
    ],
    outcomes: [
      "99.5% real-time visibility across 700+ sensors",
      "60% query latency reduction",
      "First-visit fix rate up from 40% to 85%",
    ],
  },
  {
    id: 5,
    title: "AIBOS Fact-Verification Platform",
    subtitle: "Multimodal AI Fact-Check + Misinformation Graph",
    date: "Dec 2024 - Present",
    description:
      "AI agents and multimodal (text, image, audio, video) fact-verification with a Neo4j misinformation graph on GCP — 40% reduction in misinformation reach.",
    fullDescription: `A production AI platform combining LLM agents (Dify + Ollama), the Google Gemini API and PyTorch for multimodal fact verification. Ingestion pipelines process 1,000+ social media URLs weekly, and Neo4j network analysis maps misinformation propagation, influencer and bot clusters. Deployed on GCP with Terraform-managed infrastructure.`,
    image: aibosImg,
    tags: ["Python", "FastAPI", "Ollama", "Gemini", "Neo4j", "GCP", "Terraform"],
    category: "ai",
    github: "https://github.com/kasasa22",
    webapp: "https://aibos.co.jp/ja",
    liveLinks: [{ label: "AIBOS", url: "https://aibos.co.jp/ja" }],
    diagramKey: "aibos",
    features: [
      { title: "AI Agents", description: "Deployed AI agents using Dify + Ollama with custom LLM models for task automation." },
      { title: "Multimodal Fact-Check", description: "Text, image, audio and video verification pipelines using Google Gemini + PyTorch." },
      { title: "Misinformation Graph", description: "Neo4j-based network analysis for influencer/bot detection and cluster propagation mapping." },
      { title: "Cloud Native", description: "FastAPI microservices on GCP Cloud Run with Pub/Sub, Firestore, Cloud Tasks; infra as code via Terraform." },
    ],
    techStack: [
      { category: "AI", technologies: ["Ollama", "Dify", "Google Gemini", "PyTorch"] },
      { category: "Backend", technologies: ["FastAPI", "Python", "Clean Architecture"] },
      { category: "Data", technologies: ["Neo4j", "Firestore"] },
      { category: "Cloud", technologies: ["GCP Cloud Run", "Pub/Sub", "Cloud Tasks", "Terraform"] },
      { category: "Frontend", technologies: ["Next.js", "D3.js", "Three.js", "React Native"] },
    ],
    challenges: [
      "Processing thousands of multimodal URLs weekly with rate limiting and DLQs",
      "Modeling misinformation propagation as a graph analysis problem",
    ],
    outcomes: [
      "40% reduction in misinformation reach across monitored networks",
      "1,000+ URLs processed weekly through the pipeline",
    ],
  },
  {
    id: 6,
    title: "Football Team Management System",
    subtitle: "Full-Stack Sports Management",
    date: "2024",
    description:
      "Containerized 4-service app for managing football teams, players, payments and match statistics with PDF reporting.",
    fullDescription: `A comprehensive containerized full-stack system for club administration — player registration, flexible payment tracking, match scheduling and PDF reporting.`,
    image: footballImg,
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    category: "web app",
    github: "https://github.com/kasasa22",
    webapp: "",
    liveLinks: [],
    features: [
      { title: "Full-Stack Development", description: "Docker Compose orchestrating 4 services: Next.js frontend, FastAPI backend, PostgreSQL, pgAdmin. UUID keys, 10+ indexes, triggers, cascading FKs." },
      { title: "Payment & Reporting", description: "Four payment types (Annual, Monthly, Pitch, Match-day). PDF export using jspdf-autotable with advanced filtering and player search." },
      { title: "DevOps", description: "Resource limits per container, health checks, hot-reload dev environment, persistent postgres_data volumes." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["Next.js 14", "React 18"] },
      { category: "Backend", technologies: ["FastAPI", "Uvicorn"] },
      { category: "Database", technologies: ["PostgreSQL", "Triggers", "Indexes"] },
      { category: "DevOps", technologies: ["Docker Compose", "pgAdmin"] },
    ],
    challenges: ["Flexible payment structures per player and payment type"],
    outcomes: ["Reduced manual payment tracking time by 80%"],
  },
  {
    id: 7,
    title: "E-Commerce Inventory System",
    subtitle: "Real-time Inventory + RBAC",
    date: "2024",
    description:
      "Inventory management with automatic profit/loss, real-time stock updates, 3-tier RBAC and printable reports — backed by Supabase RLS.",
    fullDescription: `An inventory management system for retail with real-time stock tracking, automated profit/loss and comprehensive reporting. Uses a 3-tier RBAC model (Superadmin / Admin / Seller) backed by Supabase Postgres with Row-Level Security.`,
    image: ecommerceImg,
    tags: ["Vue 3", "Pinia", "Supabase", "Tailwind CSS", "PostgreSQL"],
    category: "web app",
    github: "https://github.com/kasasa22",
    webapp: "https://e-commerce-website-one-ashen.vercel.app/",
    liveLinks: [{ label: "Live Demo", url: "https://e-commerce-website-one-ashen.vercel.app/" }],
    features: [
      { title: "Business Logic & RBAC", description: "Automatic profit/loss, real-time stock updates, low-stock alerts (≤ 10 units), and 3-tier role-based access control." },
      { title: "Reporting & Analytics", description: "Printable daily, monthly, yearly sales reports with aggregated profit/loss." },
      { title: "Supabase + RLS", description: "PostgreSQL with Row-Level Security policies enforcing role-based data access." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["Vue 3", "Composition API", "Pinia", "Tailwind CSS"] },
      { category: "Backend", technologies: ["Supabase", "PostgreSQL", "Row-Level Security"] },
    ],
    challenges: ["Row-Level Security for multi-role data access"],
    outcomes: ["Automated profit/loss calculations eliminating manual errors"],
  },
  {
    id: 8,
    title: "Rental Management System",
    subtitle: "Property Management Solution",
    date: "2024",
    description:
      "Property rental management for S/N Plaza — tenants, payment tracking, defaulter alerts and monthly reporting.",
    fullDescription: `Built for property managers at S/N Plaza to automate tracking of defaulters and streamline rent collection with monthly reporting.`,
    image: rental,
    tags: ["PHP", "JavaScript", "AJAX", "MySQL"],
    category: "web app",
    github: "https://github.com/kasasa22/Rental_Management_system.git",
    webapp: "",
    liveLinks: [],
    features: [
      { title: "Tenant Management", description: "Complete tenant records, lease info, and payment history." },
      { title: "Payment Tracking", description: "Automated tracking with overdue alerts and defaulter identification." },
      { title: "Reporting", description: "Monthly and annual financial reports." },
    ],
    techStack: [
      { category: "Backend", technologies: ["PHP", "MySQL"] },
      { category: "Frontend", technologies: ["JavaScript", "AJAX", "HTML/CSS"] },
    ],
    challenges: ["Efficient multi-property schema"],
    outcomes: ["Automated tracking of payment defaulters"],
  },
  {
    id: 9,
    title: "Car Sales Management System",
    subtitle: "Dealership Management Platform",
    date: "2024",
    description:
      "Laravel-based dealership platform — vehicle inventory, full and installment payments, and customer transactions.",
    fullDescription: `A Laravel system for a local car dealership handling the full sales lifecycle — inventory, full or installment payments and customer transactions.`,
    image: car,
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    category: "web app",
    github: "https://github.com/kasasa22/Car_management.git",
    webapp: "",
    liveLinks: [],
    features: [
      { title: "Vehicle Inventory", description: "Vehicle details, specifications, pricing and availability." },
      { title: "Payment Management", description: "Full and installment plans with tracking." },
      { title: "Customer Transactions", description: "Complete customer history and documentation." },
    ],
    techStack: [
      { category: "Backend", technologies: ["Laravel", "PHP"] },
      { category: "Database", technologies: ["MySQL"] },
    ],
    challenges: ["Flexible installment payment calculations"],
    outcomes: ["Simplified dealership operations"],
  },
  {
    id: 10,
    title: "Pharmacy Management System",
    subtitle: "Healthcare Inventory Solution",
    date: "2023",
    description:
      "Pharmacy operations — inventory, expiry tracking, cashier and sales reporting for a Kampala pharmacy.",
    fullDescription: `Comprehensive pharmacy operations for a private pharmacy in Kampala — inventory control, sales tracking and detailed reporting.`,
    image: pham,
    tags: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    category: "web app",
    github: "https://github.com/kasasa22/pharmacy.git",
    webapp: "",
    liveLinks: [],
    features: [
      { title: "Inventory Management", description: "Stock levels, expiry dates, low-stock alerts." },
      { title: "Cashier System", description: "POS with transaction tracking and receipt generation." },
      { title: "Sales Reporting", description: "Daily, weekly, monthly sales reports with profit analysis." },
    ],
    techStack: [
      { category: "Backend", technologies: ["PHP", "MySQL"] },
      { category: "Frontend", technologies: ["JavaScript", "Bootstrap"] },
    ],
    challenges: ["Expiry date tracking with alerts"],
    outcomes: ["Improved inventory visibility"],
  },
  {
    id: 11,
    title: "Tours and Travel Website",
    subtitle: "Travel Booking Platform",
    date: "2024",
    description:
      "Tour packages, online booking and communication with travel operators — built for a local tour company.",
    fullDescription: `A comprehensive travel booking platform showcasing tour packages with online booking and direct communication with operators.`,
    image: travel,
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    category: "web app",
    github: "https://github.com/kasasa22/PleasureSafarTours.git",
    webapp: "",
    liveLinks: [],
    features: [
      { title: "Tour Packages", description: "Detailed itineraries and pricing." },
      { title: "Booking System", description: "Online booking with date selection and customer info." },
      { title: "Communication", description: "Direct contact with company reps for customizations." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["HTML", "CSS", "JavaScript"] },
      { category: "Backend", technologies: ["PHP"] },
    ],
    challenges: ["Engaging visual presentation of destinations"],
    outcomes: ["Streamlined booking process"],
  },
  {
    id: 12,
    title: "Weather App",
    subtitle: "Real-time Weather Forecasts",
    date: "2024",
    description:
      "ReactJS weather app pulling real-time forecasts, current conditions and multi-day predictions from Rapid API.",
    fullDescription: `A modern weather application built with ReactJS integrating Rapid API for real-time, accurate weather information for any location globally.`,
    image: app,
    tags: ["ReactJS", "Rapid API", "JavaScript"],
    category: "web app",
    github: "https://github.com/kasasa22/Weather-App.git",
    webapp: "",
    liveLinks: [],
    features: [
      { title: "Real-time Weather", description: "Current temperature, humidity and wind speed." },
      { title: "Location Search", description: "Search any city worldwide for local conditions." },
      { title: "Forecasts", description: "Multi-day forecasts with detailed predictions." },
    ],
    techStack: [
      { category: "Frontend", technologies: ["ReactJS", "CSS"] },
      { category: "API", technologies: ["Rapid API"] },
    ],
    challenges: ["API rate limit handling"],
    outcomes: ["Reliable weather info access"],
  },
];
