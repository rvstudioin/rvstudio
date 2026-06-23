
// ═══════════════════════════════════════════════════════════
// 3. PORTFOLIO SLICE
// ═══════════════════════════════════════════════════════════
 
// src/features/portfolio/portfolioSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPortfolioByCategory } from '../../services/portfolio.service';
 
export const loadPortfolio = createAsyncThunk(
  'portfolio/loadByCategory',
  async ({ category, page = 1, limit = 9 }) => {
    const data = await fetchPortfolioByCategory({ category, page, limit });
    return { data, category, page };
  }
);
 
const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState: {
    items:          [],
    activeCategory: 'all',
    categories:     ['all','wedding','portrait','commercial','events','nature','fashion'],
    loading:        false,
    error:          null,
    currentPage:    1,
    hasMore:        true,
  },
  reducers: {
    setCategory(state, action) {
      state.activeCategory = action.payload;
      state.items          = [];
      state.currentPage    = 1;
      state.hasMore        = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(loadPortfolio.pending,  state => { state.loading = true; })
      .addCase(loadPortfolio.fulfilled, (state, action) => {
        state.loading = false;
        const { data, page } = action.payload;
        state.items       = page === 1 ? data.items : [...state.items, ...data.items];
        state.hasMore     = data.hasMore;
        state.currentPage = page;
      })
      .addCase(loadPortfolio.rejected, (state, action) => {
        state.loading = false;
        state.error   = action.error.message;
      });
  },
});
 
export const { setCategory } = portfolioSlice.actions;
export default portfolioSlice.reducer;