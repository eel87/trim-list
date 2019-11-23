$(document).ready(function() {

  $(window).FormData = {
    listTitle: '',
    dueDate: ''
  };

  renderListTitle();
  renderLists();

  $(document).on('click','.sign-up-btn', function() {
    $('.main-content').load("views/sign-up.html");
  })

  $(document).on('click', '#signup-next-btn', function() {
    $("body").load("index.html .main-content");
  })

  $(document).on('click', '.sign-in-btn', function() {
    $('.main-content').load("views/sign-in.html");
  })

  $("#signin-form").submit(function() {
    $("body").load("index.html .main-content");
  })
   
  $(document).on('click', '.create-list-btn', function() {
    $(".main-content").load("views/create-list-title.html");
  })

  $(document).on('click', '.view-lists-btn', function(event) {
    event.preventDefault();
    $(".main-content").load("views/view-lists.html");
  });

  $("#create-list-title-form").submit(function(event) {
    event.preventDefault();
    FormData.listTitle = $("#listTitle").val();
    FormData.dueDate = $("#dueDate").val();
    createListTitle();
    $(".main-content").load("views/create-list-items.html")
  });
  
  $("#add-item-form").submit(function(event) {
    event.preventDefault();
    addItem();
  });

  $(document).on('click', "#signout-btn", function(event) {
    event.preventDefault();
    location.reload();
  });

});
