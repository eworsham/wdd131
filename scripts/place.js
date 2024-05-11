const windChillLocator = document.querySelector('#wind-chill');
let temperature = 17;
let windSpeed = 5;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * (windSpeed**0.16)) + (0.3965 * temperature * (windSpeed**0.16));
}

let windChill = calculateWindChill(temperature, windSpeed).toFixed(1);

console.log(windChill)

if (temperature <= 10 && windSpeed > 4.8) {
    windChillLocator.innerHTML = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`
} else {
    windChillLocator.innerHTML = 'N/A'
}