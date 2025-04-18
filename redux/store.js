import { configureStore } from "@reduxjs/toolkit";
import XeMayReducer from "./XeMayReducer";
const store = configureStore({
  reducer: {
    XeMay : XeMayReducer,
  },  

});
export default store;