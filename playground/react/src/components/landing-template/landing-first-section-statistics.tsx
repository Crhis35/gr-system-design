import React from 'react';
import clsx from 'clsx';
import StatisticsProfilePic from '../../assets/lading-images/Avatar.png';
import statsExample from '../../assets/lading-images/statsExample.png';

import {
  variants,
  landingStatisticsStyles,
} from '../../styles/landing-first-section.styles';
function LandingFirstSectionStatistics() {
  const landingStatistics = {
    Nombre: 'Valentina Sofia Rodriguez Lopez',
    Correo: 'Valentina@gmail.com',
    Télefono: '+57 3029287218',
    Estado: 'Por contactar',
    Acciones: 's',
  };
  const renderContent = () => {
    const content = Object.values(landingStatistics).map((value, index) => (
      <p key={index}>{value}</p>
    ));

    const contentArray = [];
    for (let i = 0; i < 6; i++) {
      contentArray.push(
        <div
          className={clsx(landingStatisticsStyles.itemListContainer)}
          key={i}
        >
          {content}
        </div>,
      );
    }

    return contentArray;
  };
  return (
    <div className={clsx(landingStatisticsStyles.parentContainer)}>
      <div className={clsx(landingStatisticsStyles.sideMenuParentContainer)}>
        <div className={clsx(landingStatisticsStyles.sideMenuItemsContainer)}>
          <div className={clsx(landingStatisticsStyles.sideMenuLogoContainer)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="108"
              height="36"
              viewBox="0 0 108 36"
              fill="none"
              className={clsx(variants.logo)}
            >
              <g clip-path="url(#clip0_2154_8084)">
                <path
                  d="M45.7497 35.4998C44.6869 35.4998 43.779 35.2468 43.024 34.739C42.2691 34.2311 41.8083 33.3918 41.6377 32.2212L42.7064 32.0212C42.8025 32.6604 42.9986 33.1663 43.2947 33.533C43.5907 33.9017 43.9535 34.1644 44.381 34.3213C44.8085 34.4782 45.2654 34.5566 45.7477 34.5566C46.4733 34.5566 47.0556 34.4095 47.4949 34.1134C47.9361 33.8173 48.1557 33.4095 48.1557 32.8918C48.1557 32.3741 47.9479 31.9917 47.5302 31.7858C47.1145 31.58 46.5615 31.4172 45.8732 31.2976L45.0398 31.1525C44.4849 31.0564 43.9829 30.9074 43.5358 30.7093C43.0888 30.5093 42.7358 30.2426 42.477 29.9034C42.2162 29.5661 42.0887 29.1426 42.0887 28.6347C42.0887 27.8739 42.3868 27.2758 42.9848 26.8424C43.5829 26.4071 44.3751 26.1895 45.3654 26.1895C46.3556 26.1895 47.1733 26.415 47.7831 26.8679C48.393 27.3209 48.7754 27.9758 48.9342 28.8327L47.9204 29.0504C47.7988 28.3504 47.5125 27.8543 47.0596 27.566C46.6066 27.2758 46.0419 27.1307 45.3673 27.1307C44.6928 27.1307 44.1712 27.2581 43.7731 27.5111C43.375 27.7641 43.175 28.1386 43.175 28.6347C43.175 29.1308 43.3554 29.47 43.7182 29.6936C44.081 29.9171 44.5751 30.0838 45.2026 30.1916L46.036 30.3367C46.6399 30.4328 47.1831 30.576 47.6655 30.7623C48.1479 30.9485 48.5322 31.2113 48.8165 31.5505C49.1009 31.8878 49.242 32.3349 49.242 32.8918C49.242 33.7252 48.9283 34.3683 48.3008 34.8213C47.6733 35.2743 46.8203 35.4998 45.7458 35.4998H45.7497Z"
                  fill="black"
                />
                <path
                  d="M55.4226 35.4998C54.5166 35.4998 53.7303 35.3096 53.0597 34.9292C52.3891 34.5487 51.8675 34.0154 51.4929 33.3271C51.1184 32.6388 50.9321 31.8486 50.9321 30.9544V30.7368C50.9321 29.8308 51.1184 29.0367 51.4929 28.3543C51.8675 27.6719 52.3832 27.1405 53.0421 26.7601C53.7009 26.3797 54.4519 26.1895 55.2971 26.1895C56.1422 26.1895 56.8462 26.362 57.4796 26.7052C58.1129 27.0483 58.611 27.5444 58.9738 28.1896C59.3365 28.8367 59.5169 29.6053 59.5169 30.4995V31.0799H52.0185C52.0538 32.178 52.3891 33.0271 53.0244 33.6252C53.6578 34.2232 54.4578 34.5213 55.4245 34.5213C56.2462 34.5213 56.8834 34.335 57.3364 33.9605C57.7894 33.5859 58.1365 33.1271 58.3776 32.5839L59.3561 33.0192C59.1757 33.4173 58.9247 33.8075 58.6051 34.1879C58.2855 34.5684 57.8717 34.8821 57.3658 35.1292C56.858 35.3762 56.2128 35.4998 55.4265 35.4998H55.4226ZM52.0361 30.1387H58.411C58.362 29.1857 58.0541 28.4523 57.4874 27.9386C56.9207 27.4248 56.1893 27.1679 55.2971 27.1679C54.4049 27.1679 53.6852 27.4248 53.1048 27.9386C52.5244 28.4523 52.1695 29.1857 52.0361 30.1387Z"
                  fill="black"
                />
                <path
                  d="M61.7427 35.2469V26.4445H62.7937V27.5485H63.0114C63.18 27.1504 63.431 26.8602 63.7624 26.6798C64.0938 26.4994 64.5566 26.4072 65.1487 26.4072H66.1802V27.421H65.0213C64.3565 27.421 63.8251 27.6093 63.4271 27.9818C63.029 28.3564 62.829 28.9427 62.829 29.7388V35.245H61.7427V35.2469Z"
                  fill="black"
                />
                <path
                  d="M70.3646 35.2468L67.0684 26.4443H68.2272L71.1254 34.4134H71.3431L74.2413 26.4443H75.4002L72.1039 35.2468H70.3666H70.3646Z"
                  fill="black"
                />
                <path
                  d="M77.7713 24.9225C77.5066 24.9225 77.2831 24.8323 77.1007 24.6499C76.9183 24.4695 76.8281 24.246 76.8281 23.9793C76.8281 23.7126 76.9183 23.4754 77.1007 23.3008C77.2811 23.1263 77.5046 23.0381 77.7713 23.0381C78.038 23.0381 78.2753 23.1263 78.4498 23.3008C78.6243 23.4754 78.7125 23.7028 78.7125 23.9793C78.7125 24.2558 78.6243 24.4676 78.4498 24.6499C78.2753 24.8303 78.0478 24.9225 77.7713 24.9225Z"
                  fill="#262930"
                />
                <path
                  d="M78.3144 26.4443H77.228V35.2468H78.3144V26.4443Z"
                  fill="black"
                />
                <path
                  d="M85.0714 35.4998C84.2145 35.4998 83.4497 35.3155 82.781 34.9468C82.1104 34.5782 81.5829 34.0507 81.1966 33.3624C80.8103 32.6741 80.6162 31.8662 80.6162 30.9348V30.7544C80.6162 29.8132 80.8084 29.0014 81.1966 28.319C81.5829 27.6366 82.1104 27.1111 82.781 26.7424C83.4517 26.3738 84.2145 26.1895 85.0714 26.1895C85.9283 26.1895 86.6322 26.3502 87.2185 26.6699C87.8029 26.9895 88.2637 27.4072 88.5951 27.919C88.9265 28.4327 89.1343 28.972 89.2206 29.5406L88.1519 29.7583C88.0911 29.2877 87.9401 28.8563 87.699 28.4641C87.4558 28.0719 87.1185 27.7582 86.6832 27.5229C86.2479 27.2876 85.7106 27.1699 85.0714 27.1699C84.4321 27.1699 83.8576 27.317 83.3517 27.6131C82.8438 27.9092 82.4438 28.3249 82.1477 28.8622C81.8516 29.3994 81.7045 30.0367 81.7045 30.774V30.9191C81.7045 31.6564 81.8516 32.2937 82.1477 32.831C82.4438 33.3683 82.8438 33.784 83.3517 34.0801C83.8595 34.3762 84.4321 34.5233 85.0714 34.5233C86.0381 34.5233 86.7734 34.2723 87.2813 33.7722C87.7872 33.2722 88.1029 32.6584 88.2225 31.9349L89.2912 32.1525C89.1834 32.7212 88.9559 33.2604 88.6127 33.7742C88.2676 34.2879 87.8029 34.7037 87.2185 35.0233C86.6322 35.3429 85.9165 35.5037 85.0714 35.5037V35.4998Z"
                  fill="black"
                />
                <path
                  d="M95.5759 35.4998C94.67 35.4998 93.8817 35.3096 93.2111 34.9292C92.5404 34.5487 92.0188 34.0154 91.6443 33.3271C91.2698 32.6388 91.0835 31.8486 91.0835 30.9544V30.7368C91.0835 29.8308 91.2717 29.0367 91.6443 28.3543C92.0188 27.6719 92.5346 27.1405 93.1934 26.7601C93.8523 26.3797 94.6033 26.1895 95.4484 26.1895C96.2936 26.1895 96.9976 26.362 97.6309 26.7052C98.2643 27.0483 98.7624 27.5444 99.1251 28.1896C99.4859 28.8367 99.6683 29.6053 99.6683 30.4995V31.0799H92.1698C92.2051 32.178 92.5404 33.0271 93.1758 33.6252C93.8091 34.2232 94.6092 34.5213 95.5759 34.5213C96.3975 34.5213 97.0328 34.335 97.4858 33.9605C97.9388 33.5859 98.2859 33.1271 98.527 32.5839L99.5055 33.0192C99.3251 33.4173 99.0741 33.8075 98.7545 34.1879C98.4349 34.5684 98.0211 34.8821 97.5133 35.1292C97.0054 35.3762 96.3603 35.4998 95.5759 35.4998ZM92.1894 30.1387H98.5643C98.5153 29.1857 98.2074 28.4523 97.6407 27.9386C97.0721 27.4248 96.3426 27.1679 95.4484 27.1679C94.5543 27.1679 93.8366 27.4248 93.2562 27.9386C92.6777 28.4523 92.3208 29.1857 92.1875 30.1387H92.1894Z"
                  fill="black"
                />
                <path
                  d="M24.2329 21.3662V6.87719H27.8566V8.51258H28.3822C28.5959 7.92823 28.9508 7.50076 29.4489 7.22623C29.945 6.95367 30.5254 6.81641 31.1862 6.81641H32.9393V10.0891H31.1274C30.1921 10.0891 29.4234 10.3382 28.8194 10.8343C28.2155 11.3304 27.9135 12.0951 27.9135 13.1266V21.3643H24.2329V21.3662Z"
                  fill="#59E0E2"
                />
                <path
                  d="M41.4398 21.7755C39.9985 21.7755 38.7043 21.4833 37.5552 20.899C36.4042 20.3146 35.5002 19.4675 34.8374 18.3576C34.1747 17.2478 33.8433 15.9144 33.8433 14.3555V13.8888C33.8433 12.3299 34.1747 10.9965 34.8374 9.88659C35.4983 8.77672 36.4042 7.92962 37.5552 7.34527C38.7043 6.76092 39.9985 6.46875 41.4398 6.46875C42.881 6.46875 44.1752 6.76092 45.3263 7.34527C46.4753 7.92962 47.3813 8.77672 48.0441 9.88659C48.7049 10.9965 49.0363 12.3299 49.0363 13.8888V14.3555C49.0363 15.9144 48.7049 17.2478 48.0441 18.3576C47.3813 19.4675 46.4753 20.3146 45.3263 20.899C44.1772 21.4833 42.881 21.7755 41.4398 21.7755ZM41.4398 18.5028C42.5692 18.5028 43.5046 18.138 44.2438 17.4066C44.9831 16.6772 45.3537 15.63 45.3537 14.2653V13.9731C45.3537 12.6103 44.989 11.5632 44.2576 10.8317C43.5281 10.1003 42.5889 9.7356 41.4378 9.7356C40.2868 9.7356 39.373 10.1003 38.6337 10.8317C37.8925 11.5612 37.5239 12.6083 37.5239 13.9731V14.2653C37.5239 15.6281 37.8945 16.6752 38.6337 17.4066C39.373 18.138 40.3083 18.5028 41.4378 18.5028H41.4398Z"
                  fill="#59E0E2"
                />
                <path
                  d="M52.803 21.366L50.7578 6.875H54.409L55.6934 18.8816H56.2189L58.0896 6.875H63.9899L65.8606 18.8816H66.3861L67.6725 6.875H71.3237L69.2785 21.366H63.1722L61.3035 9.35945H60.778L58.9073 21.366H52.8011H52.803Z"
                  fill="#59E0E2"
                />
                <path
                  d="M85.646 21.3659V0.5H89.3266V8.65732H89.8521C90.007 8.34554 90.2502 8.03376 90.5816 7.72197C90.913 7.41019 91.3561 7.15331 91.9111 6.94742C92.466 6.74349 93.1719 6.64152 94.0288 6.64152C95.1583 6.64152 96.1466 6.90036 96.9937 7.41607C97.8408 7.93179 98.4977 8.64359 98.9664 9.54953C99.4331 10.4555 99.6684 11.5124 99.6684 12.7183V21.3659H95.9878V13.0105C95.9878 11.9202 95.7191 11.1026 95.1838 10.5574C94.6485 10.0123 93.8837 9.73973 92.8895 9.73973C91.7601 9.73973 90.8835 10.1143 90.26 10.8653C89.6364 11.6143 89.3246 12.6615 89.3246 14.0066V21.3678H85.644L85.646 21.3659Z"
                  fill="#59E0E2"
                />
                <path
                  d="M105.249 21.3658C104.451 21.3658 103.784 21.1069 103.249 20.5912C102.713 20.0755 102.445 19.4088 102.445 18.5891C102.445 17.7695 102.713 17.1047 103.249 16.5871C103.784 16.0713 104.451 15.8125 105.249 15.8125C106.047 15.8125 106.68 16.0713 107.206 16.5871C107.731 17.1028 107.994 17.7695 107.994 18.5891C107.994 19.4088 107.731 20.0755 107.206 20.5912C106.68 21.1069 106.027 21.3658 105.249 21.3658Z"
                  fill="#59E0E2"
                />
                <path
                  d="M20.6737 21.3659V12.6477C20.6737 11.9516 20.5423 11.2849 20.3031 10.6712C20.2482 10.528 20.1854 10.3868 20.1168 10.2476C19.6031 9.20049 18.7579 8.34162 17.7226 7.80825C17.5559 7.72197 17.3853 7.6455 17.2088 7.57687C16.597 7.33764 15.9303 7.20626 15.2322 7.20626H6.91019V10.6712H14.8597L10.3927 15.1381L8.58283 16.948C8.48871 17.0578 8.38282 17.1617 8.27497 17.2558C7.73769 17.7206 7.03569 17.9951 6.26702 17.9814C4.62183 17.95 3.34136 16.5283 3.34136 14.8832V5.15712C3.34136 4.49826 3.87473 3.9649 4.53359 3.9649H18.5442V0.5H4.64144C4.18847 0.539218 3.75119 0.639223 3.34136 0.788251C1.8903 1.31965 0.749062 2.49227 0.260799 3.9649C0.0902011 4.47081 0 5.01202 0 5.57479V14.9989C0 17.4206 1.35106 19.5266 3.34136 20.6031C3.69432 20.7953 4.06886 20.9541 4.45907 21.0757C5.06107 21.2639 5.70228 21.3678 6.36702 21.3678C8.01614 21.3678 9.51818 20.7403 10.6496 19.7148C10.6496 19.7109 10.6555 19.7089 10.6575 19.7089L11.0732 19.2912C11.0732 19.2912 11.0791 19.2854 11.081 19.2834L12.8301 17.5343L17.2068 13.1595V17.9029H15.0695V21.3698H20.6717L20.6737 21.3659Z"
                  fill="#59E0E2"
                />
                <path
                  d="M83.0456 10.4382V6.87721H80.9572C80.569 6.93995 80.2121 7.05173 79.8944 7.22821C79.3964 7.50077 79.0414 7.93021 78.8277 8.51455H78.3022V6.87917V2.37695H74.6216V6.87524H72.5234V10.4362H74.6216V18.0935C74.6216 19.0877 74.9177 19.8799 75.5118 20.474C76.106 21.0682 76.8805 21.3643 77.8335 21.3643H82.6946V18.3269H79.1199C78.5748 18.3269 78.3022 18.0347 78.3022 17.4503V10.4382H83.0456Z"
                  fill="#59E0E2"
                />
              </g>
              <defs>
                <clipPath id="clip0_2154_8084">
                  <rect
                    width="107.996"
                    height="35"
                    fill="black"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p>Dashboard</p>
          <p>Campañas</p>
          <p>Audiencias</p>
          <p>Dashboard</p>
          <p>Informes</p>
          <p className={clsx(landingStatisticsStyles.logOut)}>Cerrar Sesión</p>
        </div>
      </div>
      <div className={clsx(landingStatisticsStyles.chartsContainer)}>
        <div className={clsx(landingStatisticsStyles.navBar)}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.02197 3.04676C2.02197 2.89243 2.08328 2.74441 2.19241 2.63528C2.30154 2.52615 2.44956 2.46484 2.60389 2.46484H9.58692C9.74125 2.46484 9.88927 2.52615 9.9984 2.63528C10.1075 2.74441 10.1688 2.89243 10.1688 3.04676C10.1688 3.2011 10.1075 3.34911 9.9984 3.45824C9.88927 3.56737 9.74125 3.62868 9.58692 3.62868H2.60389C2.44956 3.62868 2.30154 3.56737 2.19241 3.45824C2.08328 3.34911 2.02197 3.2011 2.02197 3.04676ZM2.02197 5.95636C2.02197 5.80202 2.08328 5.65401 2.19241 5.54488C2.30154 5.43575 2.44956 5.37444 2.60389 5.37444H6.0954C6.24974 5.37444 6.39775 5.43575 6.50688 5.54488C6.61601 5.65401 6.67732 5.80202 6.67732 5.95636C6.67732 6.11069 6.61601 6.2587 6.50688 6.36784C6.39775 6.47697 6.24974 6.53828 6.0954 6.53828H2.60389C2.44956 6.53828 2.30154 6.47697 2.19241 6.36784C2.08328 6.2587 2.02197 6.11069 2.02197 5.95636ZM2.02197 8.86595C2.02197 8.71162 2.08328 8.5636 2.19241 8.45447C2.30154 8.34534 2.44956 8.28403 2.60389 8.28403H9.58692C9.74125 8.28403 9.88927 8.34534 9.9984 8.45447C10.1075 8.5636 10.1688 8.71162 10.1688 8.86595C10.1688 9.02028 10.1075 9.1683 9.9984 9.27743C9.88927 9.38656 9.74125 9.44787 9.58692 9.44787H2.60389C2.44956 9.44787 2.30154 9.38656 2.19241 9.27743C2.08328 9.1683 2.02197 9.02028 2.02197 8.86595Z"
                fill="#151919"
              />
            </svg>
          </div>
          <div className={clsx(landingStatisticsStyles.navBarIconsContainer)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                d="M10.7763 3.99451C10.4458 2.63204 8.50759 2.63204 8.17706 3.99451C7.96291 4.87514 6.95425 5.29257 6.18147 4.82083C4.98349 4.09149 3.61326 5.46249 4.3426 6.65969C4.45224 6.83951 4.51787 7.04267 4.53415 7.25264C4.55043 7.46261 4.5169 7.67346 4.43629 7.86803C4.35568 8.06259 4.23027 8.23537 4.07026 8.37231C3.91026 8.50925 3.72018 8.60647 3.5155 8.65606C2.15304 8.98659 2.15304 10.9248 3.5155 11.2553C3.72 11.305 3.90988 11.4023 4.0697 11.5392C4.22952 11.6762 4.35478 11.8489 4.4353 12.0433C4.51582 12.2378 4.54931 12.4485 4.53307 12.6583C4.51683 12.8681 4.45131 13.0712 4.34183 13.2509C3.61249 14.4489 4.98349 15.8191 6.18069 15.0898C6.3605 14.9801 6.56367 14.9145 6.77364 14.8982C6.98361 14.8819 7.19446 14.9155 7.38902 14.9961C7.58359 15.0767 7.75637 15.2021 7.89331 15.3621C8.03024 15.5221 8.12747 15.7122 8.17706 15.9169C8.50759 17.2793 10.4458 17.2793 10.7763 15.9169C10.826 15.7124 10.9233 15.5225 11.0602 15.3627C11.1972 15.2028 11.3699 15.0776 11.5643 14.9971C11.7588 14.9165 11.9695 14.883 12.1793 14.8993C12.3891 14.9155 12.5921 14.9811 12.7719 15.0905C13.9699 15.8199 15.3401 14.4489 14.6108 13.2517C14.5011 13.0719 14.4355 12.8687 14.4192 12.6587C14.4029 12.4488 14.4365 12.2379 14.5171 12.0433C14.5977 11.8488 14.7231 11.676 14.8831 11.5391C15.0431 11.4021 15.2332 11.3049 15.4379 11.2553C16.8003 10.9248 16.8003 8.98659 15.4379 8.65606C15.2334 8.60633 15.0435 8.50905 14.8837 8.37213C14.7238 8.2352 14.5986 8.0625 14.5181 7.86805C14.4375 7.67361 14.404 7.4629 14.4203 7.25308C14.4365 7.04325 14.5021 6.84021 14.6115 6.66047C15.3409 5.46249 13.9699 4.09227 12.7727 4.82161C12.5929 4.93124 12.3897 4.99687 12.1797 5.01315C11.9697 5.02943 11.7589 4.9959 11.5643 4.91529C11.3698 4.83468 11.197 4.70927 11.06 4.54927C10.9231 4.38926 10.8259 4.19919 10.7763 3.99451Z"
                fill="#F9FAFB"
                stroke="#7D8283"
                stroke-width="1.16384"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.1225 11.6015C11.559 11.165 11.8043 10.5729 11.8043 9.9556C11.8043 9.33827 11.559 8.74621 11.1225 8.30969C10.686 7.87317 10.0939 7.62793 9.4766 7.62793C8.85926 7.62793 8.26721 7.87317 7.83069 8.30969C7.39416 8.74621 7.14893 9.33827 7.14893 9.9556C7.14893 10.5729 7.39416 11.165 7.83069 11.6015C8.26721 12.038 8.85926 12.2833 9.4766 12.2833C10.0939 12.2833 10.686 12.038 11.1225 11.6015Z"
                stroke="#7D8283"
                stroke-width="1.16384"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* -- */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M4.63284 13.0587H7.7364V16.9382L11.6159 13.0587H15.4953C15.9069 13.0587 16.3016 12.8953 16.5926 12.6042C16.8836 12.3132 17.0471 11.9185 17.0471 11.507V5.29983C17.0471 4.88827 16.8836 4.49357 16.5926 4.20255C16.3016 3.91154 15.9069 3.74805 15.4953 3.74805H4.63284C4.22128 3.74805 3.82658 3.91154 3.53556 4.20255C3.24455 4.49357 3.08105 4.88827 3.08105 5.29983V11.507C3.08105 11.9185 3.24455 12.3132 3.53556 12.6042C3.82658 12.8953 4.22128 13.0587 4.63284 13.0587Z"
                fill="#F9FAFB"
              />
              <path
                d="M6.96051 8.4034H6.96827M10.0641 8.4034H10.0718M13.1676 8.4034H13.1754M7.73641 13.0587H4.63284C4.22128 13.0587 3.82658 12.8953 3.53556 12.6042C3.24455 12.3132 3.08105 11.9185 3.08105 11.507V5.29983C3.08105 4.88827 3.24455 4.49357 3.53556 4.20255C3.82658 3.91154 4.22128 3.74805 4.63284 3.74805H15.4953C15.9069 3.74805 16.3016 3.91154 16.5926 4.20255C16.8836 4.49357 17.0471 4.88827 17.0471 5.29983V11.507C17.0471 11.9185 16.8836 12.3132 16.5926 12.6042C16.3016 12.8953 15.9069 13.0587 15.4953 13.0587H11.6159L7.73641 16.9382V13.0587Z"
                stroke="#7D8283"
                stroke-width="1.16384"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* -- */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 19 20"
              fill="none"
            >
              <path
                d="M11.9791 13.8351H15.8586L14.7685 12.745C14.6221 12.5986 14.506 12.4248 14.4268 12.2335C14.3475 12.0421 14.3068 11.8371 14.3068 11.6301V9.17979C14.3069 8.21686 14.0086 7.27757 13.4527 6.49124C12.8969 5.70491 12.111 5.11021 11.2033 4.78902V4.52444C11.2033 4.11288 11.0398 3.71818 10.7487 3.42716C10.4577 3.13615 10.063 2.97266 9.65147 2.97266C9.23991 2.97266 8.84521 3.13615 8.55419 3.42716C8.26318 3.71818 8.09969 4.11288 8.09969 4.52444V4.78902C6.29186 5.42835 4.99612 7.15316 4.99612 9.17979V11.6308C4.99612 12.0483 4.83008 12.4494 4.53446 12.745L3.44434 13.8351H7.32379M11.9791 13.8351H7.32379M11.9791 13.8351V14.611C11.9791 15.2284 11.7339 15.8204 11.2974 16.2569C10.8609 16.6935 10.2688 16.9387 9.65147 16.9387C9.03413 16.9387 8.44208 16.6935 8.00555 16.2569C7.56903 15.8204 7.32379 15.2284 7.32379 14.611V13.8351"
                stroke="#6B7280"
                stroke-width="1.16384"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {/* -- */}
            <img
              className={clsx(landingStatisticsStyles.navIMG)}
              src={StatisticsProfilePic}
              alt="profilePic"
            />
          </div>
        </div>
        <div className={clsx(landingStatisticsStyles.informationContainer)}>
          <div className={clsx(landingStatisticsStyles.chartsContainerIMG)}>
            <img src={statsExample} alt="" />
          </div>
          <div className={clsx(landingStatisticsStyles.tableContainer)}>
            <div className={clsx(landingStatisticsStyles.tableLabelsList)}>
              <p>Nombre</p>
              <p>Correo</p>
              <p>Telefono</p>
              <p>Estado</p>
              <p>Acciones</p>
            </div>

            <div className={clsx(landingStatisticsStyles.nameList)}>
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingFirstSectionStatistics;
