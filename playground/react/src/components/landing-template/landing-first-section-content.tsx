import React from 'react';
import clsx from 'clsx';
import LandingfirstImage from '../../assets/lading-images/Recurso31.png';
import LandingProfilePic from '../../assets/lading-images/Ellipse60.png';
import { variants } from '../../styles/landing-first-section.styles';
function LandingFirstSectionContent() {
  return (
    <div className={clsx(variants.firstSectionTextContainer)}>
      <div className={clsx(variants.firstSectionText)}>
        <span>
          Impulsa tu{' '}
          <span className={clsx(variants.firstSectionTextVariant)}>
            negocio
          </span>{' '}
          y consigue{' '}
          <span className={clsx(variants.firstSectionTextVariant)}>
            clientes
          </span>{' '}
          calificados
        </span>
        <p className={clsx(variants.firstSectionSubText)}>
          Obtén y contacta prospectos objetivos a través de bots personalizados
          basados en estrategias de marketing
        </p>
        <button className={clsx(variants.landingButtonYellow)}>
          Agenda tu cita
        </button>
      </div>
      <div>
        <img src={LandingfirstImage} alt="" />
        <div className={clsx(variants.landingProfileContainer)}>
          <img src={LandingProfilePic} alt="" />
          <div className={clsx(variants.landingProfileDataContainer)}>
            <span className={clsx(variants.landingProfileName)}>
              Andrea Martinez D.
            </span>
            <p>Coordinadora de Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFirstSectionContent;
