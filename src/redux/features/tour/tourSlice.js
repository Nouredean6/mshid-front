import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tourService from "./tourService";
import { toast } from "react-toastify";

const initialState = {
  tour: null,
  tours: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  // totalStoreValue: 0,
  // outOfStock: 0,
  // category: [],
};

// Create New Tour
export const createTour = createAsyncThunk(
  "tours/create",
  async (formData, thunkAPI) => {
    try {
      return await tourService.createTour(formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get all tours
export const getTours = createAsyncThunk(
  "tours/getAll",
  async (_, thunkAPI) => {
    try {
      return await tourService.getTours();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete a Tour
export const deleteTour = createAsyncThunk(
  "tours/delete",
  async (id, thunkAPI) => {
    try {
      return await tourService.deleteTour(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get a tour
export const getTour = createAsyncThunk(
  "tours/getTour",
  async (id, thunkAPI) => {
    try {
      return await tourService.getTour(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
// Update tour
export const updateTour = createAsyncThunk(
  "tours/updateTour",
  async ({ id, formData }, thunkAPI) => {
    try {
      return await tourService.updateTour(id, formData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const tourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(createTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.tours.push(action.payload);
        toast.success("Tour added successfully");
      })
      .addCase(createTour.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.tours = action.payload;
      })
      .addCase(getTours.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(deleteTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Tour deleted successfully");
      })
      .addCase(deleteTour.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(getTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.tour = action.payload;
      })
      .addCase(getTour.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      })
      .addCase(updateTour.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTour.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        toast.success("Tour updated successfully");
      })
      .addCase(updateTour.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        toast.error(action.payload);
      });
  },
});



export const selectIsLoading = (state) => state.tour.isLoading;
export const selectTour = (state) => state.tour.tour;
export const selectTours = (state)=> state.tour.tours;

export default tourSlice.reducer;