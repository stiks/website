import { AboutSection } from '@/lib/pages/home/components/about-section';
import { CareerSection } from '@/lib/pages/home/components/career-section';
import { ConnectSection } from '@/lib/pages/home/components/connect-section';
import { ProfileSection } from '@/lib/pages/home/components/profile-section';
import { ProjectsSection } from '@/lib/pages/home/components/projects-section';
import { TechnologiesSection } from '@/lib/pages/home/components/technologies-section';

const Home = () => {
  const maxResolution = 'max-w-5xl';

  return (
    <>
      <ProfileSection className={maxResolution} />
      <TechnologiesSection className={maxResolution} />
      <AboutSection className={maxResolution} />
      <CareerSection className={maxResolution} />
      <ProjectsSection className={maxResolution} />
      <ConnectSection className={maxResolution} />
    </>
  );
};

export default Home;
