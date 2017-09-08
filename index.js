require('./test.css')
var model = require('./Greeter.js')
document.querySelector('#root').appendChild(model())
let a = 111;
let b = 222;
var xxx = (c,d) => c*d;
console.log(xxx(a,b));