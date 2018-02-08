var fs = require('fs')

// var targetFile = './desktop/src/app/index.html'
// fs.readFile(targetFile, 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   var result = data.replace(/="\//g, '="./');
//
//   fs.writeFile(targetFile, result, 'utf8', function (err) {
//      if (err) return console.log(err);
//   });
// });

function changePath(targetFolder, targetFile) {
  var targetPath = targetFolder + targetFile;
  if (targetPath.endsWith('.html')) {
    fs.readFile(targetPath, 'utf8', function (err,data) {
      if (err) { return console.log(err) }
      var result = data.replace(/="\//g, '="./');
      // result = data.replace(/src="\//g, 'src="./');
      // result = data.replace(/"\/assets/g, '"./assets');
      fs.writeFile(targetPath, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });
  }

  if (targetPath.endsWith('.js') || targetPath.endsWith('.map')) {

    fs.readFile(targetPath, 'utf8', function (err,data) {
      if (err) { return console.log(err) }
      var result = data.replace(/href="\//g, 'href="./');
      // result = data.replace(/src="\//g, 'src="./');
      // result = data.replace(/"\/assets/g, '"./assets');
      fs.writeFile(targetPath, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });

    fs.readFile(targetPath, 'utf8', function (err,data) {
      if (err) { return console.log(err) }
      var result = data.replace(/"\/assets/g, '"./assets');
      // result = data.replace(/src="\//g, 'src="./');
      // result = data.replace(/"\/assets/g, '"./assets');
      fs.writeFile(targetPath, result, 'utf8', function (err) {
         if (err) return console.log(err);
      });
    });

  }
}

var testFolder = './desktop/src/app/'
fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    changePath(testFolder, file);
  });
})
