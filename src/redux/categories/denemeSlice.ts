import { createSlice } from '@reduxjs/toolkit';

// types
import type { PayloadAction } from '@reduxjs/toolkit';
import type { Categories } from '@/redux/types';

const initialState: Categories = {
  categoryTitle: 'deneme baslik',
};

export const convertSlice = createSlice({
  name: 'convert',
  initialState,
  reducers: {
    setFromToken: (
      state,
      action: PayloadAction<Categories['categoryTitle']>
    ) => {
      state.categoryTitle = action.payload;
    },
  },
});

export const { setFromToken } = convertSlice.actions;
export default convertSlice.reducer;
