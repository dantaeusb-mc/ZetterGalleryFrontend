import lodash from 'lodash';

/**
 * @see https://gist.github.com/Yimiprod/7ee176597fef230d1451
 * @param object
 * @param base
 */
const difference = (object: Object, base: Object): Object => {
  function changes(object: Object, base: Object): Object {
    return lodash.transform(object, function(result: any, value, key) {
      if (!lodash.isEqual(value, base[key])) {
        result[key] = (lodash.isObject(value) && lodash.isObject(base[key])) ? changes(value, base[key]) : value;
      }
    });
  }

  return changes(object, base);
}

export default difference;