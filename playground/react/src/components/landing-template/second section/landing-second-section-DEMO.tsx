import React from 'react';
import clsx from 'clsx';

import { landingSecondSection } from '../../../styles/landing-first-section.styles';

function LandingDemoSection() {
  return (
    <div className={clsx(landingSecondSection.demoContainer)}>
      <div className={clsx(landingSecondSection.demoTitlesContainer)}>
        <h1 className={clsx(landingSecondSection.demoTitle)}>
          Obtén una prueba DEMO de 30 días y consigue prospectos calificados.
        </h1>
        <h4 className={clsx(landingSecondSection.demoSubTitle)}>
          Imagina lo que podrías lograr en tan solo 30 días: identificar leads
          de alta calidad, interactuar con ellos de manera automatizada y
          gestionar proyectos de ventas con eficacia.
        </h4>
      </div>
      <div className={clsx(landingSecondSection.demoButtonContainer)}>
        <button className={clsx(landingSecondSection.demoButton)}>
          Agenda un demo
        </button>
        <button className={clsx(landingSecondSection.demoButtonPrimary)}>
          Ver planes
        </button>
      </div>
    </div>
  );
}

export default LandingDemoSection;
