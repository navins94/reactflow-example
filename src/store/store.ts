import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import nodesReducer from "./nodesSlice";
import edgesReducer from "./edgesSlice";
import selectedNodesReducer from "./selectedNodesSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      nodes: nodesReducer,
      edges: edgesReducer,
      selectedNodes: selectedNodesReducer,
    },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
