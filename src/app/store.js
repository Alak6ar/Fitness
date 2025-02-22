import { configureStore } from "@reduxjs/toolkit";
import { mainApi } from "../services/mainApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import verifyEmailReducer from "../features/auth/verifyEmailSlice";
import authReducer from  '../features/auth/authSlice'

export const store = configureStore({
    reducer: {
        verifyEmail: verifyEmailReducer,
        [mainApi.reducerPath]: mainApi.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(mainApi.middleware),
    devTools: true
});

setupListeners(store.dispatch)