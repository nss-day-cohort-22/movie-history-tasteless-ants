const $ = require("jquery")
const firebase = require("firebase")
const movieFactory = require("./movieFactory")
const dataHandler = require("./dataHandler")


const addToWatchList = function(event){
    $(".watchButton").on("click", event => {
        const search = require("./tmdb")
        // get data from the searchedMovieData
        let movieIDArray = event.target.parentNode.id.split("_")
        let movieID = movieIDArray[1]

        let movieToSave = search.getSearchedMovie().find(movie => {
            return movie.id === parseInt(movieID)
        })
        // run it through the movieFactory
        const newMoviePost = movieFactory(movieToSave)

        dataHandler.userTokenGET()
            .then(results => {
                console.log("======= hit")
                console.log(results)
            }).catch(err => {
                console.log("err" + err)
            })

        // put those sweet objects in Firebase with CRUD... somehow
        dataHandler.userTokenPOST(newMoviePost)
    })
}
module.exports = addToWatchList
