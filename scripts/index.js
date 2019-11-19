$(document).ready(function() {

  $('.sign-up-btn').click(function() {
    $('.main-content').load("views/sign-up.html");
  }); 

  $('.sign-in-btn').click(function() {
    $('.main-content').load("views/sign-in.html");
  })
});
