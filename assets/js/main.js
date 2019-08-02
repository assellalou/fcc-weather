$(document).ready(function () {
    var lat;
    var long;
    const bg = document.getElementById('main');
    const err = document.getElementById("Err");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + ''

            $.getJSON(api, function (res) {
                var celsius = res.main.temp;
                var farenheit = (celsius * 1.8) + 32;
                var location = res.name;

                $('.weather-location').html(location);
                $('.temp').html(Math.floor(celsius));
                $('.weather-description').html(res.weather[0].description);
                $('.weatherType').attr('id', res.weather[0].main);
                $('.row2').on('click', function () {
                    if ($('.temp').html() == (Math.floor(celsius))) {
                        $('.temp').html(Math.floor(farenheit));
                        $('.temp-type').html('°F');

                    } else {
                        $('.temp').html(Math.floor(celsius));
                        $('.temp-type').html('°C');
                    }
                });
                var icons = new Skycons({
                    "color": "white"
                });

                icons.set("Clear", Skycons.CLEAR_DAY);
                icons.set("Clear-night", Skycons.CLEAR_NIGHT);
                icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
                icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
                icons.set("Clouds", Skycons.CLOUDY);
                icons.set("Rain", Skycons.RAIN);
                icons.set("Sleet", Skycons.SLEET);
                icons.set("Snow", Skycons.SNOW);
                icons.set("Wind", Skycons.WIND);
                icons.set("Fog", Skycons.FOG);
                icons.play();
                console.log(res.name);
                if(res.name == "Shuzenji"){
                  err.style.display = "flex";
                  bg.style.display = "none";
                }
                //console.log(res.weather[0].main);
                if(res.weather[0].main == "Clear"){
                    bg.style.background = "url('./assets/img/Clear.jpg')";
                    icons.color = "#dfefea";
                    bg.style.color = "#dfefea";
                }
                else if(res.weather[0].main == "Clear-night"){
                    bg.style.background = "url('./assets/img/Clear-night.jpg')";
                    icons.color = "#7F819C";
                    bg.style.color = "#7F819C";
                }
                else if(res.weather[0].main == "Partly-cloudy-day"){
                    bg.style.background = "url('./assets/img/Partly-cloudy-day.jpg')";
                    icons.color = "#ADACA9";
                    bg.style.color = "#ADACA9";
                }
                else if(res.weather[0].main == "Partly-cloudy-night"){
                    bg.style.background = "url('./assets/img/Partly-cloudy-night.jpg')";
                    icons.color = "#4a027c";
                    bg.style.color = "#4a027c";
                }
                else if(res.weather[0].main == "Clouds"){
                    bg.style.background = "url('./assets/img/breeze.jpg')";
                    icons.color = "#56D1BB";
                    bg.style.color = "#56D1BB";
                }
                else if(res.weather[0].main == "Rain"){
                    bg.style.background = "url('./assets/img/Rain.jpg')";
                    icons.color = "#5D7274";
                    bg.style.color = "#5D7274";
                }
                else if(res.weather[0].main == "Sleet"){
                    bg.style.background = "url('./assets/img/Sleet.jpg')";
                    icons.color = "#9D9FA7";
                    bg.style.color = "#9D9FA7";
                }
                else if(res.weather[0].main == "Snow"){
                    bg.style.background = "url('./assets/img/Snow.jpg')";
                    icons.color = "#DBFFFF";
                    bg.style.color = "#DBFFFF";
                }
                else if(res.weather[0].main == "Wind"){
                    bg.style.background = "url('./assets/img/Wind.jpg')";
                    icons.color = "#CCF3FF";
                    bg.style.color = "#CCF3FF";
                }
                else if(res.weather[0].main == "Fog" || "mist"){
                    bg.style.background = "url('./assets/img/Fog.jpg')";
                    icons.color = "#B9C1B9";
                    bg.style.color = "#B9C1B9";
                }

            });
        });
    }
});
