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
	/**
	 * Make API request
	 */

	return (
		<div className='App'>
			{isLoading ? (
				<header className='App-header'>
					<button onClick={() => fetchData()}>Ready to fetch content</button>
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

// function App() {

// 	return (
// 		<div className='App'>
// 			<header className='App-header'>
// 				<h1>Miaw there</h1>
// 				<button
// 					onClick={() => {
// 						setColor(newColor);
// 					}}
// 				>
// 					Change background
// 				</button>
// 			</header>
// 		</div>
// 	);
// }

export default App;
