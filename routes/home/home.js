var express = require('express');
var router = express.Router();
let Genre = require('../../models/genre');
let Book = require('../../models/book');
router.get('/',function(req,res){
var bodyParser = require('body-parser');
res.render('home/home',{
    title:'Welcome In Bookstore',

})
});
//get genres
router.get('/api/genres',function(req,res){
Genre.getGenres(function(err,genres){
if(err){
    throw err;
}else{
    res.json(genres);
}
})
});

//post genre
router.post('/api/genres',function(req,res){
    let genre = req.body;
Genre.addGenre(genre,function(err,genre){
if(err){
    throw err;
}else{
    res.json(genre);
}
})
});

//update genre
router.put('/api/genres/:_id',function(req,res){
    let id=req.params._id
    let genre = req.body;
Genre.updateGenre(id,genre,{},function(err,genre){
if(err){
    throw err;
}else{
    res.json(genre);
}
})
});


//delete genre
router.delete('/api/genres/:_id',function(req,res){
    let id=req.params._id

Genre.deleteGenre(id,function(err,genre){
if(err){
    throw err;
}else{
    res.json(genre);
}
})
});


//get books
router.get('/api/books',function(req,res){
Book.getBooks(function(err,books){
if(err){
    throw err;
}else{
    res.json(books);
}
})
});

//add book
router.post('/api/books',function(req,res){
    let book = req.body;
Book.addBook(book,function(err,book){
if(err){
    throw err;
}else{
    res.json(book);
}
})
}); 

//update book
router.put('/api/books/:_id',function(req,res){
    let id=req.params._id;
    let book = req.body;
Book.updateBook(id,book,{},function(err,book){
if(err){
    throw err;
}else{
    res.json(book);
}
})
}); 

//delete book
router.delete('/api/books/:_id',function(req,res){
    let id=req.params._id;

Book.deleteBook(id,function(err,book){
if(err){
    throw err;
}else{
    res.json(book);
}
})
});  

//get book by id
router.get('/api/book/:_id',function(req,res){
Book.getBookById(req.params._id,function(err,book){
if(err){
    throw err;
}else{
    res.json(book);
}
})
});

module.exports = router;