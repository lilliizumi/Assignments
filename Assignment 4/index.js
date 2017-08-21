$(document).ready(function(){

  /** Event listeners go here **/

	$("p").hide();
	$(".read-less").hide();
	$("#first-read-more-button").click(firstReadMore);
	$("#first-read-more-button").click(firstReadMore);
	$("#first-read-more-button").click(firstReadMore);
	$("#first-read-less-button").click(slideUpFirst);
	$("#first-read-less-button").click(hideFirstRL);
	$("#first-read-less-button").click(showFirstRM);
	$("#second-read-more-button").click(secondReadMore);
	$("#second-read-more-button").click(secondReadMore);
	$("#second-read-more-button").click(secondReadMore);
	$("#second-read-less-button").click(hideSecondRL);
	$("#second-read-less-button").click(showSecondRM);
	$("#second-read-less-button").click(showSecondRL);
	$("#second-read-less-button").click(slideUpSecond);


	// function slideDownFirst(){
	// 	event.preventDefault();
	// 	$("#first-read-more-text").slideDown();
	// }

	// function hideFirst(){
	// 	event.preventDefault();
	// 	$("#first-read-more-button").hide();
	// }

	// function showFirst(){
	// 	event.preventDefault();
	// 	$("#first-read-less-button").show();
	// }

	function firstReadMore(){
		event.preventDefault();
		$("#first-read-more-text").slideDown();
		$("#first-read-more-button").hide();
		$("#first-read-less-button").show();

	}

	function hideFirstRL(){
		$("#first-read-less-button").slideUp();
	}

	function showFirstRM(){
		$("#first-read-more-button").show();
	}


	function slideUpFirst(){
		event.preventDefault();
		$("#first-read-more-text").slideUp();

	}

	function secondReadMore(){
		event.preventDefault();
		$("#second-read-more-text").slideDown();
		$("#second-read-more-button").hide();
		$("#second-read-less-button").show();
	}

	function slideUpSecond(){
		event.preventDefault();
		$("#second-read-more-text").slideUp();
	}

	function hideSecondRL(){
		event.preventDefault();
		$("#second-read-less-button").slideUp();
	}

	function showSecondRM(){
		event.preventDefault();
		$("#second-read-more-button").show();
	}

	function showSecondRL(){
		event.preventDefault();
		$("#second-read-less-button").show();
	}

	function slideUpSecond(){
		event.preventDefault();
		$("#second-read-more-text").slideUp();
	}

});