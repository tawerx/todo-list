import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Color = {
  id: number;
  colorName: string;
  bodyColor: string;
  wrapperColor: string;
};

interface ColorsSliceState {
  colors: Color[];
  chosenColor: string;
}

const initialState: ColorsSliceState = {
  colors: [
    { id: 1, colorName: 'blue', bodyColor: '#adf', wrapperColor: '#cdebff' },
    { id: 2, colorName: 'yellow', bodyColor: '#f8ff89cc', wrapperColor: '#fcffcd' },
    { id: 3, colorName: 'purple', bodyColor: '#aad', wrapperColor: '#e1e1ff' },
    { id: 4, colorName: 'white', bodyColor: 'white', wrapperColor: 'white' },
    { id: 5, colorName: 'dark', bodyColor: '#000000d1', wrapperColor: '#d2d2d2' },
    { id: 6, colorName: 'orange', bodyColor: '#ff8900d1', wrapperColor: '#ffd29d' },
  ],
  chosenColor: '',
};

const ColorsSlice = createSlice({
  name: 'logic',
  initialState,
  reducers: {
    setChosenColor: (state, action: PayloadAction<string>) => {
      state.chosenColor = action.payload;
    },
  },
});

export const { setChosenColor } = ColorsSlice.actions;
export default ColorsSlice.reducer;
