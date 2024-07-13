import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  selectedStation: {
    id: 'BOO',
    name: "Bogor"
  },
};

const stationSlice = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    selectStation: (state, action: PayloadAction<Station | null>) => {
      state.selectedStation = action.payload;
    },
    setStations: (state, action: PayloadAction<Station[]>) => {
      state.stations = action.payload;
    },
  },
});

export const { selectStation, setStations } = stationSlice.actions;
export default stationSlice.reducer;