 $(document).ready(function() {

// console.log(234)


// document.getElementById("loginPart").innerHTML = "<p>3456789</p>"



 var currentUser = localStorage.getItem("Greetings");

if(currentUser == null){
	document.getElementById("loginPart").innerHTML =  "<li><a href='login.html'><span class='glyphicon glyphicon-user'></span> Login/Sign up</a></li>"
}else{
	document.getElementById("loginPart").innerHTML =  "<li class='current-user-li'><span class='glyphicon glyphicon-user'></span><p id='current-user'></p></li><li class='current-user-li-btn'><button class='btn btn-link' id='btn-logout'>Log out</button></li>"

 console.log(currentUser);
 document.getElementById("current-user").innerHTML = currentUser;

}


$('#btn-logout').on("click",function(){


    var ref = new Firebase("https://popping-torch-783.firebaseio.com/");
    ref.unauth();
    localStorage.clear()
    window.location.href="index.html";
});

});