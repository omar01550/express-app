const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.send("home page " + Math.floor(Math.random() * 1000))
})



app.listen(3000, () => {
    console.log('server working');
})