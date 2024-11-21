import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
  },
});

export const { toggleSearchView } = gptSlice.actions;
export default gptSlice.reducer;
