import { combineReducers } from '@reduxjs/toolkit';
import projectReducer from 'Components/App/projectSlice';

const rootReducer = combineReducers({
  project: projectReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;