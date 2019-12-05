$('.logged-out').hide();
$('.logged-in').hide();

$(document).ready(function() {
  //focus headings on page loads
  $('h1').focus();

  $(window).FormData = {
    listTitle: '',
    dueDate: ''
  };
  
  //focus forms on page load
  $('#listTitle').focus();
  $('#item').focus();
  $('#signin-email').focus();
  $('#name').focus();

  $(document).on('click','.sign-up-btn', function() {
    $('.main-content').load('views/sign-up.html');
  });

  $('#signup-form').submit(function(event) { 
    location.reload();
  });

  $(document).on('click', '.sign-in-btn', function() {
    $('.main-content').load('views/sign-in.html');
  });

  $(document).on('click', '.create-list-btn', function() {
    $('.main-content').load('views/create-list-title.html');
  });

  $('#create-list-title-form').submit(function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    FormData.listTitle = $('#listTitle').val();
    FormData.dueDate = $('#dueDate').val();
    createListTitle();
    $('.main-content').load('views/create-list-items.html');
  });

  $(document).on('click', '.complete-list-btn', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('.main-content').load('views/open-list.html');
    openList(FormData.listTitle);
  });

  $(document).on('click', '.view-lists-btn', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('.main-content').load('views/view-lists.html');
    renderLists();
  });

  $('#add-item-form').submit(function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    addItem($('.content-title').text());
  });

  $(document).on('click', '#signout-btn', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    location.reload();
  });

  $(document).on('click', '#delete-list', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    deleteList($(this).attr('data-id'));
    $(this).parent().attr('role', 'alert');
    $(this).parent().text($(this).attr('data-id') + ' has been deleted');
    $(this).parent().focus();
    $(this).parent().remove();
  });

  $(document).on('click', '#open-list', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('.main-content').load('views/open-list.html');
    openList($(this).attr('data-id'));
  });

  $(document).on('click', '#add-list-from-view-page', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('.main-content').load('views/create-list-title.html');
  })

  $(document).on('click', '#add-item-from-view-page', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('.main-content').load('views/create-list-items.html');
    FormData.listTitle = $('.content-title').text();
  })

  $(document).on('click', '#delete-item', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    deleteItem($('#content-title').text(), $(this).attr('data-id'));
    $(this).parent().attr('role', 'alert');
    $(this).parent().text($(this).attr('data-id') + ' has been deleted');
    $(this).parent().focus();
  });

  $(document).on('click', '#view-list-back-btn', function(event) {
    event.preventDefault();
    event.stopImmediatePropagation();
    $('.main-content').load('views/view-lists.html');
    renderLists();
  })

  $(document).on('click', '#back-to-index', function(event) {
    location.reload();
  });
});