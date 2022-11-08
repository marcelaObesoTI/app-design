import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './slices/color/colorSlice';
import contentfulReducer from './slices/contenful/contentfulSlice';

export const store = configureStore({
	reducer: {
		color: colorReducer,
		contentful: contentfulReducer,
	},
});
