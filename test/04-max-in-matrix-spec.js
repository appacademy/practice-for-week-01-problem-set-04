const { expect } = require('chai');

const maxInMatrix = require('../problems/04-max-in-matrix');

describe('maxInMatrix()', function () {
	it('returns the max value in a matrix of positive integers', function () {
		const inputMatrixOne = [
			[11, 2, 99],
			[20, 19, 10],
			[47, 72, 56],
		];
		const inputMatrixTwo = [
			[1, 2, 3],
			[4, 500, 6],
			[7, 8, 9],
		];

		const outputOne = 99;
		const outputTwo = 500;

		expect(maxInMatrix(inputMatrixOne)).to.equal(outputOne);
		expect(maxInMatrix(inputMatrixTwo)).to.equal(outputTwo);
	});

	it('returns the max value in a matrix of negative integers', function () {
		const inputMatrixOne = [
			[-11, -2, -99],
			[-20, -19, -10],
			[-47, -72, -56],
		];
		const inputMatrixTwo = [
			[-1, -2, -3],
			[-4, -500, -6],
			[-7, -8, -9],
		];

		const outputOne = -2;
		const outputTwo = -1;

		expect(maxInMatrix(inputMatrixOne)).to.equal(outputOne);
		expect(maxInMatrix(inputMatrixTwo)).to.equal(outputTwo);
	});

	it('returns the max value in a matrix of mixed integers', function () {
		const inputMatrixOne = [
			[-11, 2, -99],
			[20, 19, 10],
			[-47, 72, -56],
		];
		const inputMatrixTwo = [
			[-1, 2, 3],
			[4, -500, -6],
			[-7, -8, -9],
		];

		const outputOne = 72;
		const outputTwo = 4;

		expect(maxInMatrix(inputMatrixOne)).to.equal(outputOne);
		expect(maxInMatrix(inputMatrixTwo)).to.equal(outputTwo);
	});
});
