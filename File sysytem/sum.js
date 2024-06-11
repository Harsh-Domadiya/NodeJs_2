function add(a, b) {
    console.log("SUM")
    return a + b;
}

function min(c, d) {
    console.log("min")
    return c - d;
}

function mul(e, f) {
    console.log("Mul")
    return e * f;
}

function div(g, h) {
    console.log("Div")
    return g / h;
}


module.exports = { add, min, mul, div }