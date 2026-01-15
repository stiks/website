// Registry of available project components
// Add new project components here to make them available in career.ts

import { CrossFreightProject } from './crossfreight';
import { HubbleProject } from './hubble';
import { PolerProject } from './poler';

export const PROJECT_COMPONENTS = {
  hubble: HubbleProject,
  poler: PolerProject,
  crossfreight: CrossFreightProject,
} as const;

export type ProjectComponentKey = keyof typeof PROJECT_COMPONENTS;
