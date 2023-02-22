const { expect } = require('chai');

const twoSum = require('../problems/02-two-sum');

describe('twoSum()', function () {
	it('returns "true" if the target exists in a small input array', function () {
		const inputArrOne = [3, 2, 4, 1];
		const inputArrTwo = [-2, -1, 0, 1, 2];

		const inputTargetOne = 5;
		const inputTargetTwo = 0;

		expect(twoSum(inputArrOne, inputTargetOne)).to.be.true;
		expect(twoSum(inputArrTwo, inputTargetTwo)).to.be.true;
	});

	it('returns "true" if the target exists in a large input array', function () {
		const inputArrOne = [-6, -11, 13, 75, 2, 18, 6, 10, -22, 51];
		const inputArrTwo = [-6, 11, 13, -75, -2, 18, -6, -10, 22, 51];

		const inputTargetOne = -20;
		const inputTargetTwo = 62;

		expect(twoSum(inputArrOne, inputTargetOne)).to.be.true;
		expect(twoSum(inputArrTwo, inputTargetTwo)).to.be.true;
	});

	it('returns "false" if the target does not exist within the input array', function () {
		const inputArrOne = [3, 2, 4, 1];
		const inputArrTwo = [-6, -11, 13, 75, 2, 18, 6, 10, 22, 51];

		const inputTargetOne = 50;
		const inputTargetTwo = -2;

		expect(twoSum(inputArrOne, inputTargetOne)).to.be.false;
		expect(twoSum(inputArrTwo, inputTargetTwo)).to.be.false;
	});
});
