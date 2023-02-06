// $(document).ready(function () {

// });
let fiveDayEl = $(".fiveDay");
let city = $("#search-input").val();
let tempEl = $("#temperature");
let cityEl = $("#city");
let dateEl = $("#date");
let iconEl = $("#weather-icon");

// let cardDateEl = moment().format();
// $("#date").text(cardDateEl);


$("#search-button").click(function (event) {
  event.preventDefault();

  let inputField = $("#search-input").val();
  let apiKey = "ad466c2bde80cc851c862d4fa5cea60c";
  let queryUrl1 =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    inputField +
    "&cnt=10&units=imperial&APPID=" +
    apiKey;

  //  call to retrieve user's selected city current weather information
  $.ajax({
    url: queryUrl1,
    method: "GET",
  }).then(function (response){
     console.log(response);

  $("#city").text(response.name);
  $("#date").text("(" + moment().format("l") + ")")
  $("#temperature").text(response.main.temp)
  $("#humidity").text(response.main.humidity)
  $("#wind").text(response.wind.speed)
  


  });


});


// call to retrieve 5days forecast

// let queryUrl2 =
//   "http://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&cnt=5&appid=ad466c2bde80cc851c862d4fa5cea60c";

// console.log(queryUrl2);

// $.ajax({
//   url: queryUrl2,
//   method: "GET",
// });