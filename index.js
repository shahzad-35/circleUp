const express = require("express");
var app = express();
const userRoutes = require('./routes/user');
const homeRoutes = require('./routes/home');

app.get("/", function (request, response) {
    response.send("Hello World!")
})

app.use(userRoutes)
app.use(homeRoutes)

app.set('view engine', 'ejs');
app.set('views', 'views');

app.listen(3000, function () {
    console.log("Started application on port %d", 3000)
});