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

router.get('/api/genres',function(req,res){
Genre.getGenres(function(err,genres){
if(err){
    throw err;
}else{
    res.json(genres);
}
})
});


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

router.get('/api/books',function(req,res){
Book.getBooks(function(err,books){
if(err){
    throw err;
}else{
    res.json(books);
}
})
});

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