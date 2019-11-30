//show logged in/out UI button options
$('.logged-out').hide();
$('.logged-in').hide(); 

function setupUI(user) { 
  if (user) {
    $('.logged-in').show(); 
    $('.logged-out').hide();
  } else {
    $('.logged-in').hide(); 
    $('.logged-out').show();
  }
};

//add list title and due date to db
function createListTitle() {
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

function renderListTitle() {
  $('#content-title').text(FormData.listTitle);
}

//add item to db
function addItem(title) {
  var listRef = db.collection('lists').doc(title);
  var item = $('#item').val();

  listRef.update({
    items: firebase.firestore.FieldValue.arrayUnion(item)
  });

  $('#item').val('');
  $('#item-list-create-page').append('<li>' + item + '<button class="btn btn-danger glyphicon glyphicon-trash pull-right" data-id="' + item + '"id="delete-item"></button></li><br>')
}

//render lists to view-lists.html
function renderLists() {
  var currentUser = firebase.auth().currentUser; 
  db.collection('users').where('email', '==', currentUser.email)
  .get()
  .then(function(snapshot) {
    snapshot.forEach(function(doc) {
      doc.data().lists.forEach(function(list) {
        var glyphButtons = '<button class="btn btn-danger glyphicon glyphicon-trash pull-right" data-id="' + list + '"id="delete-list"></button><button class="btn btn-primary glyphicon glyphicon-eye-open pull-right" data-id="' + list + '"id="open-list"></button>'
        $('.list-titles-list').append('<li>' + list + glyphButtons + '</li><br>');
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
        var glyphButtons = '<button class="btn btn-danger glyphicon glyphicon-trash pull-right" data-id="' + item + '"id="delete-item"></button>'
        $('#item-list').append('<br><li>' + item + glyphButtons + '</li>');
      })
    $('#content-title').text(title);
  })
}

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