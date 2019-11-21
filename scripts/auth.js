// listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user) {
    setupUI(user);
  } else {
    setupUI();
  }
});

//current user
var currentUser = firebase.auth().currentUser;

//signup
var signupForm = $("#signup-form")
signupForm.submit(function(event) { 
  event.preventDefault();

  var name = $("#name").val();
  var email = $("#signup-email").val();
  var password = $("#signup-password").val();

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(user => {
    //save user to db
    db.collection('users').add({
      name: name,
      email: email,
    })
  });
});

// signin
var signinForm = $("#signin-form");

signinForm.submit(function(event) {
  event.preventDefault();

  var email = $("#signin-email").val();
  var password = $("#signin-password").val();
  
  auth.signInWithEmailAndPassword(email, password);
});

// log out
var logout = $("#signout-btn");

logout.click(function(event) {
  event.preventDefault();
  auth.signOut();
});