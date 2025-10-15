import {createSlice} from "@reduxjs/toolkit";

const moviesSlice = createSlice(
    {
        name: "movies",
        initialState: {
            moviesList : null,
        },
        reducers:
        {
            addMovies : (state, action) => {
                state.moviesList = action.payload;
            }
        }
    });
    
    export default moviesSlice.reducer;

    export const {addMovies} = moviesSlice.actions;

