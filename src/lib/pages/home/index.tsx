import { useState } from 'react';

import { SECTION_ANCHORS } from '@/lib/constants/anchors';
import { ROLES, type RoleType } from '@/lib/data/roles';
import { AboutSection } from '@/lib/pages/home/components/about-section';
import { CareerSection } from '@/lib/pages/home/components/career-section';
import { ConnectSection } from '@/lib/pages/home/components/connect-section';
import { ProfileSection } from '@/lib/pages/home/components/profile-section';
import { ProjectsSection } from '@/lib/pages/home/components/projects-section';
import { RoleSection } from '@/lib/pages/home/components/roles-section.tsx';
import { TechnologiesSection } from '@/lib/pages/home/components/technologies-section';

const Home = () => {
  const maxResolution = 'max-w-5xl';
  const [role, setRole] = useState<RoleType>('head');

  const activeRole = ROLES[role];

  return (
    <>
      <RoleSection
        className={maxResolution}
        roleData={activeRole}
        currentRole={role}
        onRoleChange={setRole}
      />
      <ProfileSection className={maxResolution} roleData={activeRole} />
      <TechnologiesSection className={maxResolution} />
      <div id={SECTION_ANCHORS.about} />
      <AboutSection className={maxResolution} roleData={activeRole} />
      <CareerSection className={maxResolution} role={role} />
      <div id={SECTION_ANCHORS.projects} />
      <ProjectsSection className={maxResolution} />
      <div id={SECTION_ANCHORS.contact} />
      <ConnectSection className={maxResolution} />
    </>
  );
};

export default Home;
