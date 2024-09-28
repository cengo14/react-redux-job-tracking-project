import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jobs: [],
  isLoading: true,
  error: false,
};
const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    setJobs: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.jobs = action.payload;
    },
    addJobs: (state, action) => {
      state.jobs.push(action.payload);
    },
    deleteJobs: (state, action) => {
      const index = state.jobs.findIndex((i) => i.id == action.payload);
      state.jobs.splice(index, 1);
    },
  },
});
export default jobSlice.reducer;
export const { setError, setLoading, setJobs, addJobs, deleteJobs } =
  jobSlice.actions;
