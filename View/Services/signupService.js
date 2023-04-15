

$(document).ready(function () {

 //Adding Data
    $("#signupForm").submit((event) => {
        event.preventDefault()

        var Name = $("#name").val()
        var UserName = $("#userName").val()
        var Email = $("#email").val()
        var Password = $("#password").val()

        console.log("Name ",Name)

        $.ajax({
            url: "http://localhost:3000/api/user/createUser/",
            method: "POST", // 
            data: {
                name: Name,
                userName: UserName,
                email: Email,
                password: Password
            },
            success: function (response) {
                window.location.replace("http://127.0.0.1:5500/View/Login.html");
                alert("Congratulations You have Successfully Signed Up ! Login to continue")

            },
            error: function (xhr, status, error) {
                // handle the error response from the server
                console.log("Error adding data:", error);
            }
        });
    })
})

