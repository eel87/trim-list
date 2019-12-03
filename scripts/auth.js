$('.logged-out').hide();
$('.logged-in').hide();

// listen for auth status changes
auth.onAuthStateChanged(user => {
  if(user) {
    setupUI(user);
  } else {
    setupUI();
  }
});

//current user
var currentUser = auth.currentUser;

//error message
function displayError(code, message) {

}

//signup
$('#signup-form').submit(function(event) { 
  event.preventDefault();
  event.stopImmediatePropagation();

  var name = $('#name').val();
  var email = $('#signup-email').val();
  var password = $('#signup-password').val();

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password)
  .then((user) => {
    db.collection('users').add({
      name: name,
      email: email
    })
    location.reload(); 
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    $('.alert').show();
    $('.error-message').text(errorMessage);
  })
});

// signin
$('#signin-form').submit(function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  var email = $('#signin-email').val();
  var password = $('#signin-password').val();
  
  auth.signInWithEmailAndPassword(email, password).then((user) => {
    location.reload(); 
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    $('.alert').show();
    $('.error-message').text(errorMessage);
  })
});

// log out
$('#signout-btn').click(function(event) {
  event.preventDefault();
  auth.signOut();
  window.reload();
});