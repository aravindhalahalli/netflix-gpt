import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import moviesReducer from "./slices/movieSlice";
import gptSearchReducer from "./slices/gptSlice";
import configReducer from "./slices/configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptSearchReducer,
    config: configReducer,
  },
});

export default appStore;
