const { default: mongoose } = require("mongoose");

const movieSchema=mongoose.Schema({
movieMane:String,
movieDirector:String,
category:String,
releaseYear:String

})
const MovieData=mongoose.model("movie",movieSchema);
module.exports=MovieData