//Testing a dependenci

var figlet = require("figlet");

figlet("learning npm!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});