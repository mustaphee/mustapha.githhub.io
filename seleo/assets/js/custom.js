var base_url = "http://45.33.45.243:8888/rest-auth/"

$(document).ready(function(){

// Login Page test request

    $("div.load-bar").hide()

    $("#login").on("click",function(ev){
        ev.preventDefault()
        $("div.load-bar").show()
        console.log("I am sending")
        var login_details = {
            "email": $("#email").val(),
            "password": $("#password").val(),
        }
        
        $.ajax({
            type: "POST",
            url: base_url+"login/",
            data: login_details,
            dataType: 'json',
            success: function (data) {
                console.log("connected successfully")
                $("div.load-bar").hide()
                swal({
                    title: "Successful!",
                    text: "Login successful",
                    icon: "success",
                    timer: 2000,
                    button: false
                  }).then(
                    function() {
                        window.location = "../backend/dashboard.html";
                    },
                    // handling the promise rejection
                    function(dismiss) {
                      if (dismiss === 'timer') {
                        window.location = "../backend/daasboard.html";
                      }
                    }
                  );
                //window.location = "../backend/index.html";
            },
    
            error: function (err) {
                $("div.load-bar").hide()
                var errText = JSON.parse(err.responseText).non_field_errors[0]
                console.log(errText);
                swal({
                    title: "An error occured",
                    text: errText,
                    icon: "error",
                    button: "Ok",
                  });
            }
        });
    })

// Signup page test request

    $("div.load-bar").hide()
    $("#signup").on("click",function(e){
    e.preventDefault();
    $("div.load-bar").show()
    console.log("I am sending")
    var signup_details = {
        "first_name": $("#firstname").val(),
        "last_name": $("#lastname").val(),
        "email": $("#email").val(),
        "password1": $("#password1").val(),
        "password2": $("#password2").val()
    }
    
    $.ajax({
        type: "POST",
        url: base_url + "registration/",
        data: signup_details,
        dataType: 'json',
        success: function (data) {
            console.log("Connected successfully")
            $("div.load-bar").hide()
                swal({
                    title: "Successful!",
                    text: "Registration successful",
                    icon: "success",
                    timer: 2000,
                    button: false
                  }).then(
                    function() {
                        window.location = "../backend/dashboard.html";
                    },
                    // handling the promise rejection
                    function(dismiss) {
                      if (dismiss === 'timer') {
                        window.location = "../backend/dashboard.html";
                      }
                    }
                  );
                //window.location = "../backend/index.html";
            },
    
            error: function (err) {
                $("div.load-bar").hide()
                // var errText = JSON.parse(err.responseText).non_field_errors[0]
                console.log(errText);
                swal({
                    title: "An error occured",
                    text: errText,
                    icon: "error",
                    button: "Ok",
                  });
            }
    });
});

// Geolocation capturing code
if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(function(position){ 
            var long =position.coords.longitude;
            var lat =position.coords.latitude;
            console.log(long);
            console.log(lat);            
            console.log("Found your location \nLat : "+position.coords.latitude+" \nLang :"+ position.coords.longitude);
        });
    }
});