import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { items: "", totalAmount: 0 };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   
  }
});
export const userActions = userSlice.actions;
const store = configureStore({
  reducer: userSlice.reducer
});

export default store;