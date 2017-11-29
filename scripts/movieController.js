const $ = require("jquery")
const firebase = require("firebase")
const movieFactory = require("./movieFactory")
const dataHandler = require("./dataHandler")


const addToWatchList = function(event){
    $(".watchButton").on("click", event => {
        const search = require("./tmdb")
        console.log("search.getSearchedMovie", search.getSearchedMovie())
        console.log(event.target.parentNode.id)
        // get data from the searchedMovieData
        let movieIDArray = event.target.parentNode.id.split("_")
        console.log(movieIDArray[1])
        let movieID = movieIDArray[1]

        let movieToSave = search.getSearchedMovie().find(movie => {
            return movie.id === parseInt(movieID)
        })
        console.log(movieToSave)
        // run it through the movieFactory
        const newMoviePost = movieFactory(movieToSave)

        // put those sweet objects in Firebase with CRUD... somehow
        dataHandler.userTokenPOST(newMoviePost)
    })
}
module.exports = addToWatchList
