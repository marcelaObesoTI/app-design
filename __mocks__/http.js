const fetchData = () => {
	return Promise.resolve({
		isLoading: false,
		buttonText: 'Change colors',
		dark: false,
		title: 'Miaw There!',
		lastColorPicked: '#6cebe2',
	});
};
export default fetchData;
