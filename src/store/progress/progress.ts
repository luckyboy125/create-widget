import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import axios from 'axios';

const BASE_URL =
  'https://gist.githubusercontent.com/huvber/ba0d534f68e34f1be86d7fe7eff92c96/raw/98a91477905ea518222a6d88dd8b475328a632d3/mock-progress';

export const fetchData = createAsyncThunk('progress', async () => {
  const { data } = await axios.get(BASE_URL);
  const response = { total: 0, progress: 0, data };

  data.map((group: GroupItem) => {
    group.tasks.map((task: TaskItem) => {
      response.total += task.value;
      if (task.checked) response.progress += task.value;
    });
  });

  return response;
});

interface ProgressState {
  value: number;
  total: number;
  data: GroupItem[];
}

const initialState: ProgressState = {
  value: 0,
  total: 0,
  data: [],
};

export const progressReducer = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    checked: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    unChecked: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.value = 0;
        state.total = 0;
        state.data = [];
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.value = action.payload.progress;
        state.total = action.payload.total;
        state.data = action.payload.data;
      })
      .addCase(fetchData.rejected, (state) => {
        state.value = 0;
        state.total = 0;
        state.data = [];
      });
  },
});

export const { checked, unChecked } = progressReducer.actions;

export const progressValue = (state: RootState) => state.progress.value;
export const progressTotal = (state: RootState) => state.progress.total;
export const widgetData = (state: RootState) => state.progress.data;

export default progressReducer.reducer;
