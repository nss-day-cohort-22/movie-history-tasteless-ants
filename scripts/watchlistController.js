

const $ = require("jquery")
const firebase = require("firebase")
const movieFactory = require("./movieFactory")
const dataHandler = require("./dataHandler")

let watchListDOM = function(event){

    $("#your-movies").on("click", event => {

        dataHandler.userTokenGET()
            .then(watchList => {
            // Clear the search results contents


            for (let key in watchList) {

                if (watchList.hasOwnProperty(key)) {

                        let watchListEl = $("#watchList")[0]
                        let movieObj = watchList[key]

                        let watchListDiv = document.createElement("div")
                        watchListDiv.id = `movie_${movieObj.id}`
                        watchListEl.append(watchListDiv)

                        let movieImg = document.createElement("img")
                        let movieTitle = document.createElement("p")
                        let movieYear = document.createElement("p")
                        let movieDeleteButton = document.createElement("button")

                        movieImg.src = `https://image.tmdb.org/t/p/w500/${movieObj.poster_path}`
                        movieTitle.appendChild(document.createTextNode(`${movieObj.title}`))
                        movieYear.appendChild(document.createTextNode(`${movieObj.year}`))
                        movieDeleteButton.classList.add(`deleteMovie_${movieObj.id}`)
                        movieDeleteButton.appendChild(document.createTextNode("Delete from Watchlist"))

                        watchListDiv.append(movieImg)
                        watchListDiv.append(movieTitle)
                        watchListDiv.append(movieYear)
                        watchListDiv.append(movieDeleteButton)
                    }
                }
            })
        })
    }
    module.exports = watchListDOM