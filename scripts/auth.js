//signup
const signupForm = $("#signup-form");

signupForm.submit(function(e) {
  e.preventDefault();

  const email = $("#signup-email").val();
  const password = $("#signup-password").val();

  console.log(name, email, password);

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    console.log(cred.user);
    $('.main-content').load('views/create-list-title.html');
    signupForm.trigger("reset");
  })
});