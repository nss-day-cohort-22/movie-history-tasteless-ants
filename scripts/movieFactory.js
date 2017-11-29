const $ = require("jquery")
const firebase = require("firebase")
const movieToSave = require("./movieController")

// when onclick add to watchlist, create object with results data
const movieFactory = (movie) => {
    return Object.create({}, {
    "id":{value: movie.id},
    "title": {value: movie.title},
    "year": {value: movie.release_date},
    "poster": {value: movie.poster_path},
    // "actors": {[`${movieObj.credits}`]},
    // "rating": {value: rating},
    // "watched": {value: false},
    // "uid": {value: firebase.authUser.uid}
    })
}
console.log(movieFactory)
module.exports = movieFactory
