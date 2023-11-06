import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredUsers: [],
};

const userFilterSlice = createSlice({
  name: "filterUser",
  initialState,
  reducers: {
    FILTER_USERS(state, action) {
      const { users, search } = action.payload;
      const tempUsers = users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(search.toLowerCase()) 
      );

      state.filteredUsers = tempUsers;
    },
  },
});

export const { FILTER_USERS } = userFilterSlice.actions;

export const selectFilteredUsers = (state) => state.filterUser.filteredUsers;

export default userFilterSlice.reducer;
