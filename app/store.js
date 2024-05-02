"use client"

import { create } from 'zustand'

const useStore = create((set) => ({
    projectStatus: 'To Do', // Initial status
    setProjectStatus: (status) => set({ projectStatus: status }), // Method to update the status
  }));
  
  export default useStore;