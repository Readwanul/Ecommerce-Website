const flowbite = require("flowbite-react/tailwind");
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      container:{
        center:true,
        padding:"15px",
      },
      colors:{
        accent:"#FF8F9C",
        blackish: "#1b1b1b",
      }
    },
  },
  plugins: [require('daisyui'),
    flowbite.plugin(),
  ],
} satisfies Config;
