export interface TimelineEntry {
  period: string;
  title: string;
  company: string;
  description: string;
  technologies: Array<string>;
  slug: string;
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
  },
  {
    period: '2010 - 2011',
    title: 'Team Lead',
    company: 'Connection2',
    description: 'TBC',
    technologies: ['PHP', 'Golang', 'Cisco', 'VOIP'],
    slug: 'connection2',
  },
];

export function getCareerEntryBySlug(slug: string) {
  return CAREER_ENTRIES.find((e) => e.slug === slug);
}
