import { startLoadingContent, setContent } from './contentfulSlice';
import { setColor } from '../color/colorSlice';
const contentful = require('contentful');

const client = contentful.createClient({
	// space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
	// accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,

	space: 'tvhoo57j3k4g',
	accessToken: 'gKX0EqBC6lS-eqwnTLYQzVKNFt1gtKgu81QYYlLKk8A',
});

export const startGettingContent = () => {
	return async dispatch => {
		dispatch(startLoadingContent());
	};
};
// eslint-disable-next-line no-console

export const getContent = () => {
	return async (dispatch, getState) => {
		const result = await client
			.getEntries()
			.then(response => response.items[0].fields);
		dispatch(
			setColor({ dark: result.dark, lastColorPicked: result.lastColorPicked })
		);

		dispatch(
			setContent({ buttonText: result.button, title: result.miawThere })
		);
	};
};

// const fetchContent = () => {
// 	const result = client.getEntries().then(response => {
// 		const result = response.items[0].fields;
// 		// eslint-disable-next-line no-console
// 		console.log(result);
// 		return result;
// 	});
// 	return result;
// };
