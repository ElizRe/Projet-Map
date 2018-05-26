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
        $(".sidebar-nav").attr('id', 'one').append($("<ul>" + cats[i].name + "</li>"));
        var children = cats[i].children;

        for (var j = 0; j < children.length; j++) {
            $(".sidebar-nav").attr('id', 'two').append($("<li>" + children[j].name + "</li>"));
            var places = children[j].places;

            for (var k = 0; k < places.length; k++) {
                $(".sidebar-nav").attr('id', 'three').append($("<li>" + places[k].name + "</li>"));
                //console.log(places[k].lat);
                //console.log(places[k].lon);
                //console.log(places[j].name);
                //console.log(cats[i].name);
                //console.log(places[k].name);

                // L.marker([places[k].lat, places[k].lon])
                //     .bindPopup(places[k].name)
                //     .addTo(map);
            }
        };

        function hasClass(elem, className) {
            return elem.className.split(' ').indexOf(className) > -1;
        }

        document.addEventListener('click', function(e) {
            if (hasClass(e.target, 'three')) {
                var marker = $.getJSON("places.json", function(cats) {
                    for (var i = 0; i < cats.length; i++) {
                        var children = cats[i].children;

                        for (var j = 0; j < children.length; j++) {

                            var places = children[j].places;

                            for (var k = 0; k < places.length; k++) {

                                L.marker([places[k].lat, places[k].lon])
                                    .bindPopup(places[k].name)
                                    .addTo(map);

                            }
                        }
                    }
                });
            } else if (hasClass(e.target, 'test')) {
                // .test clicked
                // Do your other thing
            }
        }, false);


    }
});

function marker() {
    var marker = $.getJSON("places.json", function(cats) {
        for (var i = 0; i < cats.length; i++) {
            var children = cats[i].children;

            for (var j = 0; j < children.length; j++) {

                var places = children[j].places;

                for (var k = 0; k < places.length; k++) {

                    L.marker([places[k].lat, places[k].lon])
                        .bindPopup(places[k].name)
                        .addTo(map);

                }
            }
        }
    });

}
// $.getJSON( "places.json", function( data ) {
//   var items = [];
//   $.each( data, function( key, val ) {
//     items.push( "<li id='" + key + "'>" + val + "</li>" );
//   });

//   $( "<ul/>", {
//     "class": "my-new-list",
//     html: items.join( "" )
//   }).appendTo( "body" );
// });