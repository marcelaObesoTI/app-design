import { appendToList } from './colorSlice';

const prevColor = () => {
	return (dispatch, getState) => {
		// const replacedColor = {
		// 	id: 0,
		// 	name: '',
		// };
		const oldColor = getState().color.color;

		// eslint-disable-next-line no-console
		console.log(oldColor);
		dispatch(appendToList({ color: oldColor }));
	};
};
export default prevColor;
