import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./slice/taskSlice";

const store = configureStore({ reducer: { jobSlice } });

export default store;
