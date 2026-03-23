import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../type';

const initialState: UserState = {
  token: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
