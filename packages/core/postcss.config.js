// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };

module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.ts'),
    require('autoprefixer'),
    require('cssnano'),
  ],
};
