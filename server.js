const express = require("express");
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;


app.use('/api/trashcan', require('./routes/trashcan'));

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});
