// const binarySearch = require('./1_binary_search.js');
const methods = require('./1_binary_search.js');
const binarySearch = methods.binarySearch;
var searchKeyIndex = methods.searchKeyIndex;

test('returns the correct index for key in sortedArr', () => {
  expect(binarySearch([1, 5, 8, 12, 13], 0, 4, 1)).toBe(0);
  expect(binarySearch([1, 5, 8, 12, 13], 0, 4, 23)).toBe(-1);
  expect(binarySearch([1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12], 0, 11, 8)).toBe(6);
})

test('returns the correct array of indexs based on key array', () => {
  expect(searchKeyIndex(5, [1, 5, 8, 12, 13], [8, 1, 23, 1, 11])).toEqual('2 0 -1 0 -1');
  expect(searchKeyIndex(5, [1, 5, 8, 12, 13], [13, 12, 8, 1, 11])).toEqual('4 3 2 0 -1');
  expect(searchKeyIndex(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [1, 2, 3, 4, 5, 6, 7, 8, 9, -1])).toEqual('-1 0 1 2 3 4 5 6 7 8 9 -1');
})
