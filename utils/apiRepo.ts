import type { NitroFetchRequest, $Fetch } from "nitropack";

// repository pattern in nuxt 3:
//www.youtube.com/watch?v=jXH8Tr-exhI
// this function receives an instance of Fetch customized with, login, headers etc
// and returns an object with typed methods that can be used to fetch data
// use it as: const apiRepo = dashboardApiRepo($api);
// const stats = await apiRepo.getStats();
export const dashboardApiRepo = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({
//   async getStats(): Promise<Stat[]> {
//     return fetch<Stat[]>("/stats");
//   },
});