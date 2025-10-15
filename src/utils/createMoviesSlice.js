import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            moviesList : null,
            animatedMovies : null,
        },
        reducers:
        {
            addMovies : (state, action) => {
                state.moviesList = action.payload;
            },
            addAnimatedMovies : (state, action) => {
                state.animatedMovies = action.payload;
            }
        }
    });
    
    export default moviesSlice.reducer;

    export const {addMovies, addAnimatedMovies} = moviesSlice.actions;

