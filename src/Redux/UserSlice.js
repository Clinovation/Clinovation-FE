import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "user",
  initialState: {
    id: 0,
    uuid: "",
    nik: "",
    name: "",
    email: "",
    dob: "",
    sex: "",
    contact: "",
    role: "",
    specialist: "",
    work_experience: "",
    avatar: "",
    work_hour: "",
    work_day: "",
  },
  reducers: {
    login: (state, action) => {
      state.id = action.payload.id;
      state.uuid = action.payload.uuid;
      state.nik = action.payload.nik;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.dob = action.payload.dob;
      state.sex = action.payload.sex;
      state.contact = action.payload.contact;
      state.role = action.payload.role;
      state.specialist = action.payload.specialist;
      state.work_experience = action.payload.work_experience;
      state.avatar = action.payload.avatar;
      state.work_hour = action.payload.work_hour;
      state.work_day = action.payload.work_day;
    },
    logout: (state) => {
      state.id = 0;
      state.uuid = "";
      state.nik = "";
      state.name = "";
      state.email = "";
      state.dob = "";
      state.sex = "";
      state.contact = "";
      state.role = "";
      state.specialist = "";
      state.work_experience = "";
      state.avatar = "";
      state.work_hour = "";
      state.work_day = "";
    },
  },
});

export const { login, logout } = UserSlice.actions;
export default UserSlice.reducer;
