const $ = require("jquery")
const firebase = require("firebase")
const movieToSave = require("./movieController")

// when onclick add to watchlist, create object with results data
const movieFactory = Object.create(null, {
    "id":{value: movieToSave.id},
    "title": {value: movieToSave.title},
    "year": {value: movieToSave.release_date},
    // "actors": {[`${movieObj.credits}`]},
    "poster": {value: movieToSave.poster_path},
    // "rating": {value: rating},
    // "watched": {value: false},
    // "uid": {value: firebase.authUser.uid}
})
console.log(movieFactory)
module.exports = movieFactory
