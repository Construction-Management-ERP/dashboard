import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../layouts/redux/sidebarSlice';

export default configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});