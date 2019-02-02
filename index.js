"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_property_1 = require("@writetome51/get-property");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
// param 'property' is allowed to include dot-notation.
function getArrayFromProperty(property, objects) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(objects);
    var values = [];
    for (var i = 0; i < objects.length; ++i) {
        var value = get_property_1.getProperty(property, objects[i]);
        values.push(value);
    }
    return values;
}
exports.getArrayFromProperty = getArrayFromProperty;
