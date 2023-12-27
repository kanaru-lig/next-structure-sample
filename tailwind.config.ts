import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [require("@digital-go-jp/tailwind-theme-plugin")],
};
export default config;
