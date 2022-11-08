import {
	colorSlice,
	appendToList,
	changeColor,
} from '../../../../store/slices/color/colorSlice';
import { onColorChanged } from '../../../fixtures/colorFixtures';
import { initialState } from '../../../fixtures/contentfulFistures';

describe('Test the color slice', () => {
	test('Must have an empty initial state', () => {
		const state = colorSlice.reducer(initialState, {});
		//	expect(colorSlice.name).toBe('color');

		expect(state).toEqual(initialState);
	});
	test('On color change color', () => {
		const state = colorSlice.reducer(initialState, changeColor());

		expect(state.color).not.toEqual({
			color: '#6cebe2',
		});
	});
	// test('add new color to array', () => {
	// 	const state = colorSlice.reducer(
	// 		initialState,
	// 		appendToList(onColorChanged)
	// 	);

	// 	expect(state.lastColorPicked).toHaveLength(2);
	// });
});
