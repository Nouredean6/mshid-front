import { createSlice } from "@reduxjs/toolkit";



const initialState = {
  isLoggedIn: false,
  // name: parsedFirstName ? parsedFirstName : "",
  user: {
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    isAdmin: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_LOGIN(state, action) {
      state.isLoggedIn = action.payload;
    },
    // SET_NAME(state, action) {
    //   localStorage.setItem("parsedfirstName", JSON.stringify(action.payload));
    //   state.name = action.payload;
    // },
    SET_USER(state, action) {
      const profile = action.payload;
      state.user.firstName = profile.firstName;
      state.user.lastName = profile.lastName;
      state.user.email = profile.email;
      state.user.isAdmin = profile.isAdmin;
    //   state.user.bio = profile.bio;
      state.user.photo = profile.photo;
    },
  },
});

export const { SET_LOGIN, SET_NAME, SET_USER } = authSlice.actions;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
// export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
