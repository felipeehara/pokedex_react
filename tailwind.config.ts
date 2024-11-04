import type { Config, PluginAPI } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'blue': '2px 2px 4px rgba(59, 130, 246, 0.7)', // sombra azul
      },
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      addUtilities({
        '.text-shadow-blue': {
          'text-shadow': '2px 2px 4px rgba(59, 130, 246, 0.7)', // sombra azul personalizada
        },
      });
    },
  ],
};

export default config;
