

function createMap() {
    var map = L.map('mapUS').setView([37.0902, -95.7129], 4);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var lat1 = getRandomInRange(30, 35, 3);
    var lng1 = getRandomInRange(-90, -100, 3);

    var lat2 = getRandomInRange(30, 35, 3);
    var lng2 = getRandomInRange(-90, -100, 3);

    var lat3 = getRandomInRange(30, 35, 3);
    var lng3 = getRandomInRange(-90, -100, 3);

    marker('m1', 'l1', lat1, lng1, map);
    marker('m2', 'l2', lat2, lng2, map);
    marker('m3', 'l3', lat3, lng3, map);

}


function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

function marker(m, l, lat, lng, map) {

    var marker = L.marker([lat, lng]).addTo(map);
    
    document.getElementById(m).innerText += `${lat}, ${lng}`;
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
        .then(response => response.json())
        .then(data => {
            document.getElementById(l).innerText += `${data.locality}`;
        });
}

        
window.onload = createMap;