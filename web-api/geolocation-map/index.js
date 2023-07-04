const options = {
	enableHighAccuracy: true,
};

const curError = () => {
	console.log(error);
};

const curSuccess = (pos) => {
	const coords = pos.coords;
	const map = L.map('map').setView([0, 0], 2);

	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	}).addTo(map);

	const marker = L.marker([0, 0]).addTo(map);
	const lat = coords.latitude;
	const lng = coords.longitude;

	marker.setLatLng([lat, lng]).update();
	map.setView([lat, lng], 13);
};

const currentLocation = navigator.geolocation.getCurrentPosition(curSuccess, curError, options);
