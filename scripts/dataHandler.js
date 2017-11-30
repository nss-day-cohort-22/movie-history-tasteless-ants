
const $ = require("jquery")
const firebase = require("firebase")
const auth = require("./auth/authorization")

let firebaseURL = "https://tasteless-ants-8fafd.firebaseio.com/watchlist"
let apiKey = "3693ec3ce2f4a35cd73d00f01c34dcce"

// Manages data for Firebase and tmdb
const dataHandler = Object.create(null, {
    "userTokenGET": {
        "value": function () {

            return firebase.auth().currentUser.getIdToken(true)
                .then(idToken => {
                    console.log(`${firebaseURL}.json?auth=${idToken}&orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`)
                    return $.ajax({
                        "url": `${firebaseURL}.json?auth=${idToken}&orderBy="uid"&equalTo="${firebase.auth().currentUser.uid}"`,
                        "method": "GET"
                    }).fail(err => {
                        console.log(err)
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "userTokenPOST": {
        "value": function (newObject) {
            return firebase.auth().currentUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}.json?auth=${idToken}`,
                        "method": "POST",
                        "data": JSON.stringify(newObject)
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "userTokenDELETE": {
        "value": function (objectID) {
            return firebase.auth().currentUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}/${objectID}.json?auth=${idToken}`,
                        "method": "DELETE"
                    })
                })
        }, "writable": true, "enumerable": true
    },

    "userTokenPUT": {
        "value": function(fbID, object) {
            return firebase.auth().currentUser.getIdToken(true)
                .then(idToken => {
                    return $.ajax({
                        "url": `${firebaseURL}/${movieObj.id}/.json?auth=${idToken}`,
                        "method": "PUT",
                        "data": JSON.stringify()
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