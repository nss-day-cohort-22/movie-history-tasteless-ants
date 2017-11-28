const firebase = require("firebase")
const auth =require("./authorization")

const observer = Object.create(null, {
    "init": {
        value: function (auth) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log("user signed in")
                    auth.activeUser = user
                } else {
                    console.log("user signed out")
                    auth.activeUser = null
                }
            })
        }
    }
})

module.exports = observer