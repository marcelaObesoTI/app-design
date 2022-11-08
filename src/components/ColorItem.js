/* eslint-disable react/no-unknown-property */
import Item from './styles/ColorItem.styles';

// eslint-disable-next-line react/prop-types
const ColorItem = ({ item, id }) => {
	return (
		<li>
			<Item theme={item}>
				<span>{id + 1} </span>
				{item}
			</Item>
		</li>
	);
};
export default ColorItem;
