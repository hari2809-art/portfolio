import { create } from 'zustand'

const useStore = create((set) => ({
    currentSection: 0,
    isAudioEnabled: false,
    isNarrationEnabled: true,
    setSection: (section) => set({ currentSection: section }),
    toggleAudio: () => set((state) => ({ isAudioEnabled: !state.isAudioEnabled })),
    toggleNarration: () => set((state) => ({ isNarrationEnabled: !state.isNarrationEnabled })),
}))

export default useStore
