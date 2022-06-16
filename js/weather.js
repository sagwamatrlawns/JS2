const API_KEY = "e52fdc0c66247c4ff3fe5d7ed35e0494";

function onGeoOk(position) {
  // 사용자의 위치정보에서 위도와 경도를 저장한다.
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // 실제로 URL에 갈 필요 없이 JavaScript가 대신 URL을 불러 준다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Cat't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
