import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./createSlice.js";
import moviesReducer from "./createMoviesSlice.js";
const appStore = configureStore(
    {
       reducer: {
          user : userReducer,
          movies : moviesReducer,
       },
    }
);

export default appStore;

