import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: () => {
        const token = localStorage.getItem('token');
        if (!token) {
            return {
                isLogged: false,
                token: null,
                user: null,
                expirationTime: 0 //登录状态是失效时间
            }
        }

        return {
            isLogged: true,
            token,
            user: JSON.parse(localStorage.getItem('user')),
            expirationTime: +localStorage.getItem('expirationTime')
        }
    }
    ,
    reducers: {
        login(state, action) {
            state.isLogged = true;
            state.token = action.payload.token;
            state.user = action.payload.user;

            const currentTime = Date.now();
            const timeout = 1000 * 60 * 60 * 24 * 7; // 一周 1000* 60 * 60 * 24 * 7
            state.expirationTime = currentTime + timeout; // 设置失效日期

            // 将数据同时存储到本地存储
            localStorage.setItem('token', state.token);
            localStorage.setItem('user', JSON.stringify(state.user))
            localStorage.setItem('expirationTime', state.expirationTime + "")
        },
        logout(state, action) {
            state.isLogged = false;
            state.token = null;
            state.user = null;

            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    }
})

export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;