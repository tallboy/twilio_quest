const glob = require("glob");
const path = require("path");

glob.sync("./src/*.js").forEach(function (file) {
  require(path.resolve(file));
});
