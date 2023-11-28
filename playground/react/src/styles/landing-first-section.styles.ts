export const variants = {
  landingFirstSectionGreen: `h-1100 w-screen max-w-screen-2xl mx-auto bg-gradient-to-r from-black via-teal-900 to-teal-300`,
  landingFirstSectionGray: `h-1100 w-screen max-w-screen-2xl mx-auto flex items-center justify-center bg-identitySecondarygray-0`,
  landingFirstSectionStatistics: `w-100`,
  //   HEADER STYLES --
  landingHeader: `h-120 p-10`,
  logo: 'ml-12 ',

  //   CONTENT STYLES --
  firstSectionTextContainer: `ml-10 pt-12 mt-12 flex flex-row mr-12 pr-12`,
  firstSectionText: ` ml-12 text-white font-inter text-6xl font-semibold leading-16 h-190 w-800 pt-12 `,
  firstSectionSubText: `w-680 text-white font-inter text-xl font-normal leading-7 pt-2 mt-2`,
  firstSectionTextVariant: `text-teal-300`,

  //   IMAGES--

  landingProfileContainer: `flex items-center justify-center w-30 h-12 gap-6 flex-shrink-0 rounded-lg bg-white`,

  landingProfilePhoto: ``,
  landingProfileDataContainer: `flex flex-col`,
  landingProfileName: `font-bold`,
  landingProfileCharge: ``,
  // BUTTON --

  landingButtonYellow: `text-black text-lg mt-5 flex items-center justify-center w-44 p-2 gap-2 bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 text-white rounded-full`,

  // FEATURES --
  allFeaturesContainer: `ml-3 flex flex-row gap-120 `,
  featuresText: ` ml-12 text-white font-inter text-4xl font-semibold  w-1000  `,
  featuresTextVariant: ` ml-12 text-teal-300 font-inter text-4xl font-semibold  w-1000  `,

  featuresTextContainer: `flex flex-col items-center justify-center mb-16`,
  featuresName: `text-white font-inter text-lg font-bold leading-6 mb-3 mt-3 tracking-tighter`,
  featureContainer: `w-296 h-270`,
  firstSectionFeatureText: `text-white font-inter text-base font-normal leading-5`,
  featuresIcon: `bg-teal-300 m-2 text-white`,
};

export const content2 = {
  // CONTAINERS --

  mainContainer: 'flex bg-F9FAF8 justify-around items-center pt-39 mt-5',

  textContainer: 'flex flex-col w-550 h-230 gap-15',

  imagesContainer: 'flex flex-row',

  loaderContainer:
    'bg-landingPagecontentFeaturesColors-white flex flex-col relative left-80 p-20 w-250 h-230 justify-center items-center rounded-lg shadow-md',
  cardsPopUpsContainer: 'h-200 relative bottom-2 right-10',
  profilesContainer:
    'bg-landingPagecontentFeaturesColors-white flex flex-col relative right-14 justify-center gap-22 top-40 h-260  pt-10 pr-5 pb-10  pl-14 w-350 rounded-xl shadow-lg',

  picContainer: 'gap-22 flex flex-row',
  picContainerCol: 'gap-2 flex flex-col',

  campaignContainer:
    'bg-landingPagecontentFeaturesColors-white relative right-7  bottom-7 flex flex-col gap-3 p-20 w-320 rounded-lg shadow-md',

  // TEXT --
  title: 'text-4xl font-bold mb-3 leading-40 text-black',
  campaignTitle: 'text-xl font-bold text-gray-900',
  subTitle: 'text-gray-500 font-semibold',

  //  SVG--
  whiteShape: 'relative right-32 top-32',

  loaderSvg: 'flex relative top-7 right-11',
};

export const landingStatisticsStyles = {
  // CONTAINERS --

  parentContainer: 'flex flex-row',

  nameListContainer: 'flex',
  sideMenuItemsContainer: 'flex flex-col gap-5',
  sideMenuContainer: 'flex',

  chartsContainer: 'flex flex-col',
  informationContainer:
    'flex flex-col bg-landingPagecontentFeaturesColors-whiteVariant1 p-2',
  tableContainer: 'flex flex-col h-300 m-5 rounded-lg relative top-6',
  chartsContainerIMG: 'm-2 h-280',
  tableLabelsList:
    'flex flex-row bg-white justify-between p-2 border-t border-gray-300 text-sm font-bold rounded-tl-lg rounded-tr-lg',
  navBarIconsContainer: 'flex gap-3',
  // --
  sideMenuParentContainer: 'pt-10 pl-16 text-15',
  navIMG: 'h-27',
  logOut: 'mt-24',

  sideMenuLogoContainer: 'relative right-16 mb-20',

  navBar:
    'w-700 h-140 flex relative items-center justify-between p-20 bg-white shadow-none',
  nameList:
    'justify-start items-start text-left flex flex-col bg-white justify-start p-0 rounded-bl-lg rounded-br-lg text-xs gap-3',

  itemListContainer:
    'border-b border-gray-300 gap-14 flex flex-row mb-1 pb-2 bg-white',
};
