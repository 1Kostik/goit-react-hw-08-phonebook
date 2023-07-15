import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

const initialState = {
  user: null,
  token: null,
  error: null,
  isLoading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    }).addCase(register.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;        
    }).addCase(register.rejected,(state,action)=>{
        state.isLoading = false;
        state.error = action.payload;
        state.user = null;
        state.token = null;
    })
  },
});
export const authReducer = authSlice.reducer;
