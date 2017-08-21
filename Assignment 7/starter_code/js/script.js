$(document).ready(function(){
	$("p.sub-blogs").hide();
	$(".read-less").hide();

	$(".read-more").click(readMore);
	$(".read-less").click(readLess);

	function readMore(){
		$(this).parent().find("p").slideDown(function(){
		$(this).parent().find(".read-less").show();
		$(this).parent().find(".read-more").hide();
      });
 
  }
  
  
	function readLess(){
		$(this).parent().find("p.sub-blogs").slideUp(function(){
		$(this).parent().find(".read-more").show();
		$(this).parent().find(".read-less").hide();
      });
   
  
  }
  });
});