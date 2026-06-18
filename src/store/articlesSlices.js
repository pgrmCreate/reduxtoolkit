import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: 'articles',
    initialeState: [],
    reducers: {
        addArticle(state) {
            state.push('titre de larticle');
        }
    }
})