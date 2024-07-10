import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// BATAS UNDO
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
  filterScheduleData: { destination: string; color: string }[];
}

const initialState: StationState = {
  stations: [],
  selectedStation: null,
  schedule: [],
  filterScheduleData: [],
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
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStations.fulfilled, (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload;
    });
    builder.addCase(fetchSchedule.fulfilled, (state, action: PayloadAction<Schedule[]>) => {
      console.log('Fetch Schedule Response:', action.payload);
      state.schedule = action.payload;

      // Create filterDataStation from response
      const uniqueDestinations = new Set<string>();
      const filterDataStation = action.payload.reduce<{ destination: string; color: string }[]>((acc, schedule) => {
        if (!uniqueDestinations.has(schedule.destination)) {
          uniqueDestinations.add(schedule.destination);
          acc.push({
            destination: schedule.destination,
            color: schedule.color,
          });
        }
        return acc;
      }, []);
      
      state.filterScheduleData = filterDataStation;
      console.log('FILTER DATANYA:', filterDataStation);
    });
  },
});

export const { selectStation } = stationSlice.actions;
export default stationSlice.reducer;