import {getArrayFromProperty} from './index.js';
import {arraysMatch} from '@writetome51/arrays-match';


// TEST 1:
let people = [
	{name: 'Tom', age: 20},
	{name: 'Ron', age: 40},
	{name: 'Hank', age: 70},
];
let names = getArrayFromProperty('name', people);
if (arraysMatch(names, ['Tom', 'Ron', 'Hank'])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:
let arrs = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
];

let result = getArrayFromProperty('1', arrs);
if (arraysMatch(result, [2, 6, 10])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3:
let numbers = [
	[[1, 2], [3, 4]],
	[[5, 6], [7, 8]],
	[[9, 10], [11, 12]]
];
let nums = getArrayFromProperty('1.0', numbers);
if (arraysMatch(nums, [3, 7, 11])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4:
people = [
	{name: {first: 'Tom', last: 'Johnson'}},
	{name: {first: 'Ron', last: 'Thompson'}},
	{name: {first: 'Hank', last: 'Lawrence'}},
];
names = getArrayFromProperty('name.last', people);
if (arraysMatch(names, ['Johnson', 'Thompson', 'Lawrence'])) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5:
let errorTriggered = false;
try {
	result = getArrayFromProperty('', people);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// TEST 6:
errorTriggered = false;
try {
	result = getArrayFromProperty(true, people);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7:
errorTriggered = false;
try {
	result = getArrayFromProperty('business', []);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');
