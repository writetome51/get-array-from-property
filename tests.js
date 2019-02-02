let getArrayFromProperty = require('./index').getArrayFromProperty;


let people = [
	{name:'Tom', age: 20},
	{name:'Ron', age: 40},
	{name:'Hank', age: 70},
];
let names = getArrayFromProperty('name', people);
console.log(names);



let arrs = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
];

let result = getArrayFromProperty('1', arrs);

console.log(result);


people = [
	{name: {first: 'Tom', last: 'Johnson'}},
	{name: {first: 'Ron', last: 'Thompson'}},
	{name: {first: 'Hank', last: 'Lawrence'}},
];
names = getArrayFromProperty('name.last', people);
console.log(names);
