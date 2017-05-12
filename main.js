$(document).ready(function($) {
  //check that jquery is loaded correctly
  console.log('ready!')

  //define color array
 var colorArray = [{color:'black', next:'blue'}, {color:'blue', next:'cyan'}, 
  {color:'cyan', next:'green'}, {color:'green', next:'magenta'}, {color:'magenta', next:'red'}, 
  {color:'red', next: 'yellow'}, {color:'yellow', next:'black'}]

  //populate the color-well with divs on page load because
  //who wants to hand code 100 divs??
    for (i=0; i<100; i++){
      $('.color-well').append("<div class='color-box'></div>");
    }

    //fill in color of boxes
    var colorIndex = 0;
    $('.color-box').each(function(){
      //set background color and append hidden text with color name
      $(this).css('background-color', colorArray[colorIndex]['color'])
      .append("<p class='color-name'>" + colorArray[colorIndex]['color'] + "</p>")
      //move to next array index on each box
      colorIndex++;  
      //reset colorIndex variable when it gets to the end of the array indices
      if (colorIndex === colorArray.length){
        colorIndex = 0;
      }    
    });


    //show color name on hover
    $('.color-box').hover(function(){
      //show color name
      $(this).children().show();
    }, 
      function(){
      //hide color name
        $(this).children().hide();;
      }
    )
  //utilize a circularly linked list to establish color sequence for click event
  //initialize node object
  //build linked list as a multidimensional array with initial 7 colors
  //on click, move to next node in list, thereby changing the color of the div
  //on hover, show the data (color) value of the current node

});//end wrapper function
