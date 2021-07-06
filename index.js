const express = require('express');
const bodyParser = require('body-parser');
var compiler = require('compilex');

const app = express();
app.use(bodyParser())



const PORT = 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))
