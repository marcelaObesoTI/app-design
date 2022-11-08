import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: true,
	buttonText: '',
	dark: false,
	title: '',
};

export const contentfulSlice = createSlice({
	name: 'contentful',
	initialState,

	reducers: {
		startLoadingContent: state => {
			state.isLoading = true;
		},
		setContent: (state, action) => {
			// eslint-disable-next-line no-console
			state.isLoading = false;
			state.title = action.payload.title;
			state.buttonText = action.payload.buttonText;
		},
	},
});

export const { startLoadingContent, setContent } = contentfulSlice.actions;

export default contentfulSlice.reducer;
