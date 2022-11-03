import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App, { colors } from '../App';
import { Button } from '../styles/App.styles';

describe('rendered components', () => {
	let container = null;
	beforeEach(() => {
		container = render(<App />);
	});
	afterEach(() => {
		container = null;
	});

	it('Has an initial title', () => {
		const container = screen.getByTestId('testID-1');

		expect(container).toBeInTheDocument();
	});

	it('should not show button starting', () => {
		expect(screen.queryByTestId('testID-2')).not.toBeInTheDocument();
	});
	it('should not show title starting', () => {
		expect(screen.queryByTestId('testID-3')).not.toBeInTheDocument();
	});
	it('should show title after loading', async () => {
		await (async () =>
			expect(screen.findByTestId('testID-3')).toBeInTheDocument());
	});

	it('should show button after loading', async () => {
		await (async () => {
			const button = screen.findByTestId('testID-2');
			expect(button).toBeInTheDocument();
		});
	});

	it('should show button after loading', async () => {
		await (async () => {
			const { button } = screen.getByTestId('testID-2');
			expect(button).toHaveTextContent('Change colors');
		});
	});
	describe('color function behavior', () => {
		it('starts with #', () => {
			expect(colors()).toContain('#');
		});
		it('To have a string with length 7', () => {
			expect(colors()).toHaveLength(7);
		});
	});
});
test('onclick colorpicker', async () => {
	const mockOnClick = jest.fn();
	await (async () => {
		const button = render(<Button onClick={mockOnClick} />);
		expect(button).not.toBeNull;
	});
});
test('onclick colorpicker', async () => {
	const mockOnClick = jest.fn();
	await (async () => {
		const button = render(<Button onClick={mockOnClick} />);
		expect(button).toBeInTheDocument();
		expect(mockOnClick).toBeCalledTimes(0);
		fireEvent.button.click();
		expect(mockOnClick).toBeCalledTimes(1);
	});
});
