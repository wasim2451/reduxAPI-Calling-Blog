import { configureStore } from "@reduxjs/toolkit";
import blogReducer from '../redux/slice/blogReducer'
const store=configureStore({
    reducer:blogReducer
});
export default store ;