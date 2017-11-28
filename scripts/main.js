const auth = require("./auth/authorization")
const searchBar = require("./tmdb")

auth.init()
auth.logout()
searchBar()