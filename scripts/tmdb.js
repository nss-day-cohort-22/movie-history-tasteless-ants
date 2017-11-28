const $ = require("jquery")
// const firebase = require("firebase")

const searchBar = function(event){

    $("#movieTitle").on("keypress", function(event) {
        if (event.keyCode === 13) {
        $("#searchMovieInformation").click()}
    })

    $("#searchMovieInformation").on("click", event => {
        console.log("search Button is working")

        $.ajax({
            "url": `https://api.themoviedb.org/3/search/movie?api_key=3693ec3ce2f4a35cd73d00f01c34dcce&query=${$("#movieTitle").val()}`,
            "method": "GET"
        }).then((searchedMovieData) => {
            console.log(searchedMovieData)
        let titleEl = $("#movieName")
        titleEl.empty()
        $("#movieTitle").val("")
        searchedMovieData.results.forEach(function(movieObj) {
            console.log(movieObj.title)
            console.log(movieObj.release_date)
            titleEl.append(`<p>${movieObj.title}</p>`)
            titleEl.append(`<p>${movieObj.release_date}</p>`)
        }, this);
        })
    })
}
module.exports = searchBar
