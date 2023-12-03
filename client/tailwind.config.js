/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // light color
        main_color_light: '#FFFFFF',
        secondary_color_light: '#FAFAFA',
        border_color_light: '#D4D4D4',
        text_color_light: '#141414',
        btn_color_light: '#EEEEEE',
        btn_hover_color_light: '#EAEAEA',

        // dark colors
        main_color_dark: '#1D2126',
        secondary_color_dark: '#141619',
        border_color_dark: '#313439',
        text_color_dark: '#E6E6E6',
        btn_color_dark: '#1D2126',
        btn_hover_color_dark: '#30363E',

        // general colors
        primary_color: '#34D578',
        primary_color_hover: '#41F48D',
        danger_color: '#DA5252',
        danger_color_hover: '#FA6565',
        input_bg_color: '#EFEFEF',
      },
    },
  },
  plugins: [],
};
