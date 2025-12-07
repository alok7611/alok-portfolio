export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/content", "@nuxt/ui", "@nuxtjs/color-mode"],
  components: {
    dirs: [{ path: "~/components", global: true }],
  },
  css: ["~/assets/css/main.css", "~/assets/css/style.css"],
  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
