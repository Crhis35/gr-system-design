import React from 'react';
import clsx from 'clsx';

import { content2 } from '../../styles/landing-first-section.styles';

import EstherProfilePic from '../../assets/lading-images/EllipseEsther.png';
import ManuelProfilePic from '../../assets/lading-images/EllipseJulioCaicedo.png';
import IvanProfilePic from '../../assets/lading-images/EllipseManuelRestrepo.png';

function LandingFirstSectionContent2() {
  return (
    <div
      style={{ borderLeft: '1px solid', borderRight: '1px solid' }}
      className={clsx(content2.mainContainer)}
    >
      <div className={clsx(content2.textContainer)}>
        <h2 className={clsx(content2.title)}>
          Convertimos tus leads en clientes listos para comprar.
        </h2>
        <span>
          Etiam porta, nulla non accumsan venenatis, sapien augue molestie sem,
          id mollis lectus ipsum efficitur lorem. Vivamus sapien mi, rutrum
          vitae purus non, luctus efficitur nunc.
        </span>
      </div>
      <div>
        <div className={clsx(content2.imagesContainer)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="249"
            height="571"
            viewBox="0 0 249 571"
            fill="none"
          >
            <path
              d="M226.452 85.6734L56.7377 4.50481C30.7893 -7.90234 0.776367 11.0172 0.776367 39.7838V471.508C0.776367 484.151 6.8845 496.008 17.1807 503.34L100.965 563.074C123.927 579.444 156.152 566.857 161.923 539.259L247.853 128.958C251.547 111.319 242.71 93.4433 226.452 85.6734Z"
              fill="#FACA15"
              fill-opacity="0.6"
            />
          </svg>
          <svg
            className={clsx(content2.whiteShape)}
            xmlns="http://www.w3.org/2000/svg"
            width="260"
            height="431"
            viewBox="0 0 260 431"
            fill="none"
          >
            <path
              d="M258.977 119.289L175.31 413.529C172.417 423.702 163.109 430.719 152.52 430.719H117.7C106.773 430.719 97.2583 423.25 94.6802 412.648L1.44384 29.4063C-3.1447 10.538 15.7312 -5.51114 33.6557 2.02699L245.381 91.0289C256.415 95.6636 262.246 107.791 258.977 119.289Z"
              fill="#E6E6E6"
              fill-opacity="0.6"
            />
          </svg>
        </div>
        <div
          className={clsx(content2.cardsPopUpsContainer)}
          style={{
            bottom: '580px',
          }}
        >
          <div className={clsx(content2.profilesContainer)} style={{}}>
            <div className={clsx(content2.picContainer)}>
              <img src={EstherProfilePic} alt="profilePic" />
              <div className={clsx(content2.picContainerCol)}>
                <h2>Esther Sierra</h2>
                <p>Gerente</p>
              </div>
            </div>
            <div className={clsx(content2.picContainer)}>
              <img src={ManuelProfilePic} alt="profilePic" />
              <div className={clsx(content2.picContainerCol)}>
                <h2> Manuel Restrepo</h2>
                <p>Emprendedor</p>
              </div>
            </div>
            <div className={clsx(content2.picContainer)}>
              <img src={IvanProfilePic} alt="profilePic" />
              <div className={clsx(content2.picContainerCol)}>
                <h2>Julio Caicedo</h2>
                <p>Empresario</p>
              </div>
            </div>
          </div>

          <div className={clsx(content2.loaderContainer)}>
            <svg
              className={clsx(content2.loaderSvg)}
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="34"
              viewBox="0 0 33 34"
              fill="none"
            >
              <circle cx="16.3533" cy="17.0618" r="16.3176" fill="white" />
              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                dy="0.3em"
                fill="black"
              >
                80%
              </text>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="179"
              height="180"
              viewBox="0 0 179 180"
              fill="none"
            >
              <path
                d="M178.648 90.1917C178.648 109.235 172.561 127.78 161.277 143.119C149.992 158.459 134.1 169.79 115.92 175.459C97.7406 181.129 78.2247 180.839 60.2212 174.633C42.2177 168.427 26.669 156.629 15.8445 140.961C5.02007 125.294 -0.513481 106.576 0.051529 87.5416C0.616539 68.5068 7.25053 50.1508 18.9852 35.1528C30.7199 20.1548 46.941 9.29993 65.281 4.17252C83.6209 -0.954881 103.12 -0.0863945 120.931 6.65122L110.568 34.0462C98.5976 29.518 85.493 28.9343 73.1672 32.3803C60.8414 35.8263 49.9396 43.1216 42.053 53.2014C34.1664 63.2812 29.7078 75.6178 29.3281 88.4106C28.9484 101.203 32.6673 113.783 39.9422 124.313C47.217 134.842 57.6669 142.772 69.7667 146.943C81.8664 151.114 94.9825 151.308 107.201 147.498C119.419 143.688 130.099 136.072 137.683 125.763C145.267 115.454 149.358 102.99 149.358 90.1917H178.648Z"
                fill="#59E0E2"
              />
            </svg>
          </div>
          <div className={clsx(content2.campaignContainer)}>
            <h2 className={clsx(content2.campaignTitle)}>Campaña actual</h2>
            <h5 className={clsx(content2.subTitle)}>
              Rendimiento actual de tu campaña
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
            >
              <circle
                cx="7.18797"
                cy="7.27489"
                r="6.01176"
                fill="#CC7255"
                stroke="#F3DDD0"
                stroke-width="1.71765"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFirstSectionContent2;
