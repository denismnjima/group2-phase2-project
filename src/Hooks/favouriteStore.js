import { create } from "zustand";

export const useFavourites = create((set)=>({
    favorites:[],
    setFavourites:(data)=>set((state)=>({favorites:[...state.favorites,data]}))
}))