import { createSlice } from '@reduxjs/toolkit';

const colors = () => {
	const x = Math.floor(Math.random() * (256 - 100) + 150);
	const y = Math.floor(Math.random() * (256 - 100) + 150);
	const z = Math.floor(Math.random() * (256 - 100) + 150);
	const newColor = 'rgb(' + x + ', ' + y + ', ' + z + ')';
	// const newColor = `#${Math.random().toString(16).substr(-6)}`;
	return newColor;
};
const initialState = {
	color: '#6cebe2',
	dark: false,
	lastColorPicked: [],
};

export const colorSlice = createSlice({
	name: 'color',
	initialState,
	reducers: {
		changeColor: state => {
			state.color = colors();
		},
		setColor: (state, action) => {
			state.dark = action.payload.dark;
		},
		appendToList: (state, action) => {
			state.lastColorPicked.push(action.payload.color);
		},
	},
});

export const { changeColor, setColor, appendToList } = colorSlice.actions;

export default colorSlice.reducer;
