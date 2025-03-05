import { createSlice } from "@reduxjs/toolkit";

const actualUserSlice = createSlice({
  name: "actualUser",
  initialState: null,
  reducers: {
    addActualUser: (state, action) => {
      return action.payload;
    },
    removeActualUser: (state, action) => {
      return null;
    },
  },
});

export const { addActualUser, removeActualUser } = actualUserSlice.actions;
export default actualUserSlice.reducer;
