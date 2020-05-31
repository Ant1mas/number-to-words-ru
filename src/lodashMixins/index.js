import _ from 'lodash';
import deepMapValues from 'lodashMixins/deepMapValues';

_.mixin({
  ...deepMapValues,
});
