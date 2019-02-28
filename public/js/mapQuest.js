function initMap() {
	// add your code here

	L.mapquest.key = 'PkYANmdYcIHnE5a5XStzbJesgdyd3PZx';

	var map = L.mapquest.map('map', {
		center: [32.8788, -117.2359],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});



	L.marker([32.88, -117.237]).addTo(map);
}