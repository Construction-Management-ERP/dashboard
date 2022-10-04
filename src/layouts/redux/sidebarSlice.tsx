import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'slice',
    initialState: {
        isOpenSlidebar: false
    },
    reducers: {
        openSidebar: (state) => {
            state.isOpenSlidebar = true;
        },

        closeSidebar: (state) => {
            state.isOpenSlidebar = false;
        }
    }
});

export const { openSidebar, closeSidebar } = sidebarSlice.actions;

export default sidebarSlice.reducer;
