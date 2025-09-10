import { AboutSection } from '@/lib/pages/home/components/about-section';
import { ProfileSection } from '@/lib/pages/home/components/profile.tsx';
import { TechnologiesSection } from '@/lib/pages/home/components/technologies-section';

const Home = () => {
  return (
    <>
      <ProfileSection className="max-w-4xl" />
      <AboutSection className="max-w-4xl" />
      <TechnologiesSection className="max-w-4xl" />
    </>
  );
};

export default Home;
