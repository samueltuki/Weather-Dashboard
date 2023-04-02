// $(document).ready(function () {

// });
let fiveDayEl = $(".fiveDay");
let city = $("#search-input").val();
let tempEl = $("#temperature");
let cityEl = $("#city");
let dateEl = $("#date");
let iconEl = $("#weather-icon");
let apiKey = "ad466c2bde80cc851c862d4fa5cea60c";

$("#search-button").click(function (event) {
  event.preventDefault();
  // event.stopPropagation();

  // grabbed the text from the input box
  let inputField = $("#search-input")[0].value;
  // console.log(inputField);
  let queryUrl1 =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    inputField +
    "&cnt=10&units=metric&APPID=" +
    apiKey;

  //  call to retrieve user's selected city current weather information
  $.ajax({
    url: queryUrl1,
    method: "GET",
  }).then(function (response) {
    displayWeather(response);
    forecast(response.coord);
    let historySearchBtn = $("<button>");

    //  used inputField variable to set the content of the dynamically created button
    historySearchBtn.text(inputField);
    historySearchBtn.attr("data-name", inputField);
    historySearchBtn.addClass("SearchBtn rounded-lg ");
    historySearchBtn.on("click", viewSearch);
    // historySearchBtn.on("click", () => console.log("hi"));
    $("#history").append(historySearchBtn);
  });
});

function displayWeather(response) {
  $("#city").text(response.name);
  $("#date").text("(" + moment().format("l") + ")");
  // console.log(response);
  let icon = response.weather[0].icon;
  let tempC = response.main.temp;
  $("#temperature").text(tempC.toFixed(2));
  $("#humidity").text(response.main.humidity);
  $("#wind").text(response.wind.speed);
  $("#weather-icon").attr(
    "src",
    "http://openweathermap.org/img/w/" + icon + ".png"
  );

  // console.log(icon);
}

function viewSearch() {
  let search = $(this).attr("data-name");
  // console.log(search);
  let queryURl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    search +
    "&units=metric&APPID=" +
    apiKey;

  $.ajax({
    url: queryURl,
    method: "GET",
  }).then(function (response) {
    displayWeather(response);
    forecast(response.coord);
  });
}

// function call to retrieve 5days forecast

function forecast(params) {
  const { lat, lon } = params;
  let queryUrl2 =
    "http://api.openweathermap.org/data/2.5/forecast?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    apiKey +
    "&units=metric";

  $.ajax({
    url: queryUrl2,
    method: "GET",
  }).then(function (response) {
    let forecast = response.list.filter((item) =>
      item.dt_txt.includes("12:00")
    );
    const date = $(".fiveDay-date");
    const fiveDayImg = $(".fiveDay-img");
    const temp = $(".fiveDay-temp");
    const humidity = $(".fiveDay-humid");
    forecast.forEach((day, index) => {
      fiveDayImg
        .eq(index)
        .attr(
          "src",
          "http://openweathermap.org/img/w/" + day.weather[0].icon + ".png"
        );
      const dateText = new Date(day.dt_txt).toLocaleDateString();
      date.eq(index).text(dateText);
      temp.get(index).textContent = day.main.temp;
      humidity.get(index).textContent = day.main.humidity;
    });
  });
}
