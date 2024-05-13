const year= document.getElementById("currentyear").textContent = new Date().getFullYear();
let today = document.getElementById("lastmodified").textContent = new Date();
let temp = 78;
let windspeed = 8;

function calculateWindChill(temperature, windSpeed) {
    return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + "°F";
};
document.querySelector("#windchill").textContent = (temp <= 10 && wind >= 4.8) ? calculateWindChill(temp, wind) : "N/A";