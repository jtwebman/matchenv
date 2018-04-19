var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

exec(require.resolve(path.join('bs-platform', 'lib', 'bsb.exe')), function(err, stdout, stderr) {
  if (err) {
    console.error(stdout, stderr);
    return;
  }
  
  fs.createReadStream(path.join(__dirname, 'lib', 'bs', 'bytecode', 'matchenv'))
    .pipe(fs.createWriteStream('matchenv.exe'));
  fs.chmodSync('matchenv.exe', '755');
  console.log("Successfully built matchenv!");
});
