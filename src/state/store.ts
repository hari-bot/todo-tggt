import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userSlice';
import tasksReducer from './tasks/taskSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedTaskReducer = persistReducer(persistConfig, tasksReducer);
const persistedUserReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    tasks: persistedTaskReducer,
    user: persistedUserReducer,
  },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
