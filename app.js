const routes = require('./routes'),
    bodyParser = require("body-parser"),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', routes);

app.use("*", (req, res, next) => {
    res.sendStatus(404);
})
app.listen(port);

console.log('Server running on port ' + port);