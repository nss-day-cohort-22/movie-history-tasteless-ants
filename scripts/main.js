const auth = require("./auth/authorization")
const searchBar = require("./tmdb")
const dataHandler = require("./dataHandler")


auth.init()
auth.logout()
searchBar()