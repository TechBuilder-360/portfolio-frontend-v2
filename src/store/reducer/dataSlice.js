import { createSlice, configureStore } from "@reduxjs/toolkit";
import data from "../../data.js";
import options from "../../options.js";
const initialState = { list: data, degrees : options, firstModal : false };

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
saveEducation(state,action) {
state.list.education = [action.payload]
},
openModal(state,action) {
     
  state.firstModal = true;
},
 closeModal(state,action) {
      state.firstModal = false;
     },
  }
});
export const userActions = userSlice.actions;
const store = configureStore({
  reducer: userSlice.reducer
});

export default store;
