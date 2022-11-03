import { useState, useEffect } from 'react';
import { AppContainer, Header, Title, Button } from './styles/App.styles.js';
import fetchContent from './fetchContent';
export const colors = () => {
	const newColor = `#${Math.random().toString(16).substr(-6)}`;
	return newColor;
};

const App = () => {
	const [content, setContent] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [color, setColor] = useState('#6cebe2');

	useEffect(() => {
		const delay = setTimeout(() => {
			setIsLoading(true);
			fetchData();
		}, 1000);
		return () => clearTimeout(delay);
	}, []);
	const fetchData = async () => {
		const result = await fetchContent();
		setContent(result);
		setIsLoading(false);
		return true;
	};
	const colorPicker = () => {
		const newColor = colors();
		setColor(newColor);
	};

	useEffect(() => {
		document.body.style.backgroundColor = color;
	}, [color]);

	return (
		<AppContainer data-testid={'testID-1'}>
			{isLoading ? (
				<Header>
					<Title>Collecting your data</Title>
				</Header>
			) : (
				<Header>
					<h1 data-testid={'testID-2'}>{content.miawThere}</h1>
					<Button data-testid={'testID-3'} onClick={colorPicker}>
						{content.button}
					</Button>
				</Header>
			)}
		</AppContainer>
	);
};

export default App;
