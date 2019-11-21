// Back to Top button animation
$('.gototop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
});


// Show/hide menu //

$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("show");
      $(".nav-list").toggleClass("show");
      $("body").toggleClass("show");
    });
  });
  btn.addEventListener('mousedown', (e)=> {e.preventDefault});
  