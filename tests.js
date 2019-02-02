let getArrayFromProperty = require('./index').getArrayFromProperty;


let arrs = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
];

let result = getArrayFromProperty('1', arrs);

console.log(result);


let people = [
	{name: {first: 'Tom', last: 'Johnson'}},
	{name: {first: 'Ron', last: 'Thompson'}},
	{name: {first: 'Hank', last: 'Lawrence'}},
];
let names = getArrayFromProperty('name.last', people);
console.log(names);