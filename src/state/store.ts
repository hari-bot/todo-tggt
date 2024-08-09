import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import tasksReducer from './tasks/taskSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: tasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
