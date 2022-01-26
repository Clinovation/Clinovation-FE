import { createSlice } from "@reduxjs/toolkit";

export const DaySliceDoctor = createSlice({
  name: "dayDoctor",
  initialState: {
    dayDoctor: "",
  },
  reducers: {
    saveDayDoctor: (state, action) => {
      state.dayDoctor = {...action.payload};
    }
  },
});

export const { saveDayDoctor } = DaySliceDoctor.actions;
export default DaySliceDoctor.reducer;
