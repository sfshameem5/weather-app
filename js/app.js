// Make sure that your browser has geolocation
if (!navigator.geolocation) {
	console.log("Geo location isn't supported in your browser");
}

// Get lat and long using geolocation. 

navigator.geolocation.getCurrentPosition(function(position) {
	let lat = position.coords.latitude;
	let long = position.coords.longitude;	
	let weatherURL = "https://fcc-weather-api.glitch.me/api/current?lat=";

	let getWeather = weatherURL + lat + "&lon=" + long;

	console.log(getWeather);

	$.ajax({
		url: getWeather,
		jsonp: 'jsonp',
		success: function(data) {
			// Set lat and long using geolocation
			console.log(data.weather[0]);
			$('.location').text(data.name + ", " + data.sys.country);
			$('.temperature').text(data.main.temp + " C");
			$('.kind').text(data.weather[0].main);
			if (data.weather[0].main.toLowerCase() === "clouds") {
				$('i').addClass('wi-day-cloudy-high');
			}else if (data.weather[0].main.toLowerCase() === "thunderstorm") {
				$('i').addClass('wi-day-thunderstorm');
			}
		}
	})
});


// Generate random Color 

let color = randomColor();
$('main').css('backgroundColor', color);