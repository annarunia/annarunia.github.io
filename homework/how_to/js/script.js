//variable to track the number of totalsteps
var totalsteps = 5;

//track which step should be displayed
var currentstep = 0;

//store the html of each slide
var currentslide;

// Initial function gets called when the page first loads
$(function(){
    // Fill the number of steps in the title.
$('.totalsteps').html(totalsteps);

  //hide all the steps and controls. You can specify multiple things to hide by separating them by a comma.
$('.steps li, .end, .controls, #halloween, .eng,  #prev').hide();
});



//click events
$('#begin').on('click', function(){
// do something here

$('.welcome').hide();

currentstep = 1;
currentslide = $('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('.controls').fadeIn(1000);
$('h2').html('Step' + currentstep);

});


//Click on next
$('#next').on('click', function(){
if(currentstep != totalsteps){
$(currentslide).hide();
currentstep++;
currentslide = $('#step' + currentstep);
$(currentslide).fadeIn(1000);
$('h2').html('Step' + currentstep);
}


if(currentstep == totalsteps){
$('#next').hide();
}

if(currentstep !=1){
  $('#prev').show();
}

// Click on prev
$('#prev').on('click' , function(){

  $(currentslide).hide();
  currentstep--;
  currentslide = $('#step' + currentstep);
  $(currentslide).fadeIn(1000);
  $('h2').html('Step ' + currentstep);
  //
  if(currentstep != totalsteps){
    $('#next').show();
  }
  // if the current step is 1, we are on the first slide so.... we hide the previous button
  if(currentstep == 1) {
    $('#prev').hide();
  }
});


$('#finish').on('click', function(){
  //hide everything again
$('.steps li,  .controls, #prev').hide();
  $('.end').fadeIn(1000);
});



$('#finish').on('click', function(){
$('#maintitle').html('Happy Halloween!');
});






//$('.from img').on('mousover'), function(){
//  img = $(this).attr('scr');
//  console.log(img);
//  $('to').html('<img scr="'')
//}

$('#maintitle').on('mouseover', function(){
  $(this).css('color', 'orange');
});

$('#maintitle').on('mouseleave', function(){
  $(this).css('color', 'black');
});

$('#end').on('click', function(){
  location.reload();
});


$('#finish').on('click', function(){
$('#end').fadeIn(70000);

});

$('p').on('mouseover', function(){
  $(this).css('color', 'red');
});

$('p').on('mouseleave', function(){
  $(this).css('color', 'black');
});



$('#scary').on('mouseover', function(){
$('#scary').fadeOut(2000);
$('#eng').fadeIn(1000);

});




});
