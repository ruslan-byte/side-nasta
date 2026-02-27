export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },
});
