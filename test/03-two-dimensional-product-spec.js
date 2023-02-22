const { expect } = require('chai');

const twoDimensionalProduct = require('../problems/03-two-dimensional-product');

describe('twoDimensionalProduct()', function () {
	it('returns the total product of a two dimensional array of positive integers', function () {
		const inputArrOne = [
			[11, 2],
			[3, 9, 1],
		];
		const inputArrTwo = [
			[1, 2, 3],
			[4, 6, 1],
		];

		const outputOne = 594;
		const outputTwo = 144;

		expect(twoDimensionalProduct(inputArrOne)).to.equal(outputOne);
		expect(twoDimensionalProduct(inputArrTwo)).to.equal(outputTwo);
	});

	it('returns the total product of a two dimensional array of negative integers', function () {
		const inputArrOne = [
			[-11, -2],
			[-3, -9, -1],
		];
		const inputArrTwo = [
			[-1, -2, -3],
			[-4, -6, -1],
		];

		const outputOne = -594;
		const outputTwo = 144;

		expect(twoDimensionalProduct(inputArrOne)).to.equal(outputOne);
		expect(twoDimensionalProduct(inputArrTwo)).to.equal(outputTwo);
	});

	it('returns the total product of a two dimensional array of mixed integers', function () {
		const inputArrOne = [
			[-11, 2],
			[3, -9, 1],
		];
		const inputArrTwo = [
			[-1, 2, 3],
			[-4, -6, 1],
		];

		const outputOne = 594;
		const outputTwo = -144;

		expect(twoDimensionalProduct(inputArrOne)).to.equal(outputOne);
		expect(twoDimensionalProduct(inputArrTwo)).to.equal(outputTwo);
	});
});
