import * as _ from 'lodash';

const _deepMapValues = (object: object, iteratee: Function): object => {
  const result = _.cloneDeep(object);
  const iterateObject = (object: object, path: any[] = []) => {
    _.forOwn(object, (value: any, key: string)=> {
      if (_.isPlainObject(value)) {
        value = iterateObject(value, [...path, key]);
      } else {
        _.set(result, [...path, key], iteratee(path, key, value));
      }
    });
  };
  iterateObject(object);
  return result;
};

export default _deepMapValues;
