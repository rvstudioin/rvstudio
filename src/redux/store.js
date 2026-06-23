import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/ui/uiSlice";
// import portfolioReducer from "../features/portfolio/portfolioSlice";

// Redux root store configuration. Add more feature reducers here as the app grows.
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // portfolio: portfolioReducer,
    // Add your reducers here
  },
});
