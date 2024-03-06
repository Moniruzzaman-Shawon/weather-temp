const API_KEY = 'dabf4baad60d538c7c2c22d809003ae3';

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid=${API_key}`
}
