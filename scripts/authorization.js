const firebase = require("firebase")
const $ = require("jquery")
const observer = require("./observer")

var config = {
    apiKey: "AIzaSyCocFPCLs5Dv4Bwzxt09oQJzDhl2ULCgCg",
    authDomain: "tasteless-ants-8fafd.firebaseapp.com",
    databaseURL: "https://tasteless-ants-8fafd.firebaseio.com",
    projectId: "tasteless-ants-8fafd",
    storageBucket: "tasteless-ants-8fafd.appspot.com",
    messagingSenderId: "86455620319"
  };

  const userFactory = Object.create(null, {
      "activeUser": {
          value: null,
          writable: true
        },
        "init": {
            value: function (e) {
                firebase
                    .initializeApp(config)

                $("#loginDash").on("click", e => {
                    console.log("Login Click button is working")
                    // Validate login information
                    this.validate(
                        // $("#email").val(),
                        // $("#password").val()
                    )

                    // Clear the form
                    $("#email").val("")
                    $("#password").val("")
                })
                // Set up authentication observer
                observer.init(this)
            }
        },
        "register": {
            value: function (email, password) {
                firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)

                $("#submitRegistration").on("click", e => {
                    console.log("Register Click button is working")

                this.init(
                    $("#email").val(),
                    $("#password").val()
                )
                .catch(function(error) {

                    // Handle Errors here.
                    var errorCode = error.code
                    var errorMessage = error.message
                    console.log("Error Msg"  + errorMessage)
                })
                // Clear the form
                $("#email").val("")
                $("#password").val("")
            })
        }
    },
        "validate": {
            value: function (email, password) {
                firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .catch(function (error) {
                    const errorCode = error.code
                    const errorMessage = error.message

                    // notify.log("Email or password is invalid")
                })
            }
        },
        "logout": {
            value: function (e) {
                $("#logout").on("click", e => {
                firebase.auth().signOut().then(function() {
                    // Sign-out successful.
                }).catch(function(error) {
                    // An error happened.
                })
            })
        }
    }
  })

    module.exports = userFactory