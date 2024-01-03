/**  @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['./apps/client/src/**/*.{js,ts,tsx,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
export default tailwindConfig;
