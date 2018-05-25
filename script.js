//  ON DEMARRE JQUERY  //

$(function(){



//  RECUPERER LA CARTE DE CAHORS  //

var map = L.map('mapid', { zoomControl: false }).setView([44.4475229, 1.441989], 13);

new L.Control.Zoom({ position: 'topright' }).addTo(map);


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



//  ON PARSE LE FICHIER JSON EN JAVA SCRIPT  //

$.getJSON('places.json', function(cats) {    

	for (var i = 0; i < cats.length; i++)
	{
		// console.log(cats[i].name);
	$(".sidebar-brand").append($("<ul>" + cats[i].name + "</ul>"));

	


		var children = cats[i].children;

		for (var j = 0; j < children.length; j++) 
		{

		$(".sidebar-brand").append($("<li>" + children[j].name + "</li>"));





			var places = children[j].places;

			for( var k = 0; k < places.length; k++)
			{
				// console.log(places[k].lat);
				// console.log(places[k].lon);
				console.log(places[k].name);

				L.marker([places[k].lat, places[k].lon])
				.bindPopup('<h3>' + places[k].name + '</h3> <p>' + places[k].description + '</p>')
				.addTo(map);

				 $('.sidebar-brand').append($("<li>" + places[k].name + "</li>"));




			}
	
		}	
	}

			  $('.content').append($("<li>" + places[k].name + "</li>"));	

});

		
//  FONCTION POUR LE MENU TOGGLE  //

$("#menu-toggle").click(function(e)
{
	e.preventDefault();
	$("#wrapper").toggleClass("toggled");
});



//  FONCTION QUI CACHE LES SOUS CATÉGORIES À L'OUVERTURE DU MENU TOGGLE  //

$('#menu-toggle').click(function(){
			$('.sidebar-brand li').hide()
   });



// $('#menu-toggle').click(function(){
// 	$('.content li').hide()
// });







//  FONCTION QUI AFFICHE LES SOUS CATÉGORIE AU CLICK DE LA CATÉGORIE  //

$('.sidebar-brand').click(function(){
	$('.sidebar-brand li').show(100)
	$('.sidebar-brand li').show('show');

});
  


// $('.content').click(function(){
// 	$('.content li').show(100)
// 	$('.content li').show('show');
// });







//  FONCTION QUI CACHE LES SOUS CATÉGORIES  //

$('.sidebar-brand').click(function(){	
		$('.sidebar-brand li').hide()
		$('sidebar-brand li').hide('slow');	
});




})