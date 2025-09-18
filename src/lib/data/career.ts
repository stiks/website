export interface Project {
  name: string;
  description?: string;
  technologies?: Array<string>;
  dead?: boolean;
  slug: string;
}

export interface CaseStudy {
  title: string;
  url: string;
  image?: string;
  description?: string;
}

export interface Responsibility {
  title: string;
  description?: string;
}

export interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  description?: string;
  technologies: Array<string>;
  slug: string;
  projects?: Array<Project>;
  responsibilities?: Array<Responsibility>;
  cases?: Array<CaseStudy>;
}

export const CAREER_ENTRIES: Array<TimelineEntry> = [
  {
    period: '2021 - Present',
    title: 'Head of Engineering',
    company: 'Crosstech / Hackpartners',
    description:
      'As Head of Engineering, I led the technical and strategic transformation of an AI-driven proof-of-concept into a commercially successful, multi-million-dollar rail inspection system. I built the engineering organization from the ground up, establishing the teams, processes, and technology to enable rapid and sustainable business growth.',
    technologies: ['Golang', 'Python', 'PostgreSQL', 'Even Driven', 'GCP'],
    slug: 'crosstech',
    cases: [
      {
        title: 'Google',
        url: 'goo.gle/4pt6J5y',
        image: '/assets/images/case-studies/google.png',
        description:
          'CrossTech uses AI & scalable infrastructure to revolutionise railway maintenance. Its solution cuts unplanned service interruptions by 30% and speeds AI model development by 50%, making transport networks safer & more efficient.',
      },
    ],
    projects: [
      {
        name: 'Hubble',
        slug: 'hubble',
        description:
          'Led the re-architecture of the main product from a Laravel prototype to a scalable, Go-based system on GCP. Implemented a decoupled architecture and automated deployments, delivering near-real-time analytics for critical rail safety.',
      },
      {
        name: 'Poler',
        slug: 'poler',
        description:
          'Directed the design and development of a real-time train tracking and alerting system processing over 10,000 notifications per minute, enhancing operational response with instant alerts.',
      },
      {
        name: 'CrossFreight',
        slug: 'crossfreight',
        description:
          'Oversaw the creation of a freight analytics platform to monitor over 16 million events annually, providing essential data for operational compliance and performance monitoring.',
      },
    ],
    responsibilities: [
      {
        title: 'Team Growth & Culture',
        description:
          'Scaled the engineering organization from 5 to 25+ professionals by leading the full recruitment lifecycle and establishing a high-performance, product-focused culture. Fostered an environment of excellence, autonomy, and continuous learning that attracted and retained top-tier talent, directly aligning team capabilities with ambitious business objectives.',
      },
      {
        title: 'Complex Systems at Scale',
        description:
          'Spearheaded the architecture of a complex, AI/ML-driven product handling over 10,000 hours of video data monthly. Engineered the system for significant scale and reliability, transforming it from a PoC into a market-leading platform.',
      },
      {
        title: 'Process & Agile Transformation',
        description:
          'Established and implemented a scalable, agile development framework, including robust code review, CI/CD pipelines, and automated testing protocols. This enabled the team to scale efficiently while maintaining high-quality output and performance.',
      },
      {
        title: 'Scalable & Resilient Architecture',
        description:
          "Architected and delivered a highly scalable cloud infrastructure on GCP that supported the company's growth from a small startup to a high-growth SME, ensuring system reliability and performance.",
      },
      {
        title: 'Product-Led Strategy',
        description:
          'Directed product strategy within a product-led business, aligning the technology roadmap with commercial objectives to ensure strong market fit. Played a key role in scaling the company, contributing directly to its transformation into a high-growth, multi-million-pound SME.',
      },
      {
        title: 'Cross-Functional Leadership',
        description:
          'Championed close collaboration between engineering, product, sales, and marketing teams to ensure technical developments directly addressed customer needs and supported key business goals.',
      },
      {
        title: 'Innovation & Continuous Improvement',
        description:
          'Drove the continuous optimization of AI/ML models and infrastructure, improving platform accuracy and efficiency to keep the product ahead of industry competitors.',
      },
    ],
  },
  {
    period: '2011 - 2021',
    title: 'Head of Development and Engineering',
    company: 'Quintessentially',
    description:
      'As the Head of Development, I led three international teams (in-house and remote) of developers, DevOps engineers, and QAs. I was responsible for defining the technology strategy, modernizing the infrastructure, and delivering a state-of-the-art mobile concierge platform for high-profile clients such as Mastercard, HSBC, and ADCB Bank.',
    technologies: [
      'AWS',
      'PHP',
      'Golang',
      'IOS',
      'Android',
      'Microservices',
      'Kubernetes',
    ],
    slug: 'quintessentially',
    responsibilities: [
      {
        title: 'Global Team Leadership',
        description:
          'Managed and mentored a distributed team of 15+ technical professionals, fostering a culture of quality, ownership, and continuous improvement across all squads.',
      },
      {
        title: 'Platform Modernization & Delivery',
        description:
          'Led the end-to-end lifecycle of a highly customizable, white-label mobile platform. Drove the migration from a monolithic PHP application to a modern, microservices-based architecture using Go, Kubernetes, and GCP.',
      },
      {
        title: 'Process Transformation & Automation',
        description:
          'Championed and implemented modern DevOps and CI/CD practices across the organization. Achieved 95% automated test coverage and established a zero-downtime deployment strategy, dramatically improving quality and release velocity.',
      },
      {
        title: 'Strategic Cost Reduction',
        description:
          'Drove operating costs down by 50% over two years by migrating legacy infrastructure to the cloud (AWS/GCP), optimizing vendor contracts, and leveraging automation, all while improving service levels.',
      },
      {
        title: 'Technical & Architectural Strategy',
        description:
          'Established the vision for the company’s system architecture, reusable codebases, and development tools. Guided the organization through three major infrastructure migrations with no downtime.',
      },
      {
        title: 'Stakeholder Management',
        description:
          'Acted as the key technical advisor to business stakeholders, translating company goals into actionable engineering plans. Consistently delivered complex projects on time and within budget.',
      },
    ],
    projects: [
      {
        name: 'QHub',
        slug: 'qhub',
      },
      {
        name: 'Q Apps',
        slug: 'qapps',
      },
    ],
  },
  {
    period: '2010 - 2011',
    title: 'Team Lead',
    company: 'Connection2',
    technologies: ['PHP', 'Golang', 'Cisco', 'VOIP'],
    slug: 'connection2',
  },
];

export function getCareerEntryBySlug(slug: string) {
  return CAREER_ENTRIES.find((e) => e.slug === slug);
}
