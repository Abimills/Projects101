const express = require('express');
const app = express();
const todoController = require('./controllers/todoController');

// set up static file
app.use(express.static('./public'));

// set up view engine
app.set('view engine','ejs');

// invoke todo controller 

todoController(app);

app.listen(3000,() => console.log('Server running on port 3000'));