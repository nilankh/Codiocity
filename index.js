const express = require('express');
const bodyParser = require('body-parser');
var compiler = require('compilex');

const app = express();
// app.use(bodyParser())
// this is deprecated.

// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

var options = { stats: true } //prints stats on console
compiler.init(options)

const PORT = 5000
app.listen(PORT, console.log(`Server started on port ${PORT}`))
