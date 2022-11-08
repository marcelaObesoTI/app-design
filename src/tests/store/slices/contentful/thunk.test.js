import { setColor } from '../../../../store/slices/color/colorSlice';
import {
	setContent,
	startLoadingContent,
} from '../../../../store/slices/contenful/contentfulSlice';
import fetchData from '../../../../../__mocks__/http';
import {
	getContent,
	startGettingContent,
} from '../../../../store/slices/contenful/thunk';

import { contentFetchedState } from '../../../fixtures/contentfulFistures';

jest.mock('../../../../../__mocks__/http');

describe('testing dispatch functionality of thunk getContent', () => {
	const dispatch = jest.fn();
	beforeEach(() => jest.clearAllMocks());
	test('checking dispatch for startLoadingContent', async () => {
		await startGettingContent()(dispatch);
		expect(dispatch).toHaveBeenCalledWith(startLoadingContent());
	});
	test('should return an object with content', async () => {
		fetchData.mockImplementationOnce(() => contentFetchedState);

		await getContent(contentFetchedState)(dispatch);

		expect(dispatch).toHaveBeenCalledWith(
			setColor({ dark: false, lastColorPicked: '#6cebe2' })
		);
		expect(dispatch).toHaveBeenCalledWith(
			setContent({
				buttonText: 'Change colors',
				title: 'Miaw there!',
			})
		);
	});
});
