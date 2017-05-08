$(document).ready(function($) {
  console.log('ready!')
  //populate the color-well with divs on page load because
  //who wants to hand code 100 divs??
    for (i=0; i<100; i++){
      $('.color-well').append("<div class='color-box'></div>")
    }


  //utilize a circularly linked list to establish color sequence for click event
  //initialize node object
  //build linked list as a multidimensional array with initial 7 colors
  //on click, move to next next in list, thereby changing the color of the div
  //on hover, show the data (color) value of the current node

});//end wrapper function
