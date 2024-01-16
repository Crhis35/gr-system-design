const base =
  'text-whitehover:bg-[#4285F4]/90 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2';

const variants = {
  button: `${base} `,
  chevron: '',
  download: '',
  date: '',
  save: '',
};

export type Variants = keyof typeof variants;
export { variants };
