const $ = require("jquery")
const firebase = require("firebase")

// when onclick add to watchlist, create object with results data
const movieFactory = Object.create(null, {
    "id":{value: /*movie.id*/},
    "title": {value: /*movie.title*/},
    "year": {value: /*movie.release_date*/},
    "poster": {value: /*movie.poster_path*/},
    "rating": {value: /*rating function*/},
    "watched": {value: false},
    "uid": {value: /*user who added movie to watchlistDB*/},
})
module.exports = movieFactory
