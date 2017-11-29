const auth = require("./auth/authorization")
const search = require("./tmdb")
const dataHandler = require("./dataHandler")


auth.init()
auth.logout()
search.searchBar()