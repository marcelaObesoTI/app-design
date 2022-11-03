import { act } from '@testing-library/react';
import '@testing-library/jest-dom';
import fetchContent from '../fetchContent';
import App from '../App';
import http from '../../__mocks__/http';

jest.mock('../../__mocks__/http');
test('should return an object with content', async () => {
	const result = await fetchContent();
	expect(result.button).toBe('Change colors');
});
