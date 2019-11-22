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

//render lists
function renderLists() {
  console.log("renderList");
  $("#lists").append("<li>potato</li>");

  // listRef = db.collection('lists').where("user", "==", currentUser.email);
  // listRef.get(snapshot => {
  //   console.log(snapshot);
  // })
}