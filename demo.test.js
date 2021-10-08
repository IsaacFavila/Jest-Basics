const funcs = require('./demo');


describe('Test sum function', () => {
  test('expect 1 + 2 to equal 3', () => {
    expect(funcs.sum(1, 2)).toEqual(3);
  })
  test('expect 1 + 2 to not equal 5', () => {
    expect(funcs.sum(1, 2)).not.toEqual(5);
  })
});

// describe('Test reverseString function', () => {
//   test('expect Hello world to equal dlrow olleH', () => {
//     expect(funcs.reverseString('Hello world')).toEqual('dlrow olleH');
//   })
//   test('expect result to be a string', () => {
//     expect(typeof funcs.reverseString('Hello')).toEqual('string');
//   })
// });

// describe('Test rockPaperScissors function', () => {
//   test('expect 1 to return ["R", "P", "S"]', () => {
//     expect(funcs.rockPaperScissors(1)).toEqual(['R', 'P', 'S']);
//   })
//   test('expect 3 to have 27 combinations', () => {
//     expect(funcs.rockPaperScissors(3)).toHaveLength(27);
//   })
// });

// describe('Test bestCohort function', () => {
//   test('expect RFE5 to return true', () => {
//     expect(funcs.bestCohort('RFE5')).toBeTruthy();
//   })
//   test('expect anything else to return false', () => {
//     expect(funcs.bestCohort('RFE6')).toBeFalsy();
//   })
// });
