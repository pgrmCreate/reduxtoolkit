import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";

export const getArticleFromApi = createAsyncThunk(
    'articles/getFromApi',
    async (_, thunkApi) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();

        if (!data) {
            thunkApi.rejectWithValue('erreur sur le chargement des articles');
        }

        return data;
    }
)

export const articleSlice = createSlice({
    name: 'articles',
    initialState: { articles: ['titre du premier article'], isPending: true },
    reducers: {
        addArticle(state) {
            state.push('titre de larticle');
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getArticleFromApi.pending, (state) => {
            state.isPending = false;
            })
            .addCase(getArticleFromApi.fulfilled, (state) => {
                console.log('hey');
                
            state.isPending = false;
        })
    }
});

export const { addArticle } = articleSlice.actions;