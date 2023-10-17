import { configureStore } from '@reduxjs/toolkit';
import authSlice from './pages/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;