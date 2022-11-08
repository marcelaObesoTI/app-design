import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppContainer, Header, Title, Button } from './styles/App.styles.js';

import { changeColor } from './store/slices/color/colorSlice.js';
import {
	getContent,
	startGettingContent,
} from './store/slices/contenful/thunk.js';
import prevColor from './store/slices/color/thunks.js';
import Colorlist from './components/ColorList.js';

const App = () => {
	// const [content, setContent] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	// const [color, setColor] = useState('#6cebe2');
	const dispatch = useDispatch();
	const { isLoading, buttonText, title } = useSelector(
		state => state.contentful
	);

	useEffect(() => {
		const delay = setTimeout(() => {
			// setIsLoading(true);
			// fetchData();
			dispatch(startGettingContent());
			dispatch(getContent());
		}, 1000);
		return () => clearTimeout(delay);
	}, []);
	// const fetchData = async () => {
	// 	const result = await fetchContent();
	// 	setContent(result);
	// 	setIsLoading(false);
	// 	return true;
	// };
	const { color } = useSelector(state => state.color);

	const dispatchAnotherColor = () => {
		dispatch(changeColor());
		dispatch(prevColor());
	};

	// const colorPicker = () => {
	// 	const newColor = colors();
	// 	// console.log(`color es : ${newColor}`);
	// 	setColor(newColor);
	// };

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
					<Title data-testid={'testID-2'}>{title}</Title>
					<Button data-testid={'testID-3'} onClick={dispatchAnotherColor}>
						{buttonText}
					</Button>
					<Colorlist />
				</Header>
			)}
		</AppContainer>
	);
};

export default App;
