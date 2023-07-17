import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsOperations';
import { refreshUser } from './auth/authOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  isRefreshing:false,
};
const handlePending = state => {
  state.isLoading = true;
};
const handleFuldilled=(state,action)=>{
  state.isLoading = false;
      state.error = null;
      state.items = action.payload;
}
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
    .addCase(fetchContacts.pending,handlePending)
    .addCase(fetchContacts.fulfilled,handleFuldilled)
    .addCase(fetchContacts.rejected,handleRejected)
    .addCase(addContact.pending,handlePending)
    .addCase(addContact.fulfilled,(state, action)=> {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected,handleRejected)
    .addCase(deleteContact.pending,handlePending)
    .addCase(deleteContact.fulfilled,(state, action)=> {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    })
    .addCase(deleteContact.rejected,handleRejected)
   .addCase(refreshUser.pending,(state)=> {
    state.isRefreshing = true;
  })
   .addCase(refreshUser.fulfilled,(state, action)=> {
    state.user = action.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  })
   .addCase(refreshUser.rejected,(state)=> {
    state.isRefreshing = false;
  })
    
    
 
    },
   
  
});

export const contactReducer = contactsSlice.reducer;

