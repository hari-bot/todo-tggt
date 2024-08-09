import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userName: string;
}

const initialState: UserState = {
  userName: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    logout: (state) => {
      state.userName = '';
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
