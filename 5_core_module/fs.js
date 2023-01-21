const fs = require("fs");

// fs.appendFile("my_text_file.txt", "Hello Mehedi!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

fs.readFile('./my_text_file.txt', function (err, data) {
    console.log(data.toString());
})


console.log("hello hasan")
