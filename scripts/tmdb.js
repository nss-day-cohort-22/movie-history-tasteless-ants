const $ = require("jquery")
// const firebase = require("firebase")

const searchBar = function(event){

    $("#searchMovieInformation").on("click", event => {
        console.log("search Button is working")
        $.ajax({
            "url": `https://api.themoviedb.org/3/search/movie?api_key=3693ec3ce2f4a35cd73d00f01c34dcce&query=${$("#movieTitle").val()}`,
            "method": "GET"
        }).then((results) => {
        console.log(results)
        })
    })
}
module.exports = searchBar
