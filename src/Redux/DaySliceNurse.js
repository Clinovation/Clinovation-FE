import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

export const DaySliceNurse = createSlice({
  name: "dayNurse",
  initialState: {
    dayNurse: "",
  },
  reducers: {
    saveDayNurse: (state, action) => {
      state.dayNurse = {...action.payload};
    }
  },
});

export const { saveDayNurse } = DaySliceNurse.actions;
export default DaySliceNurse.reducer;