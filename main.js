$(document).ready(function($) {
  console.log('ready!')
  //populate the color-well with divs on page load because
  //who wants to hand code 100 divs??
    for (i=0; i<100; i++){
      $('.color-well').append("<div class='color-box'></div>")
    }

  //define node object constructor
  function node(data, next){
    this.data = data;
    this.next = null;
  }

  //define color array
  var colorArray = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'yellow']

  //construct a new linked list 
  function linkedList(){
    this._length = 0;
    this.head = null;
  }

  //construct a new linked list prototype
  linkedList.prototype.add = function(val){
    var node = new node(val),
      currentNode = this.head;

  }

  //fill in the colors of the color boxes
  if ($('div').hasClass('color-box')){

  }


  //utilize a circularly linked list to establish color sequence for click event
  //initialize node object
  //build linked list as a multidimensional array with initial 7 colors
  //on click, move to next node in list, thereby changing the color of the div
  //on hover, show the data (color) value of the current node

});//end wrapper function
