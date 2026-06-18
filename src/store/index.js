import { configureStore } from "@reduxjs/toolkit";
import { articleSlice } from "./articlesSlices";

export const store = configureStore({
    reducer: {
        articles: articleSlice.reducer
    }
})