const $ = require("jquery")
// const firebase = require("firebase")

const searchBar = function(event){

    // On "enter keypress" artificially click the searchMovieInfo id
    $("#movieTitle").on("keypress", function(event) {
        if (event.keyCode === 13) {
        $("#searchMovieInformation").click()}
    })
    // On click of searchMovieInfo id, start ajax call
    $("#searchMovieInformation").on("click", event => {
        console.log("search Button is working")
        // Get information from movie json based on search criteria in search field
        $.ajax({
            "url": `https://api.themoviedb.org/3/search/movie?api_key=3693ec3ce2f4a35cd73d00f01c34dcce&query=${$("#movieTitle").val()}`,
            "method": "GET"
        }).then((searchedMovieData) => {
            console.log(searchedMovieData)

            // Where we will append the searched movie information on the DOM
            let titleEl = $("#movieName")
            // Clear the search results contents
            titleEl.empty()
            // Clear the search criteria in input field
            $("#movieTitle").val("")

            // Pull the title, and release date of all search results and append them to DOM
            searchedMovieData.results.forEach(function(movieObj) {
                console.log(movieObj.title)
                console.log(movieObj.release_date)
                titleEl.append(`<img src="https://image.tmdb.org/t/p/w500/${movieObj.poster_path}">`)
                titleEl.append(`<p>${movieObj.title}</p>`)
                titleEl.append(`<p>${movieObj.release_date}</p>`)
        }, this);
        })
    })
}
module.exports = searchBar
