import { AboutSection } from '@/lib/pages/home/components/about-section';
import { ConnectSection } from '@/lib/pages/home/components/connect-section';
import { ProfileSection } from '@/lib/pages/home/components/profile-section';
import { TechnologiesSection } from '@/lib/pages/home/components/technologies-section';

const Home = () => {
  return (
    <>
      <ProfileSection className="max-w-4xl" />
      <AboutSection className="max-w-4xl" />
      <TechnologiesSection className="max-w-4xl" />
      <ConnectSection className="max-w-4xl" />
    </>
  );
};

export default Home;
