const http = require("http")
const fs = require('fs')

http.createServer((req, res) => {
    const data = fs.readFileSync("./dataApi.json", "utf-8")
    res.end(data)
}).listen(1818)

