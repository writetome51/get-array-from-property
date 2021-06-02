import {getArrayOfProperty} from './index.js';
import {isMatch} from '@writetome51/is-match';


// TEST 1:
let people = [
	{name: 'Tom', age: 20},
	{name: 'Ron', age: 40},
	{name: 'Hank', age: 70},
];
let names = getArrayOfProperty('name', people);
if (isMatch(names, ['Tom', 'Ron', 'Hank'])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:
let arrs = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12]
];
let result = getArrayOfProperty('1', arrs);
if (isMatch(result, [2, 6, 10])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3:
let numbers = [
	[[1, 2], [3, 4]],
	[[5, 6], [7, 8]],
	[[9, 10], [11, 12]]
];
let nums = getArrayOfProperty('1.0', numbers);
if (isMatch(nums, [3, 7, 11])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4:
people = [
	{name: {first: 'Tom', last: 'Johnson'}},
	{name: {first: 'Ron', last: 'Thompson'}},
	{name: {first: 'Hank', last: 'Lawrence'}},
];
names = getArrayOfProperty('name.last', people);
if (isMatch(names, ['Johnson', 'Thompson', 'Lawrence'])) console.log('test 4 passed');
else console.log('test 4 FAILED');



// TEST 6:
let errorTriggered = false;
try {
	result = getArrayOfProperty(true, people);
} catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Speed test
let arr = [];
for (let i = 0; i < 1000000; ++i) arr.push({num: i});
console.time('check');
result = getArrayOfProperty('num', arr);
console.timeEnd('check')
console.log(result.length);
// Avg speed of 20 tests: 150ms
