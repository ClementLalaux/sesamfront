import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isAdmin : false
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true; 
    },
    logOut: (state) => {
      state.isAuthenticated = false; 
    },
    getRole: (state) => {
      state.isAdmin = true; 
    },
    getNoRole: (state) => {
      state.isAdmin = false; 
    },
  },
});

export const { login, logOut, getRole, getNoRole } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsAdmin = (state) => state.auth.isAdmin;

export default authSlice.reducer;