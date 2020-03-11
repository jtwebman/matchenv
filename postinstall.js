"use strict";

const exec = require("child_process").exec;
const fs = require("fs");
const path = require("path");

exec(path.join(__dirname, "bs-platform", "lib", "bsb.exe"), function(
  err,
  stdout,
  stderr
) {
  if (err) {
    console.error(stdout, stderr);
    return;
  }

  fs.createReadStream(
    path.join(__dirname, "lib", "bs", "bytecode", "matchenv")
  ).pipe(fs.createWriteStream("matchenv"));
  fs.chmodSync("matchenv", "755");
  console.log("Successfully built matchenv!");
});
