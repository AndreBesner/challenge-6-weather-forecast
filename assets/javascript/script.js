$(document).ready(function(){

    let cityName = $("#city-name");
    $("#city-name-input").submit(function (e) { 
        e.preventDefault();
        let city = $("#city-name").val().trim();
        console.log(city)
        let key = "userText" + Date.now();
        localStorage.setItem(key, city);
        cityName.val("");

    });

})