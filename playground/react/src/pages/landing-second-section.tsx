import React from 'react';
import LandingDemoSection from '../components/landing-template/second section/landing-second-section-DEMO';
import LandingPaymentsSection from '../components/landing-template/second section/landing-second-section-payments';
import LandingContactForm from '../components/landing-template/second section/landing-second-section-contactUs';
import LandingSteps from '../components/landing-template/second section/landing-second-section-features';
import LandingFAQ from '../components/landing-template/second section/landing-second-section-FAQ';
import LandingFooter from '../components/landing-template/second section/landing-footer';

function LandingSecondSection() {
  return (
    <div>
      <LandingDemoSection />
      <LandingPaymentsSection />
      <LandingContactForm />
      <LandingSteps />
      <LandingFAQ />
      <LandingFooter />
    </div>
  );
}

export default LandingSecondSection;
