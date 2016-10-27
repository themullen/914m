loadWeather("Fort William, Scotland");
$(document).ready(function(){
    setInterval(loadWeather,10000);
});
function loadWeather(location, woeid){
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'C',
        success: function(weather){
            temp = '<p>'+weather.temp + '&deg;'+'C'+'</p>';
            wcode = '<object class="icon" data="assets/img/svg/weathericons/'+weather.code+'.svg">';
            cur = '<p>'+weather.currently+'</p>';
            winds = '<p>'+weather.wind.speed+weather.units.speed+'</p>';
            windd = '<p>'+weather.wind.direction+'</p>';
            sunu= '<p>'+weather.sunrise+'</p>';
            sund= '<p>'+weather.sunset+'</p>';
            visi= '<p>'+weather.visibility+weather.units.distance+'</p>';
            $(".temperature").html(temp);
            $(".climate_bg").html(wcode);
            $(".windspeed").html(winds);
            $(".direction").html(windd);
            $(".currently").html(cur);
            $(".sun-up").html(sunu);
            $(".sun-down").html(sund);
            $(".visibility").html(visi);

        },
        error: function(error){
            $(".error").html('<p>'+error+'</p>');
        }
    });
}
