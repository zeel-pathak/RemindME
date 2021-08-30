let express = require('express');
let app = express();

var homeRouter = require('./routes/home');

app.use('/', homeRouter);

app.listen(3000);
console.log("Server is listining ar port 3000");