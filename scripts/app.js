//add list title and due date to db
function createListTitle() {
  $('#listTitle').focus();

  db.collection('lists').doc(FormData.listTitle).set({
    dueDate: FormData.dueDate, 
    user: currentUser.email,
    items: []
  });

  db.collection('users').where('email', '==', currentUser.email)
  .get()
  .then(function(snapshot) {
    snapshot.forEach(function(doc) {
      db.collection('users').doc(doc.id).set({
        lists: firebase.firestore.FieldValue.arrayUnion(FormData.listTitle)
      }, { merge: true });
    })
  })
}

//add item
function addItem(title) {

  var listRef = db.collection('lists').doc(title);
  var item = $('#item').val();

  listRef.update({
    items: firebase.firestore.FieldValue.arrayUnion(item)
  });

  $('#item').val('');
  $('#item-list-create-page').append('<li aria-role"list item">' + item + '<button aria-label="delete' + item + '" class="btn btn-danger glyphicon glyphicon-trash" data-id="' + item + '"id="delete-item"></button></li>')
  $('#item').focus();
}

//render lists to view-lists.html
function renderLists() {
  var currentUser = firebase.auth().currentUser; 

  db.collection('users').where('email', '==', currentUser.email)
  .get()
  .then(function(snapshot) {
    snapshot.forEach(function(doc) {
      doc.data().lists.forEach(function(list) {
        db.collection('lists').doc(list).get()
        .then(function(snapshot) {
          dueDate = snapshot.data().dueDate;
        
          var glyphButtons = '<button aria-label="open' + list + '" class="btn btn-primary glyphicon glyphicon-eye-open" data-id="' + list + '"id="open-list"></button><button aria-label="delete' + list + '" class="btn btn-danger glyphicon glyphicon-trash" data-id="' + list + '"id="delete-list"></button>'
          $('.list-titles-list').append('<li aria-role"list title">' + list + '<br><small>' + dueDate + '</small>' + glyphButtons + '</li>');
        })
      })
    })
  }) 
}

//delete list
function deleteList(id) {
  db.collection('lists').doc(id).delete();
  
  var userRef = db.collection('users').where('email', '==', currentUser.email);
  userRef.get()
  .then(function(snapshot) {
    snapshot.forEach(function(doc) {
      doc.ref.update({
        'lists': firebase.firestore.FieldValue.arrayRemove(id)
      })
    })
  })
}

//open list
function openList(title) {
  ref = db.collection('lists').doc(title);
  ref.get()
  .then(function(snapshot) {
    snapshot.data().items.forEach(function(item) {
        var glyphButtons = '<button aria-label="delete' + item + '" class="btn btn-danger glyphicon glyphicon-trash" data-id="' + item + '"id="delete-item"></button>'
        $('#item-list').append('<li aria-role="list item">' + item + glyphButtons + '</li>');
      })
    $('#content-title').text(title);
    $('.due-date').text('Due Date: ' + snapshot.data().dueDate);
  });
};

//delete item from db
function deleteItem(listId, item) {
  var listRef = db.collection('lists').doc(listId);

  listRef.get()
  .then(function(snapshot) {
    snapshot.ref.update({
      'items': firebase.firestore.FieldValue.arrayRemove(item)
    })
  })
}