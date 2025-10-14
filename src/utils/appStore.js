import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./createSlice.js";
const appStore = configureStore(
    {
       reducer: {
          user : userReducer
       },
    }
);

export default appStore;

