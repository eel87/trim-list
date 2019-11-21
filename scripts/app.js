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
}

var listTitle = $("#listTitle").val();

//add list title and due date to db
function createListTitle() {
  var dueDate = $("#dueDate").val();
  // var listTitle = $("#listTitle").val();
  event.preventDefault();

  db.collection('lists').doc(listTitle).set({
    dueDate: dueDate, 
    user: currentUser.email
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

//   currentUserRef.collection('lists').where("listTitle", "==", listTitle).get().then((collectionSnapshot) => {
//     collectionSnapshot.docs.forEach(doc => {
//       console.log("doc=" + doc.data().listTitle);
//       // db.collection('users').doc(doc.id).collection('lists').where("listTitle", "==", listTitle).get().then(snapShot => {
//       //   snapShot.docs.forEach(doc => {
//         // db.collection('users').where("email", "==", currentUser.email).collection('lists').doc(doc.id).collection('items').add({
//         //     item: item
//   //       //   });
//     })
//   })
// };
// }

//print user email list test
// var emailList = $("#email-list");

// function renderEmailList(doc) {
//   var li = document.createElement('li');
//   var name = document.createElement('span');
//   var email = document.createElement('span');
//   var cross = document.createElement('div');
//   cross.setAttribute('id', "cross");

  // jQuery
  // var newDiv = $('<div/>')

  // Vanilla
  // var newDiv = document.createElement('div')

  // li.setAttribute('data-id', doc.id);
  // name.textContent = doc.data().name;
  // email.textContent = doc.data().email;
  // cross.textContent = "delete";

  // li.append(name);
  // li.append(email);
  // li.append(cross);

  // emailList.append(li);

  //delete user from db
  // $("#cross").click(function(e) {
  //   e.stopPropagation();
    
  //   var id = e.target.parentElement.getAttribute('data-id');

    // db.collection('users').doc.id.delete();
//   });
// };

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