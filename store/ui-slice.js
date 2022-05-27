import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const UiSlice = createSlice({
  name: "theme",
  initialState: {
    sidebarOpen: false,
    settingsOpen: false,
    isClicked: initialState,
  },
  reducers: {
    setSideBar(state, action) {
      state.sidebarOpen = action.payload;
    },

    setSettings(state, action) {
      state.settingsOpen = action.payload;
    },

    setIsClicked(state, action) {
      state.isClicked = { ...initialState, [action.payload]: true };
    },

    resetPopups(state) {
      state.isClicked = initialState;
    },
  },
});

export default UiSlice;
