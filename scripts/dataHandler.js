
const $ = require("jquery")
const firebase = require("firebase")
const userFactory = require("./auth/authorization")
const movieHandler = require("./movieHandler")

let firebaseURL = "https://tasteless-ants-8fafd.firebaseio.com/"
let apiKey = "3693ec3ce2f4a35cd73d00f01c34dcce"

// Manages data for Firebase and tmdb
const dataHandler = Object.create(null, {
    "userTokenGET": {
        "value": function () {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}${auth.activeUser.uid}/.json?auth=${idToken}`,
                        "method": "GET"
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "userTokenPOST": {
        "value": function (newObject) {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}${auth.activeUser.uid}/.json?auth=${idToken}`,
                        "method": "POST",
                        "data": JSON.stringify(newObject)
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "userTokenDELETE": {
        "value": function (objectID) {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}${auth.activeUser.uid}/${objectID}.json?auth=${idToken}`,
                        "method": "DELETE"
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "userTokenPUT": {
        "value": function(fbID, object) {
            return firebase.auth().activeUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}${auth.activeUser.uid}/${fbID}/.json?auth=${idToken}`,
                        "method": "PUT",
                        "data": JSON.stringify(object)
                    })
                })
        }, "writable": true, "enumerable": true
    // },
    // "getMovieByID": {
    //     "value": function(movieID) {
    //         return $.ajax({
    //             "url": `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=id`,
    //             "method": "GET"
    //         })
    //     }, "writable": true, "enumerable": true
    // },
    // "getMovieByTitle": {
    //     "value": function(movieID) {
    //         return $.ajax({
    //             "url": `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&append_to_response=title`,
    //             "method": "GET"
    //         })
    //     }, "writable": true, "enumerable": true
    // },

    // "searchMovies": {
    //     "value": function(searchString) {
    //         return $.ajax({
    //             "url": `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchString}&page=1`,
    //             "method": "GET"
    //         })
    //     }, "writable": true, "enumerable": true
    // },

    // "getCast": {
    //     "value": function(movieID) {
    //         return $.ajax({
    //             "url": `https://api.themoviedb.org/3/movie/${movieID}/credits?api_key=${apiKey}
    //             `,
    //             "method": "GET"
    //         })
    //     }, "writable": true, "enumerable": true
    // },

    // "getPopular": {
    //     "value": function() {
    //         return $.ajax({
    //             "url": "https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1",
    //             "method": "GET"
    //         })
    //     }, "writable": true, "enumerable": true
    }
})

module.exports = dataHandler