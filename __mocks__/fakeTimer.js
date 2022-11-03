function fakeTimer(callback) {
	setTimeout(() => {
		callback && callback();
	}, 1000);
}

module.exports = fakeTimer;
