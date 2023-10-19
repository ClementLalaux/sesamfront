import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isAdmin : false,
    id : 0
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
    setId : (state,action) => {
      state.id = action.payload;
    }
  },
});

export const { login, logOut, getRole, getNoRole, setId } = authSlice.actions;

export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectIsAdmin = (state) => state.auth.isAdmin;
export const selectId = (state) => state.auth.id;

export default authSlice.reducer;