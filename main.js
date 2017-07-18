var express = require("express");
var path = require('path');
var app = express();

app.use("/", express.static(path.resolve(__dirname, 'dist')));

app.use('*', function (req, res) {
  var file = path.resolve('dist', 'index.html');
  console.log(file)
  res.sendFile(file);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("Listening on port %d!", this.address().port);
});
