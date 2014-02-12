$(document).ready(function() {
  // $('#open').on('click', function(){
  //   $('#open').text('Close Sesame <<');
  //   $('#nav-menu').show();
  //   $('nav').css('background','#CCCCCC');
  // });
$('.open').on('click', function(){
    $('#open-menu').toggle();
    $('#close-menu').toggle();
  });
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
});