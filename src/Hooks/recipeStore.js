import { create } from "zustand";

export const useRecipe = create((set) => ({
  random: [],
  setRandom: async (data) => {set(()=>({random:[...data]}))},
}));