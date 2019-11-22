// listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user) {
    currentUser = user;
    setupUI(user);
  } else {
    setupUI();
  }
});

//current user

var currentUser = firebase.auth().currentUser;

//signup
$("#signup-form").submit(function(event) { 
  event.preventDefault();

  var name = $("#name").val();
  var email = $("#signup-email").val();
  var password = $("#signup-password").val();

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    db.collection('users').add({
      name: name,
      email: email
    })
  });
});

// signin
$("#signin-form").submit(function(event) {
  event.preventDefault();

  var email = $("#signin-email").val();
  var password = $("#signin-password").val();
  
  auth.signInWithEmailAndPassword(email, password);
});

// log out
$("#signout-btn").click(function(event) {
  event.preventDefault();
  auth.signOut();
});