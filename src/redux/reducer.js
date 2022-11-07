import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rightRow: "",
  overviewBoolean: false,
  scheduleBoolean: false,
  resourcesBoolean: false,
  survey1Boolean: false,
  survey2Boolean: false,
  basicSettingsBoolean: false,
  heroImageBoolean: false,
};

const Reducer = createSlice({
  name: "reducers",
  initialState,
  reducers: {
    setRightRow: (state, action) => {
      state.rightRow = action.payload;
    },
    setOverviewBoolean: (state, action) => {
      state.overviewBoolean = action.payload;
    },
    setScheduleBoolean: (state, action) => {
      state.scheduleBoolean = action.payload;
    },
    setResourcesBoolean: (state, action) => {
      state.resourcesBoolean = action.payload;
    },
    setSurvey1Boolean: (state, action) => {
      state.survey1Boolean = action.payload;
    },
    setSurvey2Boolean: (state, action) => {
      state.survey2Boolean = action.payload;
    },
    setBasicSettingsBoolean: (state, action) => {
      state.basicSettingsBoolean = action.payload;
    },
    setHeroImageBoolean: (state, action) => {
      state.heroImageBoolean = action.payload;
    },
  },
});

export default Reducer.reducer;
export const {
  setRightRow,
  setOverviewBoolean,
  setScheduleBoolean,
  setResourcesBoolean,
  setSurvey1Boolean,
  setSurvey2Boolean,
  setBasicSettingsBoolean,
  setHeroImageBoolean,
} = Reducer.actions;
