import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLogged: false,
        token: null,
        user: null
    },
    reducers: {
        login(state, action) {
            console.log("action payload", action.payload);

            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;
            console.log("state", state);

        },
        logout(state, action) {
            state.isLogged = false;
            state.token = null;
            state.user = null;
        }
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;