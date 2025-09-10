import { useState } from 'react';

import { ChevronDownIcon } from '../../../components/chevron-down-icon.tsx';

interface AboutProps {
  className?: string;
}

export const AboutSection = ({ className }: AboutProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`mx-auto p-4 ${className || ''}`}>
      <div className="mb-4" id="about">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-primary font-heading">
          About Me
        </h2>
      </div>
      <div className="text-sm mb-4">
        <p>
          A strategic and results-driven technology leader with over a decade of
          experience in product-led businesses, building and scaling
          high-performing engineering teams to deliver complex, large-scale
          software solutions. Proven expertise in transforming proofs-of-concept
          into commercially successful products, shaping a culture that attracts
          and retains top talent, and driving significant business growth
          through technical excellence.
        </p>
      </div>
      <div
        className={`space-y-4 text-sm overflow-hidden transition-all duration-700 ease-in mb-2 ${
          isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div>
          <p>
            I hold a Bachelor's degree in Mechanical Engineering from the École
            Polytechnique de Lomé (EPL). Over the past year, I have transitioned
            into the field of computer science, driven by my passion for
            technology and problem-solving. I am currently pursuing a two-year
            Master's degree in Artificial Intelligence and Big Data at the
            Collège de Paris Supérieur, where I am further deepening my
            expertise in cutting-edge technologies.
          </p>
        </div>
        <div>
          <p>
            When I'm not coding, I spend my time listening to music, reading
            books, working out at the gym, and playing games or enjoying
            manga/anime.
          </p>
        </div>
      </div>
      <button
        type="button"
        onClick={toggleExpanded}
        className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-4"
      >
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
        />
        {isExpanded ? 'View less' : 'View more'}
      </button>
    </section>
  );
};
