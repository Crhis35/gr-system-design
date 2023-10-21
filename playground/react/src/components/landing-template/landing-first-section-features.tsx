import React from 'react';
import clsx from 'clsx';

import { variants } from '../../styles/landing-first-section.styles';

const firstSectionFeatures = [
  {
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="93"
        height="93"
        viewBox="0 0 93 93"
        fill="none"
      >
        <circle cx="46.5" cy="46.5" r="46.5" fill="#D9D9D9" />
        <svg
          x="23.5"
          y="23.5"
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
        >
          <path
            d="M33.2915 39.1663H43.0832V35.2497C43.0831 34.0287 42.7026 32.8381 41.9946 31.8434C41.2866 30.8487 40.2863 30.0992 39.1327 29.6993C37.9791 29.2993 36.7296 29.2687 35.5578 29.6117C34.386 29.9547 33.3502 30.6542 32.5943 31.613M33.2915 39.1663H13.7082M33.2915 39.1663V35.2497C33.2915 33.965 33.0448 32.7371 32.5943 31.613M32.5943 31.613C31.8671 29.7956 30.612 28.2378 28.991 27.1405C27.37 26.0431 25.4574 25.4566 23.4998 25.4566C21.5423 25.4566 19.6297 26.0431 18.0087 27.1405C16.3877 28.2378 15.1326 29.7956 14.4053 31.613M13.7082 39.1663H3.9165V35.2497C3.91659 34.0287 4.29708 32.8381 5.00507 31.8434C5.71305 30.8487 6.71337 30.0992 7.86695 29.6993C9.02054 29.2993 10.2701 29.2687 11.4419 29.6117C12.6137 29.9547 13.6495 30.6542 14.4053 31.613M13.7082 39.1663V35.2497C13.7082 33.965 13.9549 32.7371 14.4053 31.613M29.3748 13.708C29.3748 15.2662 28.7559 16.7605 27.6541 17.8623C26.5523 18.964 25.058 19.583 23.4998 19.583C21.9417 19.583 20.4474 18.964 19.3456 17.8623C18.2438 16.7605 17.6248 15.2662 17.6248 13.708C17.6248 12.1499 18.2438 10.6555 19.3456 9.55376C20.4474 8.45198 21.9417 7.83301 23.4998 7.83301C25.058 7.83301 26.5523 8.45198 27.6541 9.55376C28.7559 10.6555 29.3748 12.1499 29.3748 13.708ZM41.1248 19.583C41.1248 20.6218 40.7122 21.618 39.9777 22.3525C39.2432 23.087 38.2469 23.4997 37.2082 23.4997C36.1694 23.4997 35.1732 23.087 34.4387 22.3525C33.7042 21.618 33.2915 20.6218 33.2915 19.583C33.2915 18.5442 33.7042 17.548 34.4387 16.8135C35.1732 16.079 36.1694 15.6663 37.2082 15.6663C38.2469 15.6663 39.2432 16.079 39.9777 16.8135C40.7122 17.548 41.1248 18.5442 41.1248 19.583ZM13.7082 19.583C13.7082 20.6218 13.2955 21.618 12.561 22.3525C11.8265 23.087 10.8303 23.4997 9.7915 23.4997C8.75274 23.4997 7.75652 23.087 7.022 22.3525C6.28748 21.618 5.87484 20.6218 5.87484 19.583C5.87484 18.5442 6.28748 17.548 7.022 16.8135C7.75652 16.079 8.75274 15.6663 9.7915 15.6663C10.8303 15.6663 11.8265 16.079 12.561 16.8135C13.2955 17.548 13.7082 18.5442 13.7082 19.583Z"
            stroke="#1F2A37"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.2915 39.1663H43.0832V35.2497C43.0831 34.0287 42.7026 32.8381 41.9946 31.8434C41.2866 30.8487 40.2863 30.0992 39.1327 29.6993C37.9791 29.2993 36.7296 29.2687 35.5578 29.6117C34.386 29.9547 33.3502 30.6542 32.5943 31.613M33.2915 39.1663H13.7082M33.2915 39.1663V35.2497C33.2915 33.965 33.0448 32.7371 32.5943 31.613M32.5943 31.613C31.8671 29.7956 30.612 28.2378 28.991 27.1405C27.37 26.0431 25.4574 25.4566 23.4998 25.4566C21.5423 25.4566 19.6297 26.0431 18.0087 27.1405C16.3877 28.2378 15.1326 29.7956 14.4053 31.613M13.7082 39.1663H3.9165V35.2497C3.91659 34.0287 4.29708 32.8381 5.00507 31.8434C5.71305 30.8487 6.71337 30.0992 7.86695 29.6993C9.02054 29.2993 10.2701 29.2687 11.4419 29.6117C12.6137 29.9547 13.6495 30.6542 14.4053 31.613M13.7082 39.1663V35.2497C13.7082 33.965 13.9549 32.7371 14.4053 31.613M29.3748 13.708C29.3748 15.2662 28.7559 16.7605 27.6541 17.8623C26.5523 18.964 25.058 19.583 23.4998 19.583C21.9417 19.583 20.4474 18.964 19.3456 17.8623C18.2438 16.7605 17.6248 15.2662 17.6248 13.708C17.6248 12.1499 18.2438 10.6555 19.3456 9.55376C20.4474 8.45198 21.9417 7.83301 23.4998 7.83301C25.058 7.83301 26.5523 8.45198 27.6541 9.55376C28.7559 10.6555 29.3748 12.1499 29.3748 13.708ZM41.1248 19.583C41.1248 20.6218 40.7122 21.618 39.9777 22.3525C39.2432 23.087 38.2469 23.4997 37.2082 23.4997C36.1694 23.4997 35.1732 23.087 34.4387 22.3525C33.7042 21.618 33.2915 20.6218 33.2915 19.583C33.2915 18.5442 33.7042 17.548 34.4387 16.8135C35.1732 16.079 36.1694 15.6663 37.2082 15.6663C38.2469 15.6663 39.2432 16.079 39.9777 16.8135C40.7122 17.548 41.1248 18.5442 41.1248 19.583ZM13.7082 19.583C13.7082 20.6218 13.2955 21.618 12.561 22.3525C11.8265 23.087 10.8303 23.4997 9.7915 23.4997C8.75274 23.4997 7.75652 23.087 7.022 22.3525C6.28748 21.618 5.87484 20.6218 5.87484 19.583C5.87484 18.5442 6.28748 17.548 7.022 16.8135C7.75652 16.079 8.75274 15.6663 9.7915 15.6663C10.8303 15.6663 11.8265 16.079 12.561 16.8135C13.2955 17.548 13.7082 18.5442 13.7082 19.583Z"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.2915 39.1663H43.0832V35.2497C43.0831 34.0287 42.7026 32.8381 41.9946 31.8434C41.2866 30.8487 40.2863 30.0992 39.1327 29.6993C37.9791 29.2993 36.7296 29.2687 35.5578 29.6117C34.386 29.9547 33.3502 30.6542 32.5943 31.613M33.2915 39.1663H13.7082M33.2915 39.1663V35.2497C33.2915 33.965 33.0448 32.7371 32.5943 31.613M32.5943 31.613C31.8671 29.7956 30.612 28.2378 28.991 27.1405C27.37 26.0431 25.4574 25.4566 23.4998 25.4566C21.5423 25.4566 19.6297 26.0431 18.0087 27.1405C16.3877 28.2378 15.1326 29.7956 14.4053 31.613M13.7082 39.1663H3.9165V35.2497C3.91659 34.0287 4.29708 32.8381 5.00507 31.8434C5.71305 30.8487 6.71337 30.0992 7.86695 29.6993C9.02054 29.2993 10.2701 29.2687 11.4419 29.6117C12.6137 29.9547 13.6495 30.6542 14.4053 31.613M13.7082 39.1663V35.2497C13.7082 33.965 13.9549 32.7371 14.4053 31.613M29.3748 13.708C29.3748 15.2662 28.7559 16.7605 27.6541 17.8623C26.5523 18.964 25.058 19.583 23.4998 19.583C21.9417 19.583 20.4474 18.964 19.3456 17.8623C18.2438 16.7605 17.6248 15.2662 17.6248 13.708C17.6248 12.1499 18.2438 10.6555 19.3456 9.55376C20.4474 8.45198 21.9417 7.83301 23.4998 7.83301C25.058 7.83301 26.5523 8.45198 27.6541 9.55376C28.7559 10.6555 29.3748 12.1499 29.3748 13.708ZM41.1248 19.583C41.1248 20.6218 40.7122 21.618 39.9777 22.3525C39.2432 23.087 38.2469 23.4997 37.2082 23.4997C36.1694 23.4997 35.1732 23.087 34.4387 22.3525C33.7042 21.618 33.2915 20.6218 33.2915 19.583C33.2915 18.5442 33.7042 17.548 34.4387 16.8135C35.1732 16.079 36.1694 15.6663 37.2082 15.6663C38.2469 15.6663 39.2432 16.079 39.9777 16.8135C40.7122 17.548 41.1248 18.5442 41.1248 19.583ZM13.7082 19.583C13.7082 20.6218 13.2955 21.618 12.561 22.3525C11.8265 23.087 10.8303 23.4997 9.7915 23.4997C8.75274 23.4997 7.75652 23.087 7.022 22.3525C6.28748 21.618 5.87484 20.6218 5.87484 19.583C5.87484 18.5442 6.28748 17.548 7.022 16.8135C7.75652 16.079 8.75274 15.6663 9.7915 15.6663C10.8303 15.6663 11.8265 16.079 12.561 16.8135C13.2955 17.548 13.7082 18.5442 13.7082 19.583Z"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    ),
    name: 'Definición y lista de prospectos calificados',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper arcu quis lectus bibendum tincidunt.',
  },
  {
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="93"
        height="93"
        viewBox="0 0 93 93"
        fill="none"
      >
        <circle cx="46.5" cy="46.5" r="46.5" fill="#D9D9D9" />

        <svg
          x="23.5"
          y="23.5"
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
        >
          <path
            d="M27.7051 20.4111C29.092 20.4111 30.2163 19.2868 30.2163 17.8999C30.2163 16.513 29.092 15.3887 27.7051 15.3887C26.3182 15.3887 25.1938 16.513 25.1938 17.8999C25.1938 19.2868 26.3182 20.4111 27.7051 20.4111Z"
            fill="black"
          />
          <path
            d="M20.6557 20.0359C21.8354 19.3067 22.2006 17.7592 21.4714 16.5795C20.7423 15.3997 19.1948 15.0345 18.015 15.7637C16.8353 16.4929 16.47 18.0404 17.1992 19.2201C17.9284 20.3998 19.4759 20.7651 20.6557 20.0359Z"
            fill="black"
          />
          <path
            d="M9.30434 13.7148H11.8663V22.0851H9.30434C7.91081 22.0851 6.77881 20.9531 6.77881 19.5596V16.2404C6.77881 14.8468 7.91081 13.7148 9.30434 13.7148Z"
            stroke="black"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M37.7357 22.085H35.1737V13.7147H37.7357C39.1292 13.7147 40.2612 14.8467 40.2612 16.2402V19.5594C40.2612 20.953 39.1292 22.085 37.7357 22.085Z"
            stroke="black"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M10.1919 41.709V41.5424C10.1919 37.1185 13.7779 33.5312 18.2031 33.5312H28.8386C33.2626 33.5312 36.8498 37.1172 36.8498 41.5424V41.709"
            stroke="black"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M30.4258 8.64941H16.6141C13.9919 8.64941 11.8662 10.7751 11.8662 13.3973V22.2841C11.8662 24.9063 13.9919 27.032 16.6141 27.032H30.4258C33.048 27.032 35.1737 24.9063 35.1737 22.2841V13.3973C35.1737 10.7751 33.048 8.64941 30.4258 8.64941Z"
            stroke="black"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M23.5205 8.6497V5.42285"
            stroke="black"
            stroke-width="4"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
        </svg>
      </svg>
    ),
    name: 'Personalización y manejo de Bots',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper arcu quis lectus bibendum tincidunt.',
  },
  {
    img: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="93"
        height="93"
        viewBox="0 0 93 93"
        fill="none"
      >
        <circle cx="46.5" cy="46.5" r="46.5" fill="#D9D9D9" />
        <svg
          x="23.5"
          y="23.5"
          xmlns="http://www.w3.org/2000/svg"
          width="47"
          height="47"
          viewBox="0 0 47 47"
          fill="none"
        >
          <path
            d="M17.6248 23.4998L21.5415 27.4165L29.3748 19.5832M15.3434 9.19812C16.7481 9.08601 18.0817 8.53366 19.1543 7.61971C20.3663 6.58623 21.907 6.01855 23.4998 6.01855C25.0927 6.01855 26.6333 6.58623 27.8454 7.61971C28.918 8.53366 30.2516 9.08601 31.6563 9.19812C33.244 9.32444 34.7347 10.0124 35.861 11.1387C36.9872 12.2649 37.6752 13.7557 37.8015 15.3434C37.9137 16.7481 38.466 18.0817 39.38 19.1543C40.4134 20.3663 40.9811 21.907 40.9811 23.4998C40.9811 25.0927 40.4134 26.6333 39.38 27.8454C38.466 28.918 37.9137 30.2516 37.8015 31.6563C37.6752 33.244 36.9872 34.7347 35.861 35.861C34.7347 36.9872 33.244 37.6752 31.6563 37.8015C30.2516 37.9137 28.918 38.466 27.8454 39.38C26.6333 40.4134 25.0927 40.9811 23.4998 40.9811C21.907 40.9811 20.3663 40.4134 19.1543 39.38C18.0817 38.466 16.7481 37.9137 15.3434 37.8015C13.7557 37.6752 12.2649 36.9872 11.1387 35.861C10.0124 34.7347 9.32444 33.244 9.19812 31.6563C9.08601 30.2516 8.53366 28.918 7.61971 27.8454C6.58623 26.6333 6.01855 25.0927 6.01855 23.4998C6.01855 21.907 6.58623 20.3663 7.61971 19.1543C8.53366 18.0817 9.08601 16.7481 9.19812 15.3434C9.32444 13.7557 10.0124 12.2649 11.1387 11.1387C12.2649 10.0124 13.7557 9.32444 15.3434 9.19812Z"
            stroke="#1F2A37"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.6248 23.4998L21.5415 27.4165L29.3748 19.5832M15.3434 9.19812C16.7481 9.08601 18.0817 8.53366 19.1543 7.61971C20.3663 6.58623 21.907 6.01855 23.4998 6.01855C25.0927 6.01855 26.6333 6.58623 27.8454 7.61971C28.918 8.53366 30.2516 9.08601 31.6563 9.19812C33.244 9.32444 34.7347 10.0124 35.861 11.1387C36.9872 12.2649 37.6752 13.7557 37.8015 15.3434C37.9137 16.7481 38.466 18.0817 39.38 19.1543C40.4134 20.3663 40.9811 21.907 40.9811 23.4998C40.9811 25.0927 40.4134 26.6333 39.38 27.8454C38.466 28.918 37.9137 30.2516 37.8015 31.6563C37.6752 33.244 36.9872 34.7347 35.861 35.861C34.7347 36.9872 33.244 37.6752 31.6563 37.8015C30.2516 37.9137 28.918 38.466 27.8454 39.38C26.6333 40.4134 25.0927 40.9811 23.4998 40.9811C21.907 40.9811 20.3663 40.4134 19.1543 39.38C18.0817 38.466 16.7481 37.9137 15.3434 37.8015C13.7557 37.6752 12.2649 36.9872 11.1387 35.861C10.0124 34.7347 9.32444 33.244 9.19812 31.6563C9.08601 30.2516 8.53366 28.918 7.61971 27.8454C6.58623 26.6333 6.01855 25.0927 6.01855 23.4998C6.01855 21.907 6.58623 20.3663 7.61971 19.1543C8.53366 18.0817 9.08601 16.7481 9.19812 15.3434C9.32444 13.7557 10.0124 12.2649 11.1387 11.1387C12.2649 10.0124 13.7557 9.32444 15.3434 9.19812Z"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.6248 23.4998L21.5415 27.4165L29.3748 19.5832M15.3434 9.19812C16.7481 9.08601 18.0817 8.53366 19.1543 7.61971C20.3663 6.58623 21.907 6.01855 23.4998 6.01855C25.0927 6.01855 26.6333 6.58623 27.8454 7.61971C28.918 8.53366 30.2516 9.08601 31.6563 9.19812C33.244 9.32444 34.7347 10.0124 35.861 11.1387C36.9872 12.2649 37.6752 13.7557 37.8015 15.3434C37.9137 16.7481 38.466 18.0817 39.38 19.1543C40.4134 20.3663 40.9811 21.907 40.9811 23.4998C40.9811 25.0927 40.4134 26.6333 39.38 27.8454C38.466 28.918 37.9137 30.2516 37.8015 31.6563C37.6752 33.244 36.9872 34.7347 35.861 35.861C34.7347 36.9872 33.244 37.6752 31.6563 37.8015C30.2516 37.9137 28.918 38.466 27.8454 39.38C26.6333 40.4134 25.0927 40.9811 23.4998 40.9811C21.907 40.9811 20.3663 40.4134 19.1543 39.38C18.0817 38.466 16.7481 37.9137 15.3434 37.8015C13.7557 37.6752 12.2649 36.9872 11.1387 35.861C10.0124 34.7347 9.32444 33.244 9.19812 31.6563C9.08601 30.2516 8.53366 28.918 7.61971 27.8454C6.58623 26.6333 6.01855 25.0927 6.01855 23.4998C6.01855 21.907 6.58623 20.3663 7.61971 19.1543C8.53366 18.0817 9.08601 16.7481 9.19812 15.3434C9.32444 13.7557 10.0124 12.2649 11.1387 11.1387C12.2649 10.0124 13.7557 9.32444 15.3434 9.19812Z"
            stroke="black"
            stroke-opacity="0.2"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    ),
    name: 'Gestión y validación de prospectos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper arcu quis lectus bibendum tincidunt.',
  },
];

function LandingFirstSectionFeatures() {
  return (
    <div
      style={{ display: 'flex', position: 'relative', top: '200px' }}
      className={clsx(variants.firstSectionTextContainer)}
    >
      <div>
        <div className={clsx(variants.featuresTextContainer)}>
          <span className={clsx(variants.featuresText)}>
            Ayudamos a nuestros clientes a obtener{' '}
          </span>
          <p className={clsx(variants.featuresTextVariant)}>
            resultados impactantes.
          </p>{' '}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className={clsx(variants.allFeaturesContainer)}>
            {firstSectionFeatures.map((feature, index) => (
              <div key={index} className={clsx(variants.featureContainer)}>
                <div>{feature.img}</div>
                <div>
                  <p className={clsx(variants.featuresName)}>{feature.name}</p>
                </div>
                <div>
                  <h5 className={clsx(variants.firstSectionFeatureText)}>
                    {feature.description}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFirstSectionFeatures;