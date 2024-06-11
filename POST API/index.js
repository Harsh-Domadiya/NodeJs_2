const express = require('express');
const mongoose = require('mongoose');
const Testing = require('./model');

const url = "mongodb://localhost:27017/testing";


mongoose.connect(url)
    .then(() => console.log("DataBase connected"))
    .catch((err) => console.error(err))


const server = express();

// Middleware

server.use(express.json())


// server.use((req, res, cb) => {
//     console.log("API Hit 1")
//     cb();
// });

// server.use((req, res, cb) => {
//     console.log("Middleware 2")
//     res.send("User is not valid")
//     cb();
// });


const data = [];

server.post("/", (req, res) => {
    res.send("This is first POST APIs")
});


server.post("/create", async (req, res) => { // Error handling
    console.log(req.body)
    const data = await Testing.create(req.body)
    // data.push(req.body)
    res.send(data)
});


server.listen(5555, () => {
    console.log('Server is running on port');
})