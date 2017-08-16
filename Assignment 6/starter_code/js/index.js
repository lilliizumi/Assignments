$(document).ready(function(){

var cities = ["NYC", "SF","LA", "ATX", "SYD"]; 

console.log(cities);
console.log(cities[0]);

var numberOfCities = cities.length; 

for (counter = 0; counter < cities.length; counter++){ 
    $("select").append("<option>"+cities[counter]+"</option>");
    $("body").attr('background-image', 'url(images/citipix_skyline.jpg)');
	$("#city-type").change(mainFunction);

		function mainFunction(){
			var c = cityType();
			event.preventDefault();
			changeBackground(c);
		}

		function cityType(){
			return $("#city-type").val();
		}	
		
		// responsible for changing background, based on c
		function changeBackground(c){ 
		
			// if user inputs "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
			if ( c == "New York" || c == "New York City" || c == "NYC" ){
				console.log("c is either New York or New York City or NYC")
			 	$("body").attr('class', 'nyc');
			 }
			

			// if user inputs "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg

			else if ( c == "San Francisco" || c == "SF" || c == "Bay Area" ){
				console.log("c is either San Francisco or SF or Bay Area")
				$("body").attr('class', 'sf');
			 }
			// if user inputs "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg

			else if ( c == "Los Angeles" || c == "LA" || c == "LAX" ){
				console.log("c is either Los Angeles or LA or LAX")
			 	$("body").attr('class', 'la');
			 }
			 // if user inputs "Austin" or "ATX" make the background of the page austin.jpg

			else if ( c == "Austin" || c == "ATX" ){
				console.log("c is either Austing or ATX")
			 	$("body").attr('class', 'austin');
			 }

			 // if user imputs "Sydney" or "SYD" make the background of the page sydney.jpg

			else if( c == "Sydney" || c == "SYD" ){
				console.log("c is either Sydney or SYD")
			 	$("body").attr('class', 'sydney');
			 }
		}

}

});



