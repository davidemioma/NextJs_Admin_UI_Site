import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./theme-slice";
import UiSlice from "./ui-slice";

const store = configureStore({
  reducer: {
    theme: ThemeSlice.reducer,
    ui: UiSlice.reducer,
  },
});

export const { setMode, setColor } = ThemeSlice.actions;

export const { setSideBar, setSettings, setIsClicked, resetPopups } =
  UiSlice.actions;

export default store;
