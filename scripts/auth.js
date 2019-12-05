$('.logged-out').hide();
$('.logged-in').hide();

function setupUI(user) { 
  $('.logged-out').hide();
  $('.logged-in').hide();
  if (user) {
    $(".logged-in").show();
  } else {
    $(".logged-out").show();
  }
};

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

//signup
$('#signup-form').submit(function(event) { 
  event.preventDefault();
  event.stopImmediatePropagation();

  var name = $('#name').val();
  var email = $('#signup-email').val();
  var password = $('#signup-password').val();

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(function(user) {
   var  currentUser = user;
  //add user to db
    db.collection('users').add({
      name: name,
      email: email
    });
  }).catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    $('.alert').show();
    $('.error-message').text(errorMessage);
  });
  
  $('body').load('index.html #main-content', function() {
    $('.logged-out').hide();
  });
});


// signin
$('#signin-form').submit(function(event) {
  event.preventDefault();
  event.stopImmediatePropagation();

  var email = $('#signin-email').val();
  var password = $('#signin-password').val();
  
  auth.signInWithEmailAndPassword(email, password) 
  .catch(function(error) {
    // Handle Errors here.
    var errorMessage = error.message;
    $('.alert').show();
    $('.error-message').text(errorMessage);
  })
  
  $('body').load('index.html #main-content', function() {
    $('.logged-out').hide();
  });
});

// log out
$('#signout-btn').click(function(event) {
  event.preventDefault();
  auth.signOut();
  location.reload();
});