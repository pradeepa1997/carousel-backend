const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const path = require("path");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./routers');
app.use('/', router);

const PORT = process.env.PORT || 3600;
app.listen(PORT, async function () {
  console.log('listening to port ' + PORT);
});

const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGODB_URI}${process.env.MONGODB_NAME}`,
{
  useNewUrlParser : true,
})
.then(() => console.log("Database Connected"))
.catch(err => console.log(err)
);

console.log(`${process.env.MONGODB_URI}${process.env.MONGODB_NAME}?retryWrites=true&w=majority`)

module.exports = app; 