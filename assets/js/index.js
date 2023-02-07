// $(document).ready(function () {

// });
let fiveDayEl = $(".fiveDay");
let city = $("#search-input").val();
let tempEl = $("#temperature");
let cityEl = $("#city");
let dateEl = $("#date");
let iconEl = $("#weather-icon");
let apiKey = "ad466c2bde80cc851c862d4fa5cea60c";

// let cardDateEl = moment().format();
// $("#date").text(cardDateEl);

$("#search-button").click(function (event) {
  event.preventDefault();

  // grabbed the text from the input box
  let inputField = $("#search-input").val();
  let queryUrl1 =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    inputField +
    "&cnt=10&units=imperial&APPID=" +
    apiKey;

  //  call to retrieve user's selected city current weather information
  $.ajax({
    url: queryUrl1,
    method: "GET",
  }).then(function (response) {
    
    $("#city").text(response.name);
    $("#date").text("(" + moment().format("l") + ")");

    // temperature conversion into Celsius
    let tempC = response.main.temp - 32 / 1.8;
    $("#temperature").text(tempC.toFixed());
    $("#humidity").text(response.main.humidity);
    $("#wind").text(response.wind.speed);
    let historySearchBtn = $("<button>");

    //  used inputField variable to set the content of the dynamically created button
    historySearchBtn.text(inputField);
    historySearchBtn.attr("data-name", )
    historySearchBtn.addClass("SearchBtn rounded-lg ")
    $("#history").append(historySearchBtn);

  });

  // viewSearch()
});

function viewSearch(){
  let search = $(this).attr("data-name");
  let queryURl = "http://api.openweathermap.org/data/2.5/weather?q=" + search + "&APPID=" + apiKey;
  
  $.ajax({
    url: queryURl,
    method: "GET",

  }).then(function (response) {

   
  })

}
$(document).on('click','.SearchBtn' ,viewSearch)



// call to retrieve 5days forecast

let queryUrl2 =
  "http://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&cnt=5&appid=ad466c2bde80cc851c862d4fa5cea60c";

console.log(queryUrl2);

$.ajax({
  url: queryUrl2,
  method: "GET",
});
