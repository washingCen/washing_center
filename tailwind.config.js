/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'home-white': '#FBF7F7',
      'black': '#000000',
      'white': '#FFFFFF',
      'button-blue': '#0C8CE9',
      'about-white-blue': '#EDF1F4',
      'about-blue': '#C3CBDC',
      'indigo': '#c7d2fe',
      'service-cyan': '#D7E1EC',
      'service-cyan-white': '#CEDEDB',
      'review-blue': '#B4BCD8',
      'review-cyan': '#B5D8D6',
      'text-blue': '#194AC5',
      'grey': '#929292',
      'link-black': '#423D3D',
      'link-lime': '#ECFBF7',
      'link-white': '#CFF0F0',
      'transparent': '#FFFFFF',
      'ultra-violet': '#645394',
      'gmail-color': '#D44638',
      'phone-color': '#50C878',
      'linker': '#242329'
    },
    extend: {
      height: {
        'page-size': '86.5vh',
        'circle-size': '33vh',
        'about-img-size': '75svh',
        'service-page': '145svh',
        'page-full': '100svh',
        'story-page': '110svh',
        'link-size': '72svh',
        'img-sizer': '70svh',
        'div-sizer': '45svh',
        'story-img-size': '60svh',
        'div-sizer-max': '40svh',
        'div-sizer-min': '25svh',
        'text-sizer': '15svh',
        'height-sizer': '74svh'
      },
      width: {
        'circle-width': '33vh',
        'line-width': '18vw',
      },
      padding:{
        'image-dis': '8svh',
        'page-left': '5svw',
        'page-right': '5svw',
        'img-width': '10svw',
        'pad-top': '5svh',
        'pad-sizer': '13svh',
        'about-pad': '20svh',
        'min-pad': '2px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        roboto_slab: ['Roboto Slab', 'serif'],
        abeezee: ['ABeeZee', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        actor: ['Actor', 'sans-serif'],
        popins: ['Poppins', 'sans-serif']
      },
      colors: {
        'primary-orange': '#FF5722',
      }
    },
  },
  plugins: [],
};
