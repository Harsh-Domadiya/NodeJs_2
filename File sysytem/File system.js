const fs = require("fs")

const data = fs.readFileSync("read me.txt", "utf-8")

console.log(data)

