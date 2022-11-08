const colors = () => {
	// const x = Math.floor(Math.random() * 256);
	// const y = Math.floor(Math.random() * 256);
	// const z = Math.floor(Math.random() * 256);
	// const newColor = 'rgb(' + x + ',' + y + ',' + z + ')';
	const newColor = `#${Math.random().toString(16).substr(-6)}`;
	return newColor;
};

export default colors;
