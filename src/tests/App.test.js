import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import { Button } from '../styles/App.styles';
import colors from '../utils/colors';
import fetchContent from '../fetchContent';

jest.mock('../utils/colors');
jest.mock('../fetchContent');

describe('rendered components', () => {
	function timeout(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	let container = null;
	beforeEach(() => {
		container = render(<App />);
	});
	afterEach(() => {
		container = null;
	});
	it('Has an initial title', async () => {
		fetchContent.mockImplementationOnce(() => ({
			miawThere: 'Miaw there!',
			button: 'Change colors',
		}));
		expect(screen.getByText('Collecting your data')).toBeInTheDocument();
		await timeout(1500);
		expect(screen.getByText('Miaw there!')).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
	});
	it('should not show button starting', () => {
		expect(screen.queryByTestId('testID-2')).not.toBeInTheDocument();
	});
	it('should not show title starting', () => {
		expect(screen.queryByTestId('testID-3')).not.toBeInTheDocument();
	});
});

describe('Button functionality check', () => {
	function timeout(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
	let container = null;
	beforeEach(() => {
		container = render(<App />);
	});
	afterEach(() => {
		container = null;
	});
	const mockOnClick = colors.mockImplementationOnce();
	test('onclick function called', async () => {
		fetchContent.mockImplementationOnce(() => ({
			miawThere: 'Miaw there!',
			button: 'Change colors',
		}));
		await timeout(1500);
		fireEvent.click(screen.getByRole('button'));
		expect(mockOnClick).toHaveBeenCalledTimes(1);
	});
	test('onclick body changed color', async () => {
		fetchContent.mockImplementationOnce(() => ({
			miawThere: 'Miaw there!',
			button: 'Change colors',
		}));
		// eslint-disable-next-line jest-dom/prefer-to-have-style
		expect(document.body.style.backgroundColor).toEqual('rgb(108, 235, 226)');
		await timeout(1500);
		fireEvent.click(screen.getByRole('button'));
		fireEvent.click(screen.getByRole('button'));
		expect(document.body.style.backgroundColor).not.toEqual({
			'background-color': 'rgb(108, 235, 226)',
		});
	});
});
