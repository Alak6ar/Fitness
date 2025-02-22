import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null
    },

    reducers : {
        setToken: (state, action) => {
            localStorage.setItem('token', JSON.stringify(action.payload));
        },
    
        logOut: (state) => {
            state.token = null;
            localStorage.removeItem("token");
        }
    }
})

export const {setToken, logOut} = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentToken = (state) => state.auth.token;

