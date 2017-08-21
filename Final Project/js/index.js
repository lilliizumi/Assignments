$("document").ready(function() {
  $("p.sub-blogs").hide();  
  $(".read-less").hide();
  $(".read-more").click(readMore);
  $(".read-less").click(readLess);
  $("#blog").scroll(parallaxScroll);


  function readMore(){
        $(this).parent().find("p.sub-blogs").slideDown(function(){
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
  
  function parallaxScroll (){
    s = $("@blog").scrollTop();
    $("#blog img").css("-webkit-transform", "translateY(" + (s/3) + "px)");

  }

  });