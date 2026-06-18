import { createSlice } from "@reduxjs/toolkit";

export const articleSlice = createSlice({
    name: 'articles',
    initialState: ['titre du premier article'],
    reducers: {
        addArticle(state) {
            state.push('titre de larticle');
        }
    }
})