import {getArrFilled} from '@writetome51/get-arr-filled';
import {getProperty} from '@writetome51/get-property';


// `property` is allowed to include dot-notation.

export function getArrayOfProperty(property, objects) {
	return getArrFilled(objects.length, (i) => getProperty(property, objects[i]));
}
