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
    $("#item-list").append("<li>" + item + "</li>");
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
    console.log("renderList");
    // $("#lists").append("<li><button>" + listName + "</button></li>");
  }