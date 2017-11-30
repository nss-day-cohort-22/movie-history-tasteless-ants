
const $ = require("jquery")
const firebase = require("firebase")
const dataHandler = require("./dataHandler")


const watchToggle = function () {

$("#unwatched-movies").on("click", event => {
    dataHandler.userTokenGET()
        .then(watchList => {

            // watchListEl.empty()

            for (let key in watchList) {

                if (watchList.hasOwnProperty(key)) {

                    let watchListEl = $("#watchList")[0]
                    let movieObj = watchList[key]
                    let watched = movieObj.watched

                    if (watched === false) {
                        let movieObj = watchList[key]

                        let watchListDiv = document.createElement("div")
                        watchListDiv.id = `movie_${movieObj.id}`
                        watchListEl.append(watchListDiv)

                        let movieImg = document.createElement("img")
                        let movieTitle = document.createElement("p")
                        let movieYear = document.createElement("p")
                        let movieDeleteButton = document.createElement("button")

                        movieImg.src = `https://image.tmdb.org/t/p/w500/${movieObj.poster}`
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
            }
        })
    })

$("#watched-movies").on("click", event => {
    dataHandler.userTokenGET()
    .then(watchList => {

        // watchListEl.empty()

        for (let key in watchList) {

            if (watchList.hasOwnProperty(key)) {

                let watchListEl = $("#watchList")[0]
                let movieObj = watchList[key]
                let watched = movieObj.watched

                if (watched === true) {

                    let movieObj = watchList[key]

                    let watchListDiv = document.createElement("div")
                    watchListDiv.id = `movie_${movieObj.id}`
                    watchListEl.append(watchListDiv)

                    let movieImg = document.createElement("img")
                    let movieTitle = document.createElement("p")
                    let movieYear = document.createElement("p")
                    let movieDeleteButton = document.createElement("button")

                    movieImg.src = `https://image.tmdb.org/t/p/w500/${movieObj.poster}`
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
        }
    })
})
}
module.exports = watchToggle