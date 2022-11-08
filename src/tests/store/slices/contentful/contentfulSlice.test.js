import {
	contentfulSlice,
	setContent,
	startLoadingContent,
} from '../../../../store/slices/contenful/contentfulSlice';
import {
	initialState,
	contentFetchedState,
} from '../../../fixtures/contentfulFistures';

describe('Test en contentful slice', () => {});
test('Must have an empty initial state', () => {
	const state = contentfulSlice.reducer(initialState, {});
	expect(contentfulSlice.name).toBe('contentful');

	expect(state).toEqual(initialState);
});
test('On request setLoading to true', () => {
	const state = contentfulSlice.reducer(initialState, startLoadingContent());

	expect(state).toEqual({
		isLoading: true,
		buttonText: '',
		dark: false,
		title: '',
	});
});
test('After fetched contentful data', () => {
	const state = contentfulSlice.reducer(
		initialState,
		setContent(contentFetchedState)
	);

	expect(state).toEqual({
		isLoading: false,
		buttonText: 'Change colors',
		dark: false,
		title: 'Miaw There!',
	});
});
