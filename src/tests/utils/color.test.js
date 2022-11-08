import color from '../../utils/colors';

describe('color function behavior', () => {
	it('starts with #', () => {
		expect(color()).toContain('#');
	});
	it('To have a string with length 7', () => {
		expect(color()).toHaveLength(7);
	});
});
