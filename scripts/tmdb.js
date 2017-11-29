const $ = require("jquery")
// const firebase = require("firebase")

const searchBar = function (event) {

    // On "enter keypress" artificially click the searchMovieInfo id
    $("#movieTitle").on("keypress", function (event) {
        if (event.keyCode === 13) {
            $("#searchMovieInformation").click()
        }
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

            const searchedMovieArray = searchedMovieData
            // Where we will append the searched movie information on the DOM
            let movieInfoEl = $("#movieInfo")
            // Clear the search results contents
            movieInfoEl.empty()
            // Clear the search criteria in input field
            $("#movieInfo").val("")

            // Pull the title, and release date of all search results and append them to DOM
            searchedMovieData.results.forEach(function (movieObj) {
                console.log(movieObj.title)

                let movieInfoDiv = document.createElement("div")
                movieInfoDiv.id = `movie_${movieObj.id}`
                movieInfoEl.append(movieInfoDiv)

                let movieImg = document.createElement("img")
                let movieTitle = document.createElement("p")
                let movieWatchButton = document.createElement("button")

                movieImg.src = `https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`
                movieTitle.appendChild(document.createTextNode(`${movieObj.title}`))
                movieWatchButton.classList.add("watchButton")
                movieWatchButton.appendChild(document.createTextNode("Add To Watchlist"))

                movieInfoDiv.append(movieImg)
                movieInfoDiv.append(movieTitle)
                movieInfoDiv.append(movieWatchButton)

            }, this);
            $(".watchButton").on("click", event => {
                console.log(event.target.parentNode.id)
            })
        })
    })
}
module.exports = searchBar
