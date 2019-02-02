import { getProperty } from '@writetome51/get-property';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


// param 'property' is allowed to include dot-notation.

export function getArrayFromProperty(property, objects): any[] {
	errorIfNotPopulatedArray(objects);
	let values = [];
	for (let i = 0; i < objects.length; ++i) {
		let value = getProperty(property, objects[i]);
		values.push(value);
	}
	return values;
}
