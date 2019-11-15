// $( document ).ready(function() {

// $("#submitBtn").click(function() {
//   var item = $("#item").val();

//   $(".items li").append(
//     $('<button/><br>').addClass('btn btn-primary list-items').text(item));

//   titleRef.child('/items').push().set(item);
// });

// // var firebaseRootRef = firebase.database().ref();
// // var personale_Ref = firebaseRootRef.child('DatabaseTirocinio/Personale');

// // $(function() {
// //   $('#btn-login').click(function() {
// //     var id_user = $("#username").val();
// //     var id_password = $("#password").val();

// //     personale_Ref.orderByChild("Username").equalTo(id_user).on("value", function(snapshot) {
// //       console.log(snapshot.val());

// //       var dip = personale_Ref.child(snapshot.key);

// //       dip.equalTo("Password").on("value", function(child) {
// //         console.log(child.val());
// //       });
// //     });
// //   });

// });