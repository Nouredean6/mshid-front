import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredTours: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_TOURS(state, action) {
      const { tours, search } = action.payload;
      const tempTours = tours.filter(
        (tour) =>
          tour.name.toLowerCase().includes(search.toLowerCase()) 
      );

      state.filteredTours = tempTours;
    },
  },
});

export const { FILTER_TOURS } = filterSlice.actions;

export const selectFilteredTours = (state) => state.filter.filteredTours;

export default filterSlice.reducer;
