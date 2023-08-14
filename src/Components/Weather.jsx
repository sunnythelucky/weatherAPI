import React, { useEffect, useState } from "react";
import { getWeather, getWeatherByCity } from "../Apis/getWeather";

function Weather() {
	const [data, setData] = useState();

	useEffect(() => {
		getWeather()
			.then((data) => setData(data))
			.catch((err) => (err.response.status === 400 ? alert("City not found") : console.log(err)));
	}, []);

	if (!data) return <div>Loading...</div>;

	const { location, current } = data;
	const { name, region, country, localtime } = location;
	const { temp_c, condition } = current;

	const onSubmit = (e) => {
		e.preventDefault();
		const city = e.target[0].value;
		getWeatherByCity(city).then((data) => setData(data));
	};

	const time = new Date(localtime).toDateString();
	return (
		<>
			<div>{time}</div>
			<div>{`${name}, ${region}, ${country}`}</div>
			<img src={condition.icon} alt="weather icon"></img>
			<div>{temp_c} Celsius</div>

			<form onSubmit={onSubmit}>
				<input type="text" placeholder="Enter city name" />
				<button type="submit">Search</button>
			</form>
		</>
	);
}

export default Weather;
