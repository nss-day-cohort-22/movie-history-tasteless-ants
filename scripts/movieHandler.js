// const $ = require("jquery")
// const firebase = require("firebase")
// const searchBar = require("./tmdb")
// const dataHandler = require("./dataHandler")

// // on click of "add to watchlist"
// // take the movie id

// const watchlist = function (event) {

//         // On click of searchMovieInfo id, start ajax call
//         $("#trackedMovies").on("click", event => {
//             // Get information from movie json based on search criteria in search field
//             $.ajax({
//                 "url": `https://api.themoviedb.org/3/search/movie?api_key=3693ec3ce2f4a35cd73d00f01c34dcce&query=`,
//                 "method": "GET"
//             }).then((searchedMovieData) => {
//                 console.log(searchedMovieData)

