import { configureStore } from '@reduxjs/toolkit';
import Trending from './Slices/TrendingSlice';

export const store = configureStore({
  reducer: {
    Trending: Trending, 
  },
});

 