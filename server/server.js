const express = require("express");
const app = express();


const { textChat } = require("./gpt4");
// textChat('whats poppin today my dude?')
app.use(express.static('../client/dist'))



app.get('/', (req, res) => {
    res.sendFile('.index.html')
})



app.listen(3000, () => {
  console.log("app listening at port 3000");
});
