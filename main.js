$(document).ready(function($) {
  //check that jquery is loaded correctly
  console.log('ready!')

  //define color array
  var colorArray = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow']

  //populate the color-well with divs on page load because
  //who wants to hand code 100 divs??
    for (i=0; i<100; i++){
      $('.color-well').append("<div class='color-box'></div>");
    }

      //fill in color of boxes
    var colorIndex = 1;
    $('.color-box').each(function(){
      $(this).css('background-color', colorArray[colorIndex]);
      colorIndex++;      
    });

  //utilize a circularly linked list to establish color sequence for click event
  //initialize node object
  //build linked list as a multidimensional array with initial 7 colors
  //on click, move to next node in list, thereby changing the color of the div
  //on hover, show the data (color) value of the current node

});//end wrapper function
