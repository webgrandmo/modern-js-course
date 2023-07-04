// Get currentPosition()

const curSuccess = (pos) => {
	const coords = pos.coords;
	console.log(`Latitude: ${coords.latitude}`);
	console.log(`Longitude: ${coords.longitude}`);
	console.log(`Accuracy: ${coords.accuracy}`);
};
const curError = (error) => console.log(`Error: ${error.code} - ${error.message}`);

const curOptions = {
	enableHighAccuracy: true, // Use GPS if available
	timeout: 5000, // Time to wait to stop trying for location
	maximumAge: 0, // Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()

const target = {
	latitude: 49.840128,
	longitude: 24.0254976,
};

const watchSuccess = (pos) => {
	const coords = pos.coords;
	if (target.latitude === coords.latitude && target.longitude === coords.longitude) {
		console.log('You have reached your destination');
		navigator.geolocation.clearWatch(id);
	}
};
const watchError = (error) => console.log(`Error: ${error.code} - ${error.message}`);

const watchOptions = {
	enableHighAccuracy: true, // Use GPS if available
	timeout: 5000, // Time to wait to stop trying for location
	maximumAge: 0, // Do not use a cached position
};

const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);
