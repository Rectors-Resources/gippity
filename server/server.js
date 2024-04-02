const express = require("express");
const app = express();


const { textChat } = require("./gpt4");

// textChat('whats poppin today my dude?')





app.listen(3000, () => {
  console.log("app listening at port 3000");
});
