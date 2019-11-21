$(document).ready(function() {

  $('.sign-up-btn').click(function() {
    $('.main-content').load("views/sign-up.html");
  }); 

  $('.sign-in-btn').click(function() {
    $('.main-content').load("views/sign-in.html");
  })

  $("#signin-form").submit(function() {
    $(".main-content").load("views/create-list-title.html")
  })

  // $('#signup-next-btn').click(function() {
  //   $('.main-content').load("views/create-list-title.html")
  // })
   
  $('.create-list-btn').click(function() {
    $(".main-content").load("views/create-list-title.html");
  })

  $("#create-list-title-form").submit(function(event) {
    event.preventDefault();
    createListTitle();
    $(".main-content").load("views/create-list-items.html")
  });
  
  $("#add-item-form").submit(function(event) {
    event.preventDefault();
    // addItem();
  });

});
