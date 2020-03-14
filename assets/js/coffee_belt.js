/*
All possible options and callback functions.

$('.scalize').scalize({

  // width/height

  width : 0,

  height : 0,

  // selector of markers

  selector :'.item-point',

  // circle, square, content

  styleSelector :'circle',

  // pulse, pulse2, marker

  animationSelector :'',

  // custom animation classes

  animationPopoverIn :'',

  animationPopoverOut :'',

  // functions

  onInit :null,

  getSelectorElement :null,

  getValueRemove :null

});
*/




$(document).ready(function(){
    $('.scalize').scalize({
        width : 800,
        height : 500,
        animationSelector :'pulse',
    });
});
