import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
    name:"user",
    initialState:{
        error: null,
        username: null,
        nickname: null,
        userId: null,
        accessToken: null
    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload;
        },
        setNickname: (store, action) => {
            store.nickname = action.payload;
        },
        setError: (store, action) => {
            store.error = action.payload;
        },
        setUserId: (store, action) => {
            store.userId = action.payload;
        },
        setAccessToken: (store, action) => {
            store.accessToken = action.payload;
        }
    }
});

export default user;