import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Station {
  id: string;
  name: string;
}

interface StationState {
  stations: Station[];
  selectedStation: Station | null;
}

const initialState: StationState = {
  stations: [],
  selectedStation: null,
};

export const fetchStations = createAsyncThunk('stations/fetchStations', async () => {
  const response = await axios.get('/api/v1/station');
  return response.data.data;
});

const stationSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    selectStation(state, action: PayloadAction<Station | null>) {
      state.selectedStation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStations.fulfilled, (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload;
    });
  },
});

export const { selectStation } = stationSlice.actions;
export default stationSlice.reducer;