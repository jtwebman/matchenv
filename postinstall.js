var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

exec(path.join(__dirname, 'node_modules', 'bs-platform', 'lib', 'bsb'), function(err, stdout, stderr) {
  if (err) {
    console.error(err);
    return;
  }
  
  fs.createReadStream(path.join(__dirname, 'lib', 'bs', 'bytecode', 'matchenv'))
    .pipe(fs.createWriteStream('matchenv'));  
  console.log("Successfully built matchenv!");
});
