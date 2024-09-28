import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAllCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async () => {
    const response = await axios.get(
      "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers"
    );
    return response.data.items;
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id) => {
    const response = await axios.get(
      `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers/${id}`
    );
    return response.data; 
  }
);


const campersSlice = createSlice({
  name: "campers",
  initialState: {
    campers: [],
    selectedCamper: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCampers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCampers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campers = action.payload;
      })
      .addCase(fetchAllCampers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      .addCase(fetchCamperById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default campersSlice.reducer;
