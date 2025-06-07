document.addEventListener('DOMContentLoaded', () => {
    const locateBtn = document.getElementById('locateBtn');
    const statusDiv = document.getElementById('status');
    const mapDiv = document.getElementById('map');
    const coordinatesDiv = document.getElementById('coordinates');

    let map;
    let marker;
    let circle;

    // Initialize the map (without centering it yet)
    function initMap() {
        map = L.map('map').setView([0, 0], 2);  // Default view (whole world)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
    }

    // Update the map with user's location
    function updateMap(latitude, longitude, accuracy) {
        // Remove previous marker and circle if they exist
        if (marker) map.removeLayer(marker);
        if (circle) map.removeLayer(circle);

        // Set view to new location
        map.setView([latitude, longitude], 15);

        // Add marker at the location
        marker = L.marker([latitude, longitude]).addTo(map)
            .bindPopup("You are here!").openPopup();

        // Add a circle showing accuracy
        circle = L.circle([latitude, longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.2,
            radius: accuracy
        }).addTo(map);

        // Update coordinates display
        coordinatesDiv.innerHTML = `
            <strong>Coordinates:</strong> ${latitude.toFixed(6)}, ${longitude.toFixed(6)}<br>
            <strong>Accuracy:</strong> ${Math.round(accuracy)} meters
        `;
    }

    // Handle geolocation
    function getLocation() {
        if (!navigator.geolocation) {
            statusDiv.textContent = "Geolocation is not supported by your browser";
            statusDiv.className = "error";
            return;
        }

        statusDiv.textContent = "Locating...";
        statusDiv.className = "loading";

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                const acc = position.coords.accuracy;

                statusDiv.textContent = "Location found!";
                statusDiv.className = "success";
                updateMap(lat, lng, acc);
            },
            (error) => {
                let message;
                switch(error.code) {
                    case error.PERMISSION_DENIED:
                        message = "You denied the request for geolocation.";
                        break;
                    case error.POSITION_UNAVAILABLE:
                        message = "Location information is unavailable.";
                        break;
                    case error.TIMEOUT:
                        message = "The request to get location timed out.";
                        break;
                    case error.UNKNOWN_ERROR:
                        message = "An unknown error occurred.";
                        break;
                }
                statusDiv.textContent = message;
                statusDiv.className = "error";
            },
            {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 0
            }
        );
    }

    // Initialize the map when page loads
    initMap();

    // Set up button click handler
    locateBtn.addEventListener('click', getLocation);
});