$(document).ready(function() {

$('#btn-logout').click(function(){
    var ref = new Firebase("https://popping-torch-783.firebaseio.com/");
    ref.unauth();
    window.location.href="logout.html";
});


    $('#loginbox').click(function() {
        var loginUsername = $('#login-username').val();
        var loginPassword = $('#login-password').val();

        console.log(loginPassword);
        var ref = new Firebase("https://popping-torch-783.firebaseio.com/");

        ref.authWithPassword({
            email: loginUsername,
            password: loginPassword
        }, function(error, authData) {
            if (error) {
                console.log("Login Failed!", error);
            } else {
                console.log("Authenticated successfully with payload:", authData);
                window.location.href="logout.html";
                localStorage.setItem("Greetings",loginUsername);
            }
        });
    });

    $('#btn-signup').click(function() {
        alert('hello!');
        var ref = new Firebase("https://popping-torch-783.firebaseio.com/");
        var firstName = $('#firstname').val();
        var lastName = $('#firstname').val();
        var email = $("#register-email").val();
        var userPassword = $("#user-password").val();
        //  authClient.createUser(email, password, function (error, user) {
        console.log(userPassword);
        ref.createUser({
            email: email,
            password: userPassword
        }, function(error, userData) {
            if (error) {
                console.log("Error creating user:", error);
            } else {
                console.log("Successfully created user account with uid:", userData.uid);
            }
        });

    });

 // var currentUser = localStorage.getItem("Greetings");
 //     console.log(currentUser);
 //     document.getElementById("current-user").innerHTML = currentUser;


    $("#save-meal").click(function(){
        alert("Your plan has saved! Click GO to check it out!" );
    });


});