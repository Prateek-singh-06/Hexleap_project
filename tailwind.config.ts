import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize:{
        '2xs':"11px",
      },
      screens: {
        '824': '824px',
        '685': '730px',
        '890': '890px',
        '460':'460px',
      },
      spacing: {
        '237': '237px',
        '450': '450px',
        '511': '511px',
        '218': '218px',
        '385': '385px',
        '1271': '1272px',
        '918': '918px',
        '625': '625px',
        '597': '597px',
        "440":"440px",
        "1240":"1240px",
        '824':'824px',
        '864':'864px',
        "1090":"1090px",
        '375':'375px',
        "26":"26rem",
        "xxs":"10px"

        
      },
      colors:{
        "costom":"#F7F7F8",
        "525965":"#525965",
        "A9ACB2":"#A9ACB2",
        "2C9CF0":"#2C9CF0",
        "292B32":"#292B32",
        "3B3E47":"#3B3E47",
        "DFDFDF":"#DFDFDF",
        "818A97":"#818A97",
        "18282A":"#18282A",
        "221A2C":"#221A2C",
        "mix":"rgb(31,30,43)"
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require('daisyui')],
};
export default config;
