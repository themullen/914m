function showTheTime() {
    if (window.sunriseTime) {
        $(".local-time").each(function () {
            var t = $(this).data("tz"), e = moment().tz(t).format("HH:mm");
            $(this).html(e)

            var sunrise = new Date(2016, 1, 1, window.sunriseTime[0], window.sunriseTime[1]) / 1000;
            var sunset = new Date(2016, 1, 1, window.sunsetTime[0], window.sunsetTime[1]) / 1000;
            var timeNow = new Date(2016, 1, 1, moment().tz(t).format("HH"), moment().tz(t).format("mm")) / 1000;

            var minutesOfSunTime = (sunset - sunrise) / 60;
            var minutesWeAreAt = (timeNow - sunrise) / 60;
            var minutesLeft = (sunset - timeNow) / 60;
            var onePercent = (minutesOfSunTime / 100);
            var percentageThroughTheDay = minutesWeAreAt / onePercent;
            var degrees = percentageThroughTheDay / (100 / 180);
            if (degrees > 0) {
                if (degrees < 180) {
                    $('.sunmoon .sun-animation, .sun-symbol-path').css({'transform': 'rotate(' + degrees + 'deg)', 'opacity': 1});
                } else {
                    $('.sunmoon .sun-animation, .sun-symbol-path').css({'transform': 'rotate(181deg)', 'opacity': 0});
                }
            }
        })
    }
}
showTheTime(), setInterval(showTheTime, 250);