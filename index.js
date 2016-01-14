var express = require('express');
var bodyParser = require('body-parser');

var books = ['Dune', 'Grapes of Wrath', '1984'];

var app = express();

// 1.
// always parse http body as JSON
// assigns result to req.body
app.use(bodyParser.json());

// 2.
// must be a http GET method
// if path === '/books'
// then run the callback function
app.get('/books', function(req, res, next) {
    res.send(books);
});

// 3.
// must be a http POST method
// if path === '/books'
// then run the callback function
app.post('/books', function(req, res, next) { // request, response, next
    console.log(req.body);
    books.push(req.body.name);
    res.send(books);
});

// 4. 
// must be a http PUT method
app.put('/books', function(req, res, next) {
    var newPosition = req.body.position;
    books[newPosition] = req.body.newName;
    res.send(books);
});

// 5. 
// must be a http DELETE method
app.delete('/books/:id', function(req, res, next) {
    books.splice(req.params.id, 1);
    res.send(books);
});


var port = 3000;
app.listen(port, function() {
    console.log('listening on port ' + port);
});
