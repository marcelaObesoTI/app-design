const contentful = require('contentful');

const client = contentful.createClient({
	space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
	accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const fetchContent = () => {
	const result = client.getEntries().then(response => {
		const result = response.items[0].fields;
		// eslint-disable-next-line no-console
		console.log(result);
		return result;
	});
	return result;
};

export default fetchContent;
