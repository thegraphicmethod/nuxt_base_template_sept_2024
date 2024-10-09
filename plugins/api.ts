// Use recommended recipe: https://nuxt.com/docs/guide/recipes/custom-usefetch#custom-usefetch
export default defineNuxtPlugin((nuxtApp) => {

  const api = $fetch.create({
    baseURL: useRuntimeConfig().public.apiBase,
    // interceptors TBD https://github.com/unjs/ofetch
    
  });

  return {
    provide: {
      api,
    },
  };
});
