// Required Pages
const $ = require("jquery")
const firebase = require("firebase")
const auth = require("./auth/authorization")
// Where do I require data handler info? Within the event listener or in the require section?
const dataHandler = require("./dataHandler")
const watchList = require("./watchListController")

// Create an event listener to delete a specific tracked movie selected by the user:
// let movieObj = watchList[key]
const DeleteButton = function (event) {
    $(".deleteMovie").on("click", event => {
        console.log(event)
        dataHandler.userTokenDELETE(event)
    })
}

//To Delete from Fireabase:
// 1. access the movies from that specific user -
// 2. get the firebase ID
// 3. once you have the firebase ID plug it in to your ajax request - where "Movie.obj.id" is


module.exports = DeleteButton