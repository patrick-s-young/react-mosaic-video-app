import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TileCount = 2 | 3 | 4 | 6 | 9;
export const tileCounts: Array<TileCount> = [2, 3, 4, 6, 9];

export interface ProjectI {
  tileCount: TileCount
}

const initialState: ProjectI = {
  tileCount: 3
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    setTileCount (state, action: PayloadAction<number>) {
      const tileCount = action.payload;
      state.tileCount = tileCount;
    }
  }
});

export const {
  setTileCount
} = projectSlice.actions;

export type SetTileCountI = ReturnType<typeof setTileCount>;

export default projectSlice.reducer;