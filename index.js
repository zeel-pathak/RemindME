let express = require('express');
let app = express();
var path = require('path');

var homeRouter = require('./routes/home');

app.use('/', homeRouter);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
console.log("Server is listining ar port 3000");