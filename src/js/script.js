"use strict";

(function() {
	const url = "http://api.openweathermap.org/data/2.5/weather?q=";
	const apiKey = "ee46f0e6cb7271730e87ce92332b7e35";  
	let state = {};
	
	// get weather data when user clicks Forecast button, then add 
	//temp & conditions to view
	document.querySelector('.forecast-button').addEventListener('click', function(e) {
		e.preventDefault();

		const location = document.querySelector('#location').value;

		document.querySelector('#location').value = '';

		fetch(url + location + '&appid=' + apiKey).then(function(response) {
			return(response.json());
		}).then(function(response) {
			updateUISuccess(response);
		}).catch(function() {
			updateUIFailure();
		});
	}, false);

	// handle ajax success
	function updateUISuccess(response) {
		const degC = response.main.temp - 273.15;
		const degCInt = Math.floor(degC);
		const degF = degC * 1.8 + 32;
		const degFInt = Math.floor(degF);
		state = {
			condition: response.weather[0].main,
			icon: "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png",
			degCInt: Math.floor(degCInt),
			degFInt: Math.floor(degFInt),
			city: response.name
		};


		const into = document.querySelector('.conditions');



		let container = document.createElement('div');
		let cityPara = document.createElement('p');
		cityPara.setAttribute('class','city');
		cityPara.textContent = state.city;
		let conditionsPara = document.createElement('p');
		conditionsPara.textContent = `${state.degCInt}\u00B0 C / ${state.degFInt}\u00B0 F`;
		let iconImage = document.createElement('img');
		iconImage.setAttribute('src', state.icon);
		iconImage.setAttribute('alt', state.condition);
		conditionsPara.appendChild(iconImage);
		container.appendChild(cityPara);
		container.appendChild(conditionsPara);
		if (document.querySelector('.conditions div')) {
			into.replaceChild(container, document.querySelector('.conditions div'));
		} else {
			into.appendChild(container);
		}
	}

	// handle ajax failure
	function updateUIFailure() {
//		$(".conditions").text("Weather information unavailable");
		document.querySelector(".conditions").textContent = "Weather information unavailable";
	}

	
})();