import React from 'react';
import { variants } from '../styles/landing-first-section.styles';

import clsx from 'clsx';
import LandingHeader from '../components/landing-template/landing-header';
import LandingFirstSectionContent from '../components/landing-template/landing-first-section-content';
import LandingFirstSectionFeatures from '../components/landing-template/landing-first-section-features';
import LandingFirstSectionStatistics from '../components/landing-template/landing-first-section-statistics';
import LandingFirstSectionContent2 from '../components/landing-template/landing-first-section-content2';

function LandingFirstSection() {
  return (
    <div>
      <div className={clsx(variants.landingFirstSectionGreen)}>
        <LandingHeader />
        <LandingFirstSectionContent />
      </div>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          backgroundColor: 'white',
          width: '1000px',
          height: '700px',
          left: '25%',
          top: '120%',
        }}
        className={clsx(variants.landingFirstSectionStatistics)}
      >
        <LandingFirstSectionStatistics />
      </div>
      <div className={clsx(variants.landingFirstSectionGray)}>
        <LandingFirstSectionFeatures />
      </div>
      <div>
        <LandingFirstSectionContent2 />
      </div>
    </div>
  );
}

export default LandingFirstSection;
