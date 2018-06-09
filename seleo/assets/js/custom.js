var base_url = "http://45.33.45.243:8888/rest-auth/"

$(document).ready(function(){
    $("div.load-bar").hide()
    $("#register").on("click",function(ev){
        ev.preventDefault();
        $("div.load-bar").show()
        console.log("I am sending")
        var signup_details = {
            "username": $("#username").val(),
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
                    text: "You've been registered successfully",
                    icon: "success",
                    timer: 2000,
                    button: false
                  }).then(
                    function() {
                        window.location = "../backend/index.html";
                    },
                    // handling the promise rejection
                    function(dismiss) {
                      if (dismiss === 'timer') {
                        window.location = "../backend/index.html";
                      }
                    }
                  );
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
    });
    $("#login").on("click",function(ev){
        ev.preventDefault()
        $("div.load-bar").show()
        console.log("I am sending")
        var login_details = {
            "username": $("#username").val(),
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
                        window.location = "../backend/index.html";
                    },
                    // handling the promise rejection
                    function(dismiss) {
                      if (dismiss === 'timer') {
                        window.location = "../backend/index.html";
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
});


function signup(e) {
    e.preventDefault();
    console.log("I am sending")
    var signup_details = {
        "username": $("#username").val(),
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
            window.location = "../backend/index.html";
        },
        error: function (err) {
            console.log("Your username or password is not correct")
        }
    });
}

function login(e){
    e.preventDefault();
    console.log("I am sending")
    var login_details = {
        "username": $("#username").val(),
        "password": $("#password").val(),
    }
    
    $("div.load-bar").show();
    $.ajax({
        type: "POST",
        url: base_url+"login/",
        data: login_details,
        dataType: 'json',
        success: function (data) {
            console.log("connected successfully")
            window.location = "../backend/index.html";
        },

        error: function (err) {
            console.log("Your username or password is not correct")
            
        }
    });
}