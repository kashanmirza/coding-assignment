import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        payload: null
    },
    reducers: {
        showModel: (state, action) => {
            state.isOpen = true;
            state.payload = action.payload;
        },
        hide: (state, action) => {
            state.isOpen = false;
            state.payload = null;
        }
    },
})

export default modalSlice
