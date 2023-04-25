import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PanelState {
  title: String;
}

const initialState: PanelState = {
  title: '',
};

export const panelReducer = createSlice({
  name: 'panel',
  initialState,
  reducers: {
    setPanelTitle: (state, action: PayloadAction<String>) => {
      state.title = action.payload;
    },
  },
});

export const { setPanelTitle } = panelReducer.actions;

export const panelTitle = (state: RootState) => state.panel.title;

export default panelReducer.reducer;
