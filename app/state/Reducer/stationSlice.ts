import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Station {
  id: string;
  name: string;
}

interface Schedule {
  id: string;
  stationId: string;
  trainId: string;
  line: string;
  route: string;
  color: string;
  destination: string;
  timeEstimated: string;
  destinationTime: string;
}

interface StationState {
  stations: Station[];
  selectedStation: Station | null;
  schedule: Schedule[];
}

const initialState: StationState = {
  stations: [],
  selectedStation: null,
  schedule: [],
};

// FETCHING STATIONS
export const fetchStations = createAsyncThunk('stations/fetchStations', async () => {
  const response = await axios.get('/api/v1/station');
  return response.data.data;
});

// FETCHING SCHEDULE WITH SELECTED ID
export const fetchSchedule = createAsyncThunk('stations/fetchSchedule', async (stationId: string) => {
  const response = await axios.get(`/api/v1/schedule/${stationId}`);
  return response.data.data;
});


const stationSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    selectStation: (state, action: PayloadAction<Station | null>) => {
      state.selectedStation = action.payload;
      if (action.payload) {
        // Trigger fetchSchedule when station is selected
        fetchSchedule(action.payload.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStations.fulfilled, (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload;
    });
    builder.addCase(fetchSchedule.fulfilled, (state, action: PayloadAction<Schedule[]>) => {
      state.schedule = action.payload;
    });
  },
});

export const { selectStation } = stationSlice.actions;
export default stationSlice.reducer;