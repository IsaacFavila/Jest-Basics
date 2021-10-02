const funcs = require('./demo');


describe('Test sum function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(funcs.sum(1, 2)).toEqual(3);
  })
});
