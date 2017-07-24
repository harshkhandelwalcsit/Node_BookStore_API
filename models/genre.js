var mongoose = require('mongoose');

//genre schema
let genreSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    created_date:{
        type:Date,
        default:Date.now
    }
});

let Genre = module.exports = mongoose.model('Genre',genreSchema);

// get Genres
module.exports.getGenres = function(callback,limit){
    Genre.find(callback).limit(limit);

}
// add Genre
module.exports.addGenre = function(genre,callback){
    Genre.create(genre,callback);

}