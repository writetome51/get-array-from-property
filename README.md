# getArrayOfProperty(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;property: string,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;objects: object[]<br>): any[]

Returns array of values of `property` found in each of `objects`.  
`property` is a string that can include dot-notation ( 'property.subproperty.subsubproperty' ) .

Note:  `property` does not have to be an object key.  It can also be an array index.  
If getting the values of array indexes, here you need to use dot-notation and not  
square braces.  Example: `'1.0' // instead of [1][0]`


## Examples
```js
let people = [
    {name:'Tom', age: 20},
    {name:'Ron', age: 40},
    {name:'Hank', age: 70},
];
getArrayOfProperty('name', people);
// --> [ 'Tom', 'Ron', 'Hank' ]


people = [
    {name: {first: 'Tom', last: 'Johnson'}},
    {name: {first: 'Ron', last: 'Thompson'}},
    {name: {first: 'Hank', last: 'Lawrence'}},
];
getArrayOfProperty('name.last', people);
// --> [ 'Johnson', 'Thompson', 'Lawrence' ]


let numbers = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
];
getArrayOfProperty('1', numbers);
// --> [ 2, 6, 10 ]


numbers = [
	[[1,2], [3,4]],
	[[5,6], [7,8]],
	[[9,10], [11,12]]
];
getArrayOfProperty('1.0', numbers);
// --> [ 3, 7, 11 ]
```

## Installation
```bash
npm i @writetome51/get-array-of-property
```

## Loading
```js
import {getArrayOfProperty} from '@writetome51/get-array-of-property';
```
