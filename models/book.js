var mongoose = require('mongoose');

//Book Schema
let bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
   genre:{
        type:String,
        required:true
    },
   description:{
        type:String,
        required:true
    },
   author:{
        type:String,
        required:true
    },
   publisher:{
        type:String,
        required:true
    },
   pages:{
        type:String
    },
   image_url:{
        type:String
    },
    created_date:{
        type:Date,
        default:Date.now
    }
});

let Book = module.exports = mongoose.model('Book',bookSchema);
// get Books
module.exports.getBooks = function(callback,limit){
    Book.find(callback).limit(limit);

}
// get Books by Id
module.exports.getBookById = function(id,callback){
    Book.findById(id,callback);

}

// add Book
module.exports.addBook = function(book,callback){
    Book.create(book,callback);

}