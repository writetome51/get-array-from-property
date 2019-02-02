
'use strict';

module.exports.getArrayFromProperty = function (prop, arr) {
  if (!(arr instanceof Array) || typeof prop !== 'string') {
    return [];
  }

  var res   = []
    , parts = prop.split('.')
    , obj;

  for (var i = 0, l = arr.length; i < l; i++) {
    obj = arr[i];

    for (var j = 0, k = parts.length; j < k; j++) {
      obj = obj[parts[j]];
    }

    res.push(obj);
  }

  return res;
};
