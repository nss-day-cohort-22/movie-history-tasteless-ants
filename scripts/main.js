
const auth = require("./authorization")
const moviedb = require("./tmdb")

auth.init()
auth.register()
auth.logout()