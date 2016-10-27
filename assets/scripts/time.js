function showTheTime() {
  $('.local-time').each(function() {
    var timeZone = $(this).data('tz');
    var now = moment().tz(timeZone).format('HH:mm');
    $(this).html( now );
  });
};

showTheTime(); // for the first load
setInterval(showTheTime, 250); // update it periodically
