import { configureStore } from "@reduxjs/toolkit";
import reducer from'../reduxcode/slice'
export const store=configureStore({
    reducer
});


