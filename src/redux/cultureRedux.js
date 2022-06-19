import { createSlice } from "@reduxjs/toolkit";

export const cultureSlice = createSlice({
    name: "culture",
    initialState: {
        cultures: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getCultureStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        getCultureSuccess: (state, action) => {
            state.isFetching = false;
            state.cultures = action.payload;
        },
        getCultureFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getCultureStart,
    getCultureSuccess,
    getCultureFailure,
    deleteCultureStart,
    deleteCultureSuccess,
    deleteCultureFailure,
} = cultureSlice.actions;

export default cultureSlice.reducer;
