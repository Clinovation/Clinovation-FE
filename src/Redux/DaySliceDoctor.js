import { createSlice } from "@reduxjs/toolkit";

export const DaySliceDoctor = createSlice({
  name: "day",
  initialState: {
    day: "",
  },
  reducers: {
    saveDay: (state, action) => {
      state.day = {...action.payload};
    }
  },
});

export const { saveDay } = DaySliceDoctor.actions;
export default DaySliceDoctor.reducer;
