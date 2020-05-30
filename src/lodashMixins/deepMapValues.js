const deepMapValues = {
  'deepMapValues': (object, iteratee) => {
    const result = _.cloneDeep(object);
    const iterateObject = (object, path = []) => {
      _.forOwn(object, (value, key) => {
        if (_.isPlainObject(value)) {
          value = iterateObject(value, [...path, key]);
        } else {
          _.set(result, [...path, key], iteratee(path, key, value));
        }
      });
    };
    iterateObject(object);
    return result;
  },
};

export default deepMapValues;
