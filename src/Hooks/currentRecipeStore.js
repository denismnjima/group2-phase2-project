import { create } from "zustand";

export const useCurrentRecipe = create((set)=>({
    currentRecipe:[],
    setCurrentRecipe:(data)=>{set(()=>({currentRecipe:[...data]}))}

}))