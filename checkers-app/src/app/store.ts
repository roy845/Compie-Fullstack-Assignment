import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import checkersReducer from "../features/checkersGame/checkersSlice";

export const store = configureStore({
  reducer: {
    checkers: checkersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
