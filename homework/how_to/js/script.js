//variable to track the number of totalstepsvar
var totalsteps=5;

//track which step should be displayed
var currentstep=0;

//store the html of each slide
var currentslide;


$(function(){
$('.totalsteps').html(totalsteps);

//hide the steps
$('.steps li, .end, .controls, #prev').hide();

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

if(currentstep ==1){
  $('#prev').hide();
}


});
