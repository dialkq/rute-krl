import { configureStore } from '@reduxjs/toolkit';
import stationReducer from './Reducer/stationSlice';

export const store = configureStore({
  reducer: {
    stations: stationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;