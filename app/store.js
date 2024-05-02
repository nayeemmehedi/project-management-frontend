"use client"

import { create } from 'zustand'

const useStore = create((set) => ({
    projectStatus: {}, // Initial status
    setProjectStatus: (status) => set({ projectStatus: status }), // Method to update the status

    toggleValue: false, // Initial status
    settoggleValue: (status) => set({ toggleValue: status }),
  }));
  
  export default useStore;