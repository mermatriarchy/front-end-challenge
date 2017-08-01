$(document).ready(function($) {
  //check that jquery is loaded correctly
  console.log('ready!')

  ////// TABLE OF CONTENTS /////
  // lines 10-14: data structure
  // lines 23-81: function definitions
  // lines 82-85: function invocation

  //define color array
 var colorArray = ['black','blue','cyan','green','magenta','red','yellow']

  //populate the color-well with divs on page load because
  //who wants to hand code 100 divs??
  function populateColorWell(){
    for (i=0; i<100; i++){
      $('.color-well').append("<div class='color-box'></div>");
    }
  }
    
  //helper function - increment indices on the colorArray
  function nextIndex(colorIndex){
    colorIndex++; 
    //reset colorIndex variable when it gets to the end of the array indices
    if (colorIndex === colorArray.length){
        colorIndex = 0;
        return colorIndex;
      }    
    return colorIndex; 
  }

  //fill in color of boxes
  function colorFill(){
      var colorIndex = 0;

      $('.color-box').each(function(){
      //set background color and append hidden text with color name
      //add class to point back to the index for click function
        var color = colorArray[colorIndex];
        $(this).css('background-color', color)
        .append("<p class='color-name arrayIndex-" + colorIndex +"'>" + color + "</p>")
      //move to next array index on each box
        colorIndex = nextIndex(colorIndex);   
      });
  }

    //cycle through the colors/colorArray on click
  function nextColor(){
    $('.color-box').click(function(){
      //get the index of the color from the colorIndex class name
      //convert string to integer
      var colorIndex = parseInt($(this).children().attr('class').match(/\d+/)[0])
      //increment colorIndex to match the index of the next item in colorArray
      colorIndex = nextIndex(colorIndex); 
      //set new color to the value of next key in colorArray
      var nextColor = colorArray[colorIndex]; 
      //remove element with current color to replace it with an element containing
      //the next color
      $(this).children().remove();
      //update background color and text on div
      //replace text & color index classname in p tag
      $(this).css('background-color', nextColor)
        .append("<p class='color-name arrayIndex-" + colorIndex +"'>" + nextColor + "</p>");
    });
  }

  populateColorWell();
  colorFill();
  nextColor();

});//end wrapper function
