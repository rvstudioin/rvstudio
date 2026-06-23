// ═══════════════════════════════════════════════════════════
// 11. CONTACT FORM with FIREBASE
// ═══════════════════════════════════════════════════════════
 
// src/features/contact/contactSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../services/firebase';
 
export const submitEnquiry = createAsyncThunk(
  'contact/submitEnquiry',
  async (formData) => {
    const ref = collection(db, 'enquiries');
    const doc = await addDoc(ref, {
      ...formData,
      createdAt: serverTimestamp(),
      status: 'new',
    });
    return doc.id;
  }
);
 
const contactSlice = createSlice({
  name: 'contact',
  initialState: { loading: false, success: false, error: null },
  reducers: {
    resetContact(state) {
      state.loading = false;
      state.success = false;
      state.error   = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(submitEnquiry.pending,   state => { state.loading = true; state.error = null; })
      .addCase(submitEnquiry.fulfilled, state => { state.loading = false; state.success = true; })
      .addCase(submitEnquiry.rejected,  (state, action) => {
        state.loading = false;
        state.error   = action.error.message;
      });
  },
});
 
export const { resetContact } = contactSlice.actions;
export default contactSlice.reducer;