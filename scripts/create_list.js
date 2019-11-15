$( document ).ready(function() {

const firebaseRef = firebase.database().ref();

function createList(userId, listId, listName, due_date
  // do something 
    // firebaseRef.child('lists/' + listName).set({
    //   due_date: due_date
    // });


  $("#nextBtn").click(function(listName, due_date) {
    var listName = $('#listName').val();
    var due_date = $('#dueDate').val();
    createList(userId, listId, listName, due_date);
  });


  $("#addItem").click(function() {
    var item = $("#item").val();

    $(".items li").append(
      $('<button/><br>').addClass('btn btn-primary list-items').text(item));

      firebaseRef.child('lists/' + listName + '/items').push().set(item);
  });

});