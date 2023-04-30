$(document).ready(function () {

    //Adding Data
       $("#loginForm").submit((event) => {
           event.preventDefault()
   
           var UserName = $("#userName").val()
           var Password = $("#password").val()
   
           console.log("Entered UserName ", UserName)
           console.log("Entered Password ", Password)

           $.ajax({
            url: "http://localhost:3000/api/login/",
            method: "POST", // 
            data: {
                userName: UserName,
                password: Password
            },
            success: function (response) {
               window.location.replace("http://127.0.0.1:5500/View/JobListing.html");
                alert("Congratulations You have Successfully Logged in")
            },
            error: function (xhr, status, error) {
                // handle the error response from the server
                alert("Invalid Credentials")
                console.log("Error adding data:", error);
            }
        });



       }) 
    })