var fs = require("fs");

fileToRead = process.argv[2];

//Asyrnchronous - Opening & reading file

console.log("Going to open file!");

fs.readFile(fileToRea, function(err, data){
  if (err){
    return console.error(err);
  }
  console.log(data.toString());
})