
//RECUPERER LA CARTE DE CAHORS

var map = L.map('mapid', { zoomControl: false }).setView([44.4475229, 1.441989], 13);

new L.Control.Zoom({ position: 'topright' }).addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//ON PARSE LE FICHIER JSON EN JAVA SCRIPT

$.getJSON('places.json', function(cats) {    

	for (var i = 0; i < cats.length; i++)
	{
		console.log(cats[i].name);


		var children = cats[i].children;

		for (var j = 0; j < children.length; j++) 
		{


			var places = children[j].places;

			for( var k = 0; k < places.length; k++)
			{
				// console.log(places[k].lat);
				// console.log(places[k].lon);

				L.marker([places[k].lat, places[k].lon])
				.bindPopup('<h3>' + places[k].name + '</h3> <p>' + places[k].description + '</p>')
				.addTo(map);
			}

		var menu = children[j];
		document.getElementByTagName('sidebar-brand').innerHTML = menu;	
		}		
	}

});






//SCRIPT POUR LE MENU TOGGLE

$("#menu-toggle").click(function(e)
{
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});


//FERMETURE DU MENU TOGGLE

$('#sidebar-wrapper a').on("click", function(){
	$('#sidebar-wrapper').collapse('hide');
});