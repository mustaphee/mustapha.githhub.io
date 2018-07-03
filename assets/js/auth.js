function(signup){
            signup.preventDefault();

            console.log("I am sending")
            var signup_details= {
                    "username": $("#username").val(),
                    "email": $("#email").val(),
                    "password1": $("#password1").val(),
                    "password2": $("#password2").val()
                    }

                $.ajax({
                type: "POST",
                url: "http://45.33.45.243:8888/rest-auth/registration/",
                data: signup_details,
                dataType: 'json',        
                success: function(data) {
                    console.log("Connected successfully")
                    window.location = "../backend/index.html";
                                         }
                error: function(err){
                console.log("Your username or password is not correct")
                }

                          });    
           } 


 