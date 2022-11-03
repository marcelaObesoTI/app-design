const contentful = require('contentful');
const client = contentful.createClient({
	space: 'tvhoo57j3k4g',
	accessToken: 'gKX0EqBC6lS-eqwnTLYQzVKNFt1gtKgu81QYYlLKk8A',
});
const fetchContent = () =>
	client.getEntries().then(response => {
		const result = response.items[0].fields;
		return result;
	});

export default fetchContent;
