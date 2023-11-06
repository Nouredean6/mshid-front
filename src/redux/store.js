import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "../redux/features/auth/authSlice";
import tourReducer from "../redux/features/tour/tourSlice";
import authReducer from "../redux/features/auth/authSlice";
import filterReducer from "./features/tour/filterSlice";
import userReducer from "../redux/features/users/usersSlice";
import filterUserReducer from "./features/users/userFilterSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    tour: tourReducer,
    user: userReducer,
    filter: filterReducer,
    filterUser: filterUserReducer,

  },
});