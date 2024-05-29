import { create } from 'zustand'

export const useStore = create((set) => ({
    onSesion: false,
    chageSesionState: () => set((state) => ({ onSesion: !state.bears})),
    // removeAllBears: () => set({ bears: 0 }),
    // updateBears: (newBears) => set({ bears: newBears }),
}))

