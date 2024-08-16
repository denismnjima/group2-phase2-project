import { create } from "zustand";

export const useSearch = create((set)=>({
    searchQuery:'',
    searchResults:[],
    setSearchQuery:(query)=>set(()=>({searchQuery:query})),
    setSearchResults:(data)=>set(()=>({searchResults:[...data]}))
}))