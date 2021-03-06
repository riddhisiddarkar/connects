import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../features/userSlice";
import donationReducer from "../features/donationSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    donation: donationReducer,
  },
});
