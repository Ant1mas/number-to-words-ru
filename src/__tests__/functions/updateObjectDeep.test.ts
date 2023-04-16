import updateObjectDeep from 'src/functions/updateObjectDeep'

test('test', () => {
  expect(
    updateObjectDeep(
      {
        k1: 'v1',
        k2: {
          k21: 'v21',
          k22: {
            k221: 'v221',
            k222: 'v222',
          },
          k23: 'v23',
          k24: {
            k241: 'v241',
            k242: 'v242',
            k243: 'v243',
          },
        },
        k3: 'v3',
      },
      {
        k2: {
          k22: 'cv22',
          k23: 'cv23',
          k24: {
            k242: 'cv242',
          },
        },
        k3: 999,
      },
    ),
  ).toEqual({
    k1: 'v1',
    k2: {
      k21: 'v21',
      k22: {
        k221: 'v221',
        k222: 'v222',
      },
      k23: 'cv23',
      k24: {
        k241: 'v241',
        k242: 'cv242',
        k243: 'v243',
      },
    },
    k3: 'v3',
  })
})
