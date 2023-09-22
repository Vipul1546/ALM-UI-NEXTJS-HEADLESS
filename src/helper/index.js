
export const getDuration = (d) => {
    d = Number(d);
    var h = Math.floor(d / 360);
    var m = Math.floor(d % 360 / 60);
    var s = Math.floor(d % 360 % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay;
}