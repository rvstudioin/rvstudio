// ═══════════════════════════════════════════════════════════
// 4. UI SLICE (lightbox, navbar scroll)
// ═══════════════════════════════════════════════════════════
 
// src/features/ui/uiSlice.js
import { createSlice } from '@reduxjs/toolkit';
 
const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    lightbox:     { open: false, imageUrl: null, title: null },
    navScrolled:  false,
    mobileMenuOpen: false,
  },
  reducers: {
    openLightbox(state, action) {
      state.lightbox = { open: true, ...action.payload };
    },
    closeLightbox(state) {
      state.lightbox = { open: false, imageUrl: null, title: null };
    },
    setNavScrolled(state, action) {
      state.navScrolled = action.payload;
    },
    toggleMobileMenu(state) {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
  },
});
 
export const { openLightbox, closeLightbox, setNavScrolled, toggleMobileMenu } = uiSlice.actions;
export default uiSlice.reducer;