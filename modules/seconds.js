
var seconds = function getSeconds(uptime) {

    var h = Math.floor(uptime / 3600);
    var m = Math.floor(uptime % 3600 / 60);
    var s = Math.floor(uptime % 3600 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return 'Uptime: ' + hDisplay + mDisplay + sDisplay;
}

exports.print = seconds;

