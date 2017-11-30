

const $ = require("jquery")
const firebase = require("firebase")
const movieFactory = require("./movieFactory")
const dataHandler = require("./dataHandler")



const watchlistDOM = function () {
    $("#watchList").append(`
    
    `
    )
}












// const showWatchlist = function(event){
//     $("#unwatched-movies").on("click", event => {

//         dataHandler.userTokenGET()
//         .then(results => {
//             console.log("======= hit")
//             console.log(results)
//         }).catch(err => {
//             console.log("err" + err)
//         })
//     })
// }

// module.exports = showWatchlist