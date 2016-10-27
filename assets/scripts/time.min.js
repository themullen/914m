function showTheTime() {
    $(".local-time").each(function () {
        var t = $(this).data("tz"), e = moment().tz(t).format("HH:mm");
        $(this).html(e)

        var sunrise = new Date(2016, 1, 1, 8, 22) / 1000;
        var sunset = new Date(2016, 1, 1, 18, 59) / 1000;
        var timeNow = new Date(2016, 1, 1, moment().tz(t).format("HH"), moment().tz(t).format("mm")) / 1000;

        var minutesOfSunTime = Math.abs(sunset - sunrise) / 60;
        var minutesWeAreAt = Math.abs(timeNow - sunrise) / 60;
        var minutesLeft = Math.abs(sunset - timeNow) / 60;
        var onePercent = (minutesOfSunTime / 100);
        var percentageThroughTheDay = minutesWeAreAt / onePercent;
        var degrees = percentageThroughTheDay / (100 / 180);
        if (degrees < 180) {
            $('.sunmoon .sun-animation, .sun-symbol-path').css('transform', 'rotate(' + degrees + 'deg)');
        } else {
            $('.sunmoon .sun-animation, .sun-symbol-path').css({'transform':'rotate(181deg)','opacity': 0});
        }
    })
}
showTheTime(), setInterval(showTheTime, 250);