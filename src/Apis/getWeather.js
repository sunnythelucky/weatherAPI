import axios from "axios";

export const getWeather = async () => {
	try {
		return await axios
			.get("https://api.weatherapi.com/v1/current.json?key=015030b4d3804e78b43215109232103&q=Toronto&aqi=no")
			.then((res) => res.data);
	} catch (err) {
		err.response.status === 400 ? alert("City not found") : console.log(err);
	}
};

export const getWeatherByCity = async (city) => {
	try {
		return axios
			.get(`https://api.weatherapi.com/v1/current.json?key=015030b4d3804e78b43215109232103&q=${city}&aqi=no`)
			.then((res) => res.data);
	} catch (err) {
		console.log(err);
	}
};
