require('./test.css')
var model = require('./Greeter.js')
// document.querySelector('#root').appendChild(model())
// let a = 111;
// let b = 222;
// var xxx = (c,d) => c*d;
// console.log(xxx(a,b));
// class Point{
// 	constructor(...params){
// 		this.a = params[0]
// 		let  copyArr = [1,2,3]
// 		let arr = [...copyArr]
// 	}
// 	toString(){
// 		console.log('toString')
// 	}
// 	toValue(){
// 		console.log('toValue')
// 	}
// }
// var aa = new Point(1,2,3);
// console.log(aa)
// https://product.m.360che.com/index.php?r=m/ajax/filter/index&option=series&id=5&brandtype=1&isJson=1&noIndex=1
let sidebar = new model({
	"id":'sidebar',
	"ajaxUrl":
});
let button = document.querySelector('#button');
button.addEventListener('click',function(){
	sidebar.data = {"id":5,"brandtype":1};

	sidebar.get({'data':sidebar.data});
	// sidebar.show({
	// 	// "data":{
	// 	// 	"id":5,
	// 	// 	"brandtype":1,
	// 	// 	"isJson":1,
	// 	// 	"noIndex":1
	// 	// },
	// 	"dataType":'html',
	// 	"success":data => {
	// 		let sidebar = document.querySelector('#sidebar');
	// 		sidebar.firstElementChild.innerHTML = data
	// 	}
	// },'className');
})