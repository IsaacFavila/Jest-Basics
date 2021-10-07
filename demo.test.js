const funcs = require('./demo');


describe('Test sum function', () => {
  test('expect 1 + 2 to equal 3', () => {
    expect(funcs.sum(1, 2)).toEqual(3);
  })
  test('expect 1 + 2 to not equal 5', () => {
    expect(funcs.sum(1, 2)).not.toEqual(5);
  })
});

describe('Test difference function', () => {
  test('expect 1 - 2 to equal -1', () => {
    expect(funcs.difference(1, 2)).toEqual(-1);
  })
  test('expect 1 - 2 to not equal 0', () => {
    expect(funcs.difference(1, 2)).not.toEqual(0);
  })
});
