export type RoleType = 'vp' | 'director' | 'head';

export interface RoleData {
  title: string;
  cvLink: string;
  profileDescription: string;
  about: Array<string>;
}

export const ROLES: Record<RoleType, RoleData> = {
  vp: {
    title: 'VP of Engineering',
    cvLink:
      'https://drive.google.com/file/d/1SEkPmdM_brM5kHnVS7-P4-nS2PlHZlON/view', // Placeholder
    profileDescription:
      'Executive technology leader with 14+ years building and scaling high-performing engineering organizations, defining product and platform strategy, and owning architectural direction for mission-critical systems.',
    about: [
      'Senior engineering leader with 14+ years experience building, scaling, and operating regulated, high-availability software platforms. Proven track record partnering directly with CEOs and MDs to convert technical strategy into commercial outcomes, including national contracts, award-winning platforms, and sustained revenue growth. Trusted operator in regulated environments (ISO 27001, PCI DSS) with deep expertise across cloud, AI/ML, and platform modernisation. Known for building stable, high-retention teams and establishing engineering organisations that scale predictably.',
    ],
  },
  director: {
    title: 'Director of Engineering',
    cvLink:
      'https://drive.google.com/file/d/1SEkPmdM_brM5kHnVS7-P4-nS2PlHZlON/view', // Placeholder
    profileDescription:
      'Strategic engineering director focused on operational excellence, team growth, and delivering complex technical roadmaps in fast-paced environments.',
    about: [
      'Experienced Director of Engineering with a proven track record of leading multi-disciplinary teams to deliver high-impact software solutions. Expertise in scaling engineering processes, mentoring leads, and aligning technical strategy with business goals.',
      'Strong background in systems architecture and cloud-native development, with a focus on building resilient and scalable platforms. Adept at managing stakeholder expectations and driving continuous improvement across the engineering organization.',
    ],
  },
  head: {
    title: 'Head of Engineering',
    cvLink:
      'https://drive.google.com/file/d/1SEkPmdM_brM5kHnVS7-P4-nS2PlHZlON/view', // Placeholder
    profileDescription:
      'Hands-on Head of Engineering experienced in building startups from PoC to scale-up, establishing engineering culture, and delivering robust AI/ML-driven products.',
    about: [
      'Dedicated Head of Engineering with over 14 years of experience in the software industry. Specialize in taking early-stage products and building the necessary engineering foundations to support rapid growth and commercial success.',
      'Expertise in building and leading lean, high-performing teams, establishing agile workflows, and making pragmatic technology choices. Passionate about creating a culture of innovation and excellence within the engineering team.',
    ],
  },
};
