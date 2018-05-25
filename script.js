<!-- Menu Toggle Script -->
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

var map = L.map('mapid', { zoomControl: false }).setView([44.4465, 1.4628], 13);
new L.Control.Zoom({ position: 'topright' }).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: ['a', 'b', 'c']
}).addTo(map);


var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


$.getJSON('places.json', function(cats) {
    for (var i = 0; i < cats.length; i++) {
        $(".sidebar-nav").append($("<li>" + cats[i].name + "</li>"));
        var children = cats[i].children;

        for (var j = 0; j < children.length; j++) {
            $(".sidebar-nav").append($("<li>" + children[j].name + "</li>"));
            var places = children[j].places;

            for (var k = 0; k < places.length; k++) {
                var name = places[k].name;
                //console.log(places[k].lat);
                //console.log(places[k].lon);
                //console.log(places[j].name);
                //console.log(cats[i].name);
                console.log(places[k].name);


                // L.marker([places[k].lat, places[k].lon])
                //     .bindPopup(places[k].name)
                //     .addTo(map);
            }
        }


    }
});

function marker() {
    var marker = $.getJSON("places.json", function(cats) {
        for (var i = 0; i < cats.length; i++) {
            var children = cats[i].children;

            for (var j = 0; j < children.length; j++) {

                var places = children[j].places;

                for (var k = 0; k < places.length; k++) {

                    //console.log(places[k].lat);
                    //console.log(places[k].lon);
                    //console.log(places[j].name);
                    console.log("success");





                    L.marker([places[k].lat, places[k].lon])
                        .bindPopup(places[k].name)
                        .addTo(map);

                }
            }


        }
    });

}