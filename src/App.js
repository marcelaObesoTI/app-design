import './App.css';
import { useState, useEffect } from 'react';
const contentful = require('contentful');
const client = contentful.createClient({
	space: 'tvhoo57j3k4g',
	accessToken: 'gKX0EqBC6lS-eqwnTLYQzVKNFt1gtKgu81QYYlLKk8A',
});

const App = () => {
	const [content, setContent] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const delay = setTimeout(() => {
			console.log('juat making a dramatic pause');
			fetchData();
		}, 1000);
		return () => clearTimeout(delay);
	}, []);
	const fetchData = async () => {
		setIsLoading(true);
		const result = await fetchContent();
		console.log(result);
		setContent(result);
		setIsLoading(false);
	};
	const colorPicker = () => {
		return `#${Math.random().toString(16).substr(-6)}`;
	};
	const newColor = colorPicker();

	const [color, setColor] = useState('#6cebe2');
	useEffect(() => {
		document.body.style.backgroundColor = color;
	}, [color]);
	const fetchContent = () => client.getEntries().then(response => response);

	return (
		<div className='App'>
			{isLoading ? (
				<header className='App-header'>
					<h3>Dramatically collecting your data</h3>
				</header>
			) : (
				<header className='App-header'>
					<h1>{content.items[0].fields.miawThere}</h1>
					<button
						onClick={() => {
							setColor(newColor);
						}}
					>
						{content.items[0].fields.button}
					</button>
				</header>
			)}
		</div>
	);
};

export default App;
