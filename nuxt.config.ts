// https://nuxt.com/docs/api/configuration/nuxt-config
import dsv from "@rollup/plugin-dsv";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const appDir = dirname(fileURLToPath(import.meta.url));
const projDir = resolve(appDir, ".");

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  alias: {
    "@types": resolve(projDir, "types"),
  },
  ssr: false,
  imports: {
    dirs: ["types/*.ts"],
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "shadcn-nuxt",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
  ],
  tailwindcss: {
    exposeConfig: {
      level: 4,
      alias: "#twcss", // if you want to change alias
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "https://localhost:1337", // overwritten by NUXT_PUBLIC_API_BASE if LOADED FROM .env
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  vite: {
    plugins: [dsv()],
  },
});