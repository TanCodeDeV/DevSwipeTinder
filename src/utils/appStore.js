import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import feedReducer from "./slices/feedSlice";
import actualUserReducer from "./slices/actualUserSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    actualUser: actualUserReducer,
  },
});

export default appStore;
