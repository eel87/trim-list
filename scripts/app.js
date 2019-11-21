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
  event.preventDefault();

  db.collection('lists').doc(FormData.listTitle).set({
    dueDate: FormData.dueDate, 
    user: currentUser.email
  });
}

function addItem() {
  var listRef = db.collection('lists').doc(FormData.listTitle);
  var item = $("#item").val();

  listRef.update({
    items: firebase.firestore.FieldValue.arrayUnion(item)
  });
}


//--ignore below code
//render list to DOM, access listTitle id from there?
// function renderTitle() {
//   var listTitle = $("#title").val();
//   $("#content-title").text(listTitle);
// }

//add items to list
// function addItem(doc) {
//   var item = $("#item").val();
//   collectionRef = db.collection('lists').doc(doc.id);

//   collectionRef.update({
//     items: firebase.firestore.FieldValue.arrayUnion(item)
//   });

  // db.collection('lists'/{listTitle}).get().then((snapShot) => {
  //   snapShot.docs.forEach(doc => {
  //     console.log("getting snapshot");
  //     console.log("doc= " + doc);
  //   })
  // })
// }

//print user email list test
// var emailList = $("#email-list");

  // title.append(name);
  // emailList.append(li);

  // delete user from db
  // $("#cross").click(function(e) {
  //   e.stopPropagation();
    
  //   var id = e.target.parentElement.getAttribute('data-id');

  //   db.collection('users').doc.id.delete();
  // });

//get users

// db.collection('users').get().then((collectionSnapshot) => {
//   collectionSnapshot.docs.forEach(doc => {
//     renderEmailList(doc)
//     // console.log(doc.data().email);
//   })
// });

//save data
// var signupForm = $("#signup-form")
// signupForm.submit(function(event) {
//   event.preventDefault();

//   db.collection('users').add({
//     name: $("#name").val(),
//     email: $("#signup-email").val()
//   });
// });

//real-time listener
// db.collection('lists').onSnapshot(snapshot => {
//   snapshot.where("id", "==", listTitle)

//   var changes = snapshot.docChanges();
//   changes.forEach(change => {
//     if(change.type == 'added') {
//       renderEmailList(change.doc);
//     } else if (change.type == 'removed') {
//       var li =  $("#email-list li[data-id=" + change.doc.id + "]")
//       li.remove();
//     }
//   })
// });
// db.collection('users').onSnapshot(snapshot => {
//   var changes = snapshot.docChanges();
//   changes.forEach(change => {
//     if(change.type == 'added') {
//       renderEmailList(change.doc);
//     } else if (change.type == 'removed') {
//       var li =  $("#email-list li[data-id=" + change.doc.id + "]")
//       li.remove();
//     }
//   })
// });

// db.collection('lists').onSnapshot(snapShot => {
//   console.log(snapShot.data());
//   snapShot.forEach(doc => {
//     renderTitle(doc);
//   })
// });