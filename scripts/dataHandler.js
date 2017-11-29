
const $ = require("jquery")
const firebase = require("firebase")
const userFactory = require("./auth/authorization")

// Manages data for Firebase and tmdb
const dataHandler = Object.create(null, {
    "firebaseGET": {
        "value": function () {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `https://movie-history-59344.firebaseio.com/${auth.activeUser.uid}/.json?auth=${idToken}`,
                        "method": "GET"
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "firebasePOST": {
        "value": function (newObject) {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `https://movie-history-59344.firebaseio.com/${auth.activeUser.uid}/.json?auth=${idToken}`,
                        "method": "POST",
                        "data": JSON.stringify(newObject)
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "firebaseDELETE": {
        "value": function (objectID) {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `https://movie-history-59344.firebaseio.com/${auth.activeUser.uid}/${objectID}.json?auth=${idToken}`,
                        "method": "DELETE"
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "firebasePUT": {
        "value": function(fbID, object) {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `https://movie-history-59344.firebaseio.com/${auth.activeUser.uid}/${fbID}/.json?auth=${idToken}`,
                        "method": "PUT",
                        "data": JSON.stringify(object)
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "getMovieByID": {
        "value": function(movieID) {
            return $.ajax({
                "url": `https://api.themoviedb.org/3/movie/${movieID}?api_key=feae42ac1de7d9384c48dcb8682cb73f&append_to_response=credits`,
                "method": "GET"
            })
        }, "writable": true, "enumerable": true
    },

    "searchMovies": {
        "value": function(searchString) {
            return $.ajax({
                "url": `https://api.themoviedb.org/3/search/movie?api_key=feae42ac1de7d9384c48dcb8682cb73f&language=en-US&query=${searchString}&page=1`,
                "method": "GET"
            })
        }, "writable": true, "enumerable": true
    },

    "getCast": {
        "value": function(movieID) {
            return $.ajax({
                "url": `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=feae42ac1de7d9384c48dcb8682cb73f
                `,
                "method": "GET"
            })
        }, "writable": true, "enumerable": true
    },

    "getPopular": {
        "value": function() {
            return $.ajax({
                "url": "https://api.themoviedb.org/3/movie/popular?api_key=feae42ac1de7d9384c48dcb8682cb73f&language=en-US&page=1",
                "method": "GET"
            })
        }, "writable": true, "enumerable": true
    },
})

module.exports = dataManager