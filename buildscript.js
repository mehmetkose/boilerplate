var fs = require('fs')

var someFile = './test'
fs.readFile(someFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/="\//g, '="./');

  fs.writeFile(someFile, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
