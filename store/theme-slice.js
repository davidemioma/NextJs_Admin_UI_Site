import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "dark",
    color: "#03C9D7",
  },
  reducers: {
    setMode(state, action) {
      state.mode = action.payload;
    },

    setColor(state, action) {
      state.color = action.payload;
    },
  },
});

export default ThemeSlice;
