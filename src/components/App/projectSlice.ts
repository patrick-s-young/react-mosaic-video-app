import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TileCount = 2 | 3 | 4 | 6 | 9;
export const tileCounts: Array<TileCount> = [2, 3, 4, 6, 9];

export enum FileStatus {
  Inactive,
  Uploading,
  Downloading
}

export interface ProjectI {
  tileCount: TileCount
  fileStatus: FileStatus
}

const initialState: ProjectI = {
  tileCount: 3,
  fileStatus: FileStatus.Inactive
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setTileCount (state, action: PayloadAction<TileCount>) {
      state.tileCount = action.payload;
    },
    setFileStatus (state, action: PayloadAction<FileStatus>) {
      state.fileStatus = action.payload;
    }
  }
});

export const {
  setTileCount,
  setFileStatus
} = projectSlice.actions;

export type SetTileCountI = ReturnType<typeof setTileCount>;
export type SetFileStatus = ReturnType<typeof setTileCount>;

export default projectSlice.reducer;