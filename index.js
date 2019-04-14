// test if user logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.

    $("#user_div").show();
    $("#login_div").hide();
    $("#register_div").hide();

    var user = firebase.auth().currentUser;

    if (user != null) {
      var email_id = user.email;
      $("#user_para").html("Welcome User : " + email_id);
    }
  } else {
    // No user is signed in.

    $("#user_div").hide();
    $("#login_div").show();
  }
});

// login user with email & password
function login() {
  var userEmail = $("#email_field").val();
  var userPass = $("#password_field").val();
  console.log(userEmail);

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPass)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error : " + errorMessage);

      // ...
    });
}
// register user with email & password
function register() {
  var email = $("#email").val();
  var password = $("#password").val();
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error : " + errorMessage);
    });
}

function logout() {
  firebase.auth().signOut();
}
// dom fundcctions

function displayLogin() {
  $("#login_div").show();
  $("#register_div").hide();
}
function displayRegister() {
  $("#login_div").hide();
  $("#register_div").show();
}
