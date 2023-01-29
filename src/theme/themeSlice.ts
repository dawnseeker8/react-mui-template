import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ThemeState {
  darkMode: boolean;
}

const initialState: ThemeState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
