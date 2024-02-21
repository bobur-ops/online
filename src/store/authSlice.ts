import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppState } from ".";

type State = {
  credentials: null | {
    name: string;
    role: "customer" | "guest" | "employee";
  };
};

const initialState: State = {
  credentials: null,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCredentials(state, action: PayloadAction<State["credentials"]>) {
      state.credentials = action.payload;
    },
  },
});

export const selectCredentials = (state: AppState) => state.auth.credentials;
export const selectCredentialsAuthorized = (state: AppState) => {
  if (state.auth.credentials === null) {
    throw new Error(
      "selectCredentialsAuthorized assumes that credentials is not null, but it is"
    );
  }
  return state.auth.credentials;
};

export const { setCredentials } = authSlice.actions;

export default authSlice;
