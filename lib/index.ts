import { getProperty } from '@writetome51/get-property';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';


// `property` is allowed to include dot-notation.

export function getArrayFromProperty(property, objects): any[] {
	errorIfLengthIsZero(objects);
	let values = [];
	for (let i = 0; i < objects.length; ++i) {
		values[i] = getProperty(property, objects[i]);
	}
	return values;
}
