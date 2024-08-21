import { useLocalStorage } from "@vueuse/core";

type Marker = {
  latitude: number;
  longitude: number;
};

export const userMarker = useLocalStorage<Marker>("USER_MARKER", {
  latitude: 0,
  longitude: 0,
});

export const nearbyMarkers = useLocalStorage<Marker[]>("NEARBY_MARKERS", []);

// import { defineStore } from 'pinia';

// export const useUserStore = defineStore('user', {
//   state: () => ({
//     accessToken: undefined as string | undefined,
//   }),
//   getters: {
//     getAccessToken() {
//       return this.accessToken;
//     },
//   },
//   actions: {
//     async fetchAccessToken() {
//       try {

//       } catch (error) {
//         throw new Error(error);
//       }
//     },
//     setAccessToken(accessToken: string) {
//       this.accessToken = accessToken;
//     },
//   },
// });
