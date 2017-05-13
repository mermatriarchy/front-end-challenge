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
      //add class to point back to the index for click function
      
      var color = colorArray[colorIndex]['color']
      $(this).css('background-color', color)
      .append("<p class='color-name arrayIndex-" + colorIndex +"'>" + color + "</p>")
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
        $(this).children().hide();
      }
    )

    $('.color-box').click(function(){
      //get the index of the color from the colorIndex class name
      //var findColorIndex = $(this).children().attr('class').match(/\d+/)[0]
      //convert string to integer
      var colorIndex = parseInt($(this).children().attr('class').match(/\d+/)[0])
      //set new color to the value of next key in colorArray
      var nextColor = colorArray[colorIndex]['next']
      //increment colorIndex to match the index of the next item in colorArray
      colorIndex++;  
      //reset colorIndex variable when it gets to the end of the array indices
      if (colorIndex === colorArray.length){
        colorIndex = 0;
      }    
      //remove element with current color to replace it with an element containing
      //the next color
      $(this).children().remove();
      //update background color and text on div
      //replace text & color index classname in p tag
      $(this).css('background-color', nextColor)
      .append("<p class='color-name arrayIndex-" + colorIndex +"'>" + nextColor + "</p>");
    });
  //utilize a circularly linked list to establish color sequence for click event
  //initialize node object
  //build linked list as a multidimensional array with initial 7 colors
  //on click, move to next node in list, thereby changing the color of the div
  //on hover, show the data (color) value of the current node

});//end wrapper function
