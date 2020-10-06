import { combineReducers } from '@reduxjs/toolkit';
import projectReducer from 'app/projectSlice';
import scrubberReducer from 'features/videoScrubber/scrubberSlice';

const rootReducer = combineReducers({
  project: projectReducer,
  scrubber: scrubberReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;