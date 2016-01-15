var express = require('express');
var bodyParser = require('body-parser');
var booksCtrl = require('./controllers/books_controller');

var app = express();


// 1.
// always parse http body as JSON
// assigns result to req.body
app.use(bodyParser.json());

// 2.
// must be a http GET method
// if path === '/books'
// then run the callback function
/* app.get('/books', function(req, res, next) {
    res.send(books); */
app.get('/books', booksCtrl.index);


// 3.
// must be a http POST method
// if path === '/books'
// then run the callback function
app.post('/books', booksCtrl.build);


// 4. 
// must be a http PUT method
app.put('/books', booksCtrl.update);

// 5. 
// must be a http DELETE method
app.delete('/books/:id', booksCtrl.destroy);


var port = 3000;
app.listen(port, function() {
    console.log('listening on port ' + port);
});
