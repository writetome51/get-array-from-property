import {getArrFilled} from '@writetome51/get-arr-filled';
import {getProperty} from '@writetome51/get-property';
import {errorIfLengthIsZero} from 'error-if-length-is-zero';


// `property` is allowed to include dot-notation.

export function getArrayFromProperty(property, objects) {
	errorIfLengthIsZero(objects);

	return getArrFilled(objects.length, (i) => getProperty(property, objects[i]));
}
