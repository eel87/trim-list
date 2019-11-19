// listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user) {
    // $('.buttons').load("views/user-option-btns.html #buttons");
  } else {
    // $('document').load('index.html');
  }
});

//signup
var signupForm = $("#signup-form")
signupForm.submit(function(event) { 
  event.preventDefault();

  var email = $("#signup-email").val();
  var password = $("#signup-password").val();

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // $('.main-content').load('views/create-list-title.html');
  });
});

// signin
var signinForm = $("#signin-form");

signinForm.submit(function(event) {
  event.preventDefault();

  var email = $("#signin-email").val();
  var password = $("#signin-password").val();
  
  auth.signInWithEmailAndPassword(email, password).then(cred => {
    $('.main').load("views/user-option-btns.html");
  });
});

// log out
var logout = $("#signout-btn");

logout.click(function(event) {
  event.preventDefault();
  auth.signOut();
});