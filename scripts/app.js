  //show logged in/out UI button options
  $(".logged-out").hide();
  $(".logged-in").hide(); 

  function setupUI(user) {
    if (user) {
      $(".logged-in").show(); 
      $(".logged-out").hide();
    } else {
      $(".logged-in").hide(); 
      $(".logged-out").show();
    }
  };

  //add list title and due date to db
  function createListTitle() {
    db.collection('lists').doc(FormData.listTitle).set({
      dueDate: FormData.dueDate, 
      user: currentUser.email
    });

    db.collection('users').where("email", "==", currentUser.email)
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
    $("#content-title").text(FormData.listTitle);
  }

  //add item to db
  function addItem() {
    var listRef = db.collection('lists').doc(FormData.listTitle);
    var item = $("#item").val();

    listRef.update({
      items: firebase.firestore.FieldValue.arrayUnion(item)
    });

    $("#item").val("");
    $("#item-list").append("<li>" + item + "</li><button class= btn glyphicon glyphicon-trash></button>");
  }

  //get list name data
  // db.collection('lists').where("user", "==", currentUser.email)
  //   .get()
  //   .then(function(snapshot) {
  //   snapshot.forEach(function(doc) {
  //     renderLists(doc.listName)
  //   })
  // });

  //render lists
  function renderLists(listName) {
    var currentUser = firebase.auth().currentUser;

    db.collection('users').where("email", "==", currentUser.email)
    .get()
    .then(function(snapshot) {
      snapshot.forEach(function(doc) {
        doc.data().lists.forEach(function(list) {
          var glyphButtons = '<button class="btn btn-danger glyphicon glyphicon-remove pull-right" data-id="' + list + '" + id="delete-list"></button><button class="btn btn-success glyphicon glyphicon-eye-open pull-right" data-id="' + list + '" + id="open-list"></button>'
          $(".list-titles-list").append('<br><li>' + list + glyphButtons + '</li>');
        })
      })
    })
  }
  