const methods = require('../2_majority_event.js');
const countMajority = methods.countMajority;

test('returns the total amount of majority elevents', () => {
	expect(countMajority(5, [2, 3, 9, 2, 2])).toBe(1);
});

