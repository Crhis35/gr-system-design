import React from 'react';
import clsx from 'clsx';

import { landingSecondSection } from '../../../styles/landing-first-section.styles';

const paymentPackages = [
  {
    title: 'Basic',
    price: '$119.990',
    desc: 'Perfecto para aquellos que recién comienzan a explorar el potencial de Growth Service',
    options: {
      option1: '25 mensajes / mes',
      option2: '10 GB Free Storage',
      option3: '30 campañas / mes',
      option4: 'Chat de soporte',
    },
    button: 'Obtenga 14 días de prueba gratuita',
  },
  {
    title: 'Professional',
    price: '$159.990',
    desc: 'Diseñado para impulsar tu crecimiento de manera significativa.',
    options: {
      option1: '75 mensajes / dia',
      option2: '20 GB Free Storage',
      option3: '90 campañas / mes',
      option4: 'Chat de soporte',
    },
    button: 'Obtenga 14 días de prueba gratuita',
  },
  {
    title: 'Expert',
    price: '$199.990',
    desc: 'El plan perfecto para aquellos que buscan sacar el máximo rendimiento de Growth Service.',
    options: {
      option1: '200 mensajes / dia',
      option2: '50 GB Free Storage',
      option3: 'Campañas ilimitadas',
      option4: 'Live Chat Support',
      option5: 'Chat de soporte',
    },
    button: 'Obtenga 14 días de prueba gratuita',
  },
];

function LandingPaymentsSection() {
  return (
    <div className={clsx(landingSecondSection.paymentsContainer)}>
      <div className={clsx(landingSecondSection.paymentsInfoContainer)}>
        <h1 className={clsx(landingSecondSection.paymentsInfoTitle)}>
          Elige el plan que se ajuste a tus necesidades de negocio
        </h1>
        <h5 className={clsx(landingSecondSection.paymentsSubInfoTitle)}>
          En Growth Service, comprendemos que cada negocio es único, y es por
          eso que ofrecemos una variedad de planes diseñados para adaptarse a
          tus necesidades específicas.
        </h5>
      </div>
      <div className={clsx(landingSecondSection.paymentsPlansContainer)}>
        {paymentPackages.map((paymentPackage, index) => (
          <div
            key={index}
            className="w-1/3 p-16  m-3 rounded bg-identitySecondarygray-3"
          >
            <h2 className="text-md mb-7">{paymentPackage.title}</h2>
            <div className="flex flex-row mb-5">
              <p className="text-5xl  text-primary">{paymentPackage.price}</p>{' '}
              <p className="ml-5 relative top-6 text-gray-500"> / month</p>
            </div>
            <p className=" text-gray-500">{paymentPackage.desc}</p>
            <ul
              style={{
                margin: '20px',
              }}
            >
              <div className="h-0.5 bg-gray-800 w-200"></div>
              {Object.values(paymentPackage.options).map((option, i) => (
                <li
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '12px',
                  }}
                  key={i}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    style={{ marginRight: '10px' }}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z"
                      fill="#71717A"
                    />
                  </svg>
                  {option}
                </li>
              ))}
            </ul>
            <button className="border-primary-0 border text-white m-10 relative top-12 rounded p-2">
              {paymentPackage.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default LandingPaymentsSection;
