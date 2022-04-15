 function getDistance(sourceLat, sourcelon, lat, lng) {
    var lat2 = lat;
    var lon2 = lng;

    var R = 6371;
    // km
    var x1 = toRad(lat2 - sourceLat);
    var dLat = x1;
    var x2 = toRad(lon2 - sourcelon);
    var dLon = x2;
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(sourceLat)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return Math.round(d);
}
