import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
	name: "user",
	initialState: {
		// id: 0,
		// email: "",
		// username: "",
		// fullname: "",
		// url_image: process.env.DEFAULT_PROFILE,
		// address: "",
		// telephone: "",
		// gender: "",
		// is_member: false,
		// expire_date: "",

		id: 0,
		uuid: "",
		nik           : "",
		name          : "",
		email         : "",
		dob           : "",
		sex           : "",
		contact       : "",
		role          : "",
		specialist    : "",
		work_experience: "",
		avatar        : "",
		schedule : "",
		work_hour: "",
	},
	reducers: {
		storeUser: (state, action) => {
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
			state.schedule = action.payload.schedule;
			state.work_hour = action.payload.work_hour;
		},
		clearUser: (state) => {
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
			state.schedule = "";
			state.work_hour = "";
			state.avatar = "";
		},
	},
});

export const { storeUser, clearUser } = UserSlice.actions;
export default UserSlice.reducer;