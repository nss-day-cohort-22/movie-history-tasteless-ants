

const $ = require("jquery")
const firebase = require("firebase")
const movieFactory = require("./movieFactory")
const dataHandler = require("./dataHandler")
const DeleteButton = require("./deleteButton")

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
                        watchListDiv.class = `${key}`
                        watchListEl.append(watchListDiv)

                        let movieImg = document.createElement("img")
                        let movieTitle = document.createElement("p")
                        let movieYear = document.createElement("p")
                        let movieDeleteButton = document.createElement("button")

                        movieImg.src = `https://image.tmdb.org/t/p/w500/${movieObj.poster}`
                        movieTitle.appendChild(document.createTextNode(`${movieObj.title}`))
                        movieYear.appendChild(document.createTextNode(`${movieObj.year}`))
                        movieDeleteButton.id = `${movieObj.id}`
                        movieDeleteButton.classList.add("deleteMovie")
                        movieDeleteButton.appendChild(document.createTextNode("Delete from Watchlist"))

                        watchListDiv.append(movieImg)
                        watchListDiv.append(movieTitle)
                        watchListDiv.append(movieYear)
                        watchListDiv.append(movieDeleteButton)
                    }
                }
                DeleteButton()
            })
        })
    }
    module.exports = watchListDOM