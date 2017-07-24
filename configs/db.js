var mongoose = require('mongoose');
 
//database connection
mongoose.connect('mongodb://localhost/bookstore');
let db = mongoose.connection;

//check error in database connection
db.on('error',function(){
    console.log('error');
});


//check connection 
db.once('open',function(){
    console.log('Connected To mongoDB...');
})


module.exports = db;