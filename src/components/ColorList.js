import { useSelector } from 'react-redux';
import ColorItem from './ColorItem';
import List from './styles/ColorList.styles.js';

const Colorlist = () => {
	const lastColorPicked = useSelector(state => state.color.lastColorPicked);

	return (
		<ul>
			<List>
				{lastColorPicked &&
					lastColorPicked.map((item, index) => (
						<ColorItem key={index} item={item} id={index} />
					))}
			</List>
		</ul>
	);
};

export default Colorlist;
