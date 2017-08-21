//let's create an array of our city names
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
$(document).ready(function() {
  //we loop through our array
  for(i=0;i<cities.length;i++) {
    //each time through the loop, let's append an <option> element to our <select>
    //let's use the value of our index to get the value of the current array item 
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }

  //detect when the <select> element changes  - using the event delegation like we saw in the todo sample solution
  $('form').on('change', '#city-type',function(){
    //retrieve value that the user enetered
    var city = $('#city-type').val();

    //let's go through our conditions to set the background!
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});