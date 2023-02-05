$(document).ready(function () {
  // let currentTime = moment("#city").format()
  let city = $("#search-input").val();
  let tempEl = $("#temperature");
  let cityEl = $("#city");
  let dateEl = $("#date");
  let iconEl = $("#weather-icon");
  let apiKey = "ad466c2bde80cc851c862d4fa5cea60c";
  //      let inputField = $("#search-input");
  //      let input = inputField.value;
  //  console.log(input);
  //   let queryUrl1 =
  //     "http://api.openweathermap.org/data/2.5/weather?q=" +
  //     input +
  //     "&cnt=10&units=imperial&APPID=" +
  //     apiKey;

  let queryUrl2 =
    "http://api.openweathermap.org/data/2.5/forecast?lat=51.5085&lon=-0.1257&appid=ad466c2bde80cc851c862d4fa5cea60c";

    $("#search-button").click(function () {
        console.log("Searched Clicked")
        let inputField = $("#search-input").val();
        console.log(inputField);
    
    
        let queryUrl1 =
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        inputField +
        "&cnt=10&units=imperial&APPID=" +
        apiKey;
    
    
        $.ajax({
          url: queryUrl1,
          method: "GET",
        }).then(function (response) {
          console.log(response);
        });
      });
    
});
