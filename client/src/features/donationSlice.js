import { createSlice } from "@reduxjs/toolkit";

export const donationSlice = createSlice({
  name: "donation",
  initialState: {
    value: null,
    name: null,
  },
  reducers: {
    adddonation: (state, action) => {
      state.value = action.payload.id;
      state.name = action.payload.name;
    },
    removedonation: (state) => {
      state.value = null;
    },
  },
});

export const { adddonation, removedonation } = donationSlice.actions;

export const selectdonationid = (state) => state.donation.value;
export const selectdonationname = (state) => state.donation.name;

export default donationSlice.reducer;
