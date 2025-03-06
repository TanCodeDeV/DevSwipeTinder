import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import feedReducer from "./slices/feedSlice";
import actualUserReducer from "./slices/actualUserSlice";
import connectionReducer from "./slices/connectionSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    feed: feedReducer,
    actualUser: actualUserReducer,
    connection: connectionReducer,
  },
});

export default appStore;
