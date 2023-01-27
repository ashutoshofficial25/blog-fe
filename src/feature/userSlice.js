import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
    token: (state) => {
      state.token = state.token;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//export actions
export const { userLogin, logout } = userSlice.actions;

//export reducers
export default userSlice.reducer;
