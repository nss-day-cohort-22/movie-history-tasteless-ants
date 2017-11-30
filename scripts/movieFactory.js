const $ = require("jquery")
const firebase = require("firebase")
const movieToSave = require("./movieController")
let auth = require("./auth/authorization")


// when onclick add to watchlist, create object with results data
const movieFactory = (movie) => {
    return {
        "id": movie.id,
        "title": movie.title,
        "year": movie.release_date,
        "poster": movie.poster_path,
        "uid": firebase.auth().currentUser.uid,
        "watched": false
    }
}
module.exports = movieFactory
