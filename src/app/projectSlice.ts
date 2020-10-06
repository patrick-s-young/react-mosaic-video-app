import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TileCount = 2 | 3 | 4 | 6 | 9;
export const tileCounts: Array<TileCount> = [2, 3, 4, 6, 9];
export enum FileStatus {
  Inactive,
  Uploading,
  Downloading
}
//export type BackgroundFrame = number;
//export const backgroundFramesMax: number = 20;

export interface ProjectI {
  tileCount: TileCount
  fileStatus: FileStatus
  //backgroundFrame: BackgroundFrame
}

const initialState: ProjectI = {
  tileCount: 3,
  fileStatus: FileStatus.Inactive,
  //backgroundFrame: Math.floor(backgroundFramesMax / 2)
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
    }/*,
    setBackgroundFrame (state, action: PayloadAction<BackgroundFrame>) {
      state.backgroundFrame = action.payload;
    }*/
  }
});

export const {
  setTileCount,
  setFileStatus,
  //setBackgroundFrame
} = projectSlice.actions;

export type SetTileCount = ReturnType<typeof setTileCount>;
export type SetFileStatus = ReturnType<typeof setFileStatus>;
//export type SetBackgroundFrame = ReturnType<typeof setBackgroundFrame>;

export default projectSlice.reducer;