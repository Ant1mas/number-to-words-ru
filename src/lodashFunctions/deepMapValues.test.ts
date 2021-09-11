import _deepMapValues from './deepMapValues';

test('test', () => {
  expect(_deepMapValues({
    k1: 'v1',
    k2: {
      k21: {
        k211: {
          k2111: 'v2111',
          k2112: 'v2112'
        },
        k212: 'v212'
      },
      k22: {
        k221: 'v221',
        k222: 'v222',
        k223: 'v223'
      },
      k23: 'v23'
    },
    k3: {
      k31: 'v31'
    },
    k4: 'v4'
  }, 
  (path: string[], key: string, value: string) => {
    return `${value} + ${key}:${value}[${path}]`;
  })).toEqual({
    k1: 'v1 + k1:v1[]',
    k2: {
      k21: {
        k211: {
          k2111: 'v2111 + k2111:v2111[k2,k21,k211]',
          k2112: 'v2112 + k2112:v2112[k2,k21,k211]'
        },
        k212: 'v212 + k212:v212[k2,k21]'
      },
      k22: {
        k221: 'v221 + k221:v221[k2,k22]',
        k222: 'v222 + k222:v222[k2,k22]',
        k223: 'v223 + k223:v223[k2,k22]'
      },
      k23: 'v23 + k23:v23[k2]'
    },
    k3: {
      k31: 'v31 + k31:v31[k3]'
    },
    k4: 'v4 + k4:v4[]'
  });
});
