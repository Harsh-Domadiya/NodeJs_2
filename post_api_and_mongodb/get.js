const server = require('express')();
const fs = require('fs')

server.get('/', function (req, res) {
    res.send("HI, This is first API")
})

server.get("/products", (req, res) => {
    const data = fs.readFileSync('product.json', 'utf-8'); // string
    res.send(JSON.parse(data))
})

server.get("/products/:id", (req, res) => {

    const id = req.params.id;

    const data = JSON.parse(fs.readFileSync('product.json', 'utf-8')); // string
    const resposne = data.filter(v => v.id == id);
    if (resposne.length) {
        return res.send(resposne)
    } else {
        return res.send("No Data Found")
    }
})

server.get("/product-multiple", (req, res) => {

    const id = req.query.id.split(","); // [3,4,5]

    const data = JSON.parse(fs.readFileSync('product.json', 'utf-8')); // string

    const resposne = data.filter(v => id.includes(String(v.id)));

    if (resposne.length) {
        return res.send(resposne)
    } else {
        return res.send("No Data Found")
    }

})


server.listen(5555, () => {
    console.log('Server is running on port');
})