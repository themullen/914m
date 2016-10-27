function getHoursAndMinutesFromTimeString(hopelessTime) {
    var timeAndOrdinal = hopelessTime.split(' ');
    var amOrPm = timeAndOrdinal[1];
    var time = timeAndOrdinal[0].split(':').map(Number);
    if (time[0] == 12) {
        time[0] = (amOrPm == 'am') ? 0 : 12;
    } else {
        if (amOrPm == 'pm') {
            time[0] += 12;
        }
    }
    time = time.map(String);
    for (var i = 0; i < time.length; i++) {
        time[i] = (time[i].length == 1) ? '0' + time[i] : '' + time[i];
    }
    return time;
}
function loadWeather(e, t) {
    $.simpleWeather({
        location: e,
        woeid: t,
        unit: "C",
        success: function (e) {
            sunriseTime = getHoursAndMinutesFromTimeString('12:03 am');
            sunsetTime = getHoursAndMinutesFromTimeString(e.sunset);
            temp = "<p>" + e.temp + "&deg;C</p>",
                wcode = '<object class="icon" data="assets/img/svg/weathericons/' + e.code + '.svg">',
                cur = "<p>" + e.currently + "</p>",
                winds = "<p>" + e.wind.speed + e.units.speed + "</p>",
                windd = "<p>" + e.wind.direction + "</p>",
                sunu = "<p>" + sunriseTime.join(':') + "</p>",
                sund = "<p>" + sunsetTime.join(':') + "</p>",
                $(".temperature").html(temp),
                $(".climate_bg").html(wcode),
                $(".windspeed").html(winds),
                $(".direction").html(windd),
                $(".currently").html(cur),
                $(".sun-up").html(sunu),
                $(".sun-down").html(sund)
        },
        error: function (e) {
            $(".error").html("<p>" + e + "</p>")
        }
    })
}
loadWeather("Fort William, Scotland"),
    $(document).ready(function () {
        setInterval(loadWeather, 1e4)
    });