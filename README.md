# getArrayFromProperty()

## getArrayFromProperty(property: string, objects): any[]

Returns array of values of <b>property</b> found in each of <b>objects</b>.

## Examples
```
let people = [
    {name:'Tom', age: 20},
    {name:'Ron', age: 40},
    {name:'Hank', age: 70},
];
let names = getArrayFromProperty('name', people);
// names is [ 'Tom', 'Ron', 'Hank' ]


let numbers = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
];
let indexOnes = getArrayFromProperty('1', numbers);
// indexOnes is [ 2, 6, 10 ]


let people = [
    {name: {first: 'Tom', last: 'Johnson'}},
    {name: {first: 'Ron', last: 'Thompson'}},
    {name: {first: 'Hank', last: 'Lawrence'}},
];
let names = getArrayFromProperty('name.last', people);
// names is [ 'Johnson', 'Thompson', 'Lawrence' ]
```

## Loading
```
// if using TypeScript:
import {getArrayFromProperty} from '@writetome51/get-array-from-property';
// if using ES5 JavaScript:
var getArrayFromProperty = 
    require('@writetome51/get-array-from-property').getArrayFromProperty;
```