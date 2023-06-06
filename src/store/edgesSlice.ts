import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
import { addEdge } from "reactflow";

interface Edge {
  id: string;
  source: string;
  target: string;
}

interface EdgesState {
  edges: Edge[];
}

const initialState: EdgesState = {
  edges: [],
};

const edgesSlice = createSlice({
  name: "edges",
  initialState,
  reducers: {
    onEdgesChange: (state, action) => {
      state.edges = action.payload;
    },
    onConnect: (state, action) => {
      state.edges = addEdge(action.payload, state.edges);
    },
  },
});

export const { onEdgesChange, onConnect } = edgesSlice.actions;

export const selectEdges = (state: AppState) => state.edges.edges;

export default edgesSlice.reducer;
