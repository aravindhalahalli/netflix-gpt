import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLanguange: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLanguange } = configSlice.actions;
export default configSlice.reducer;
